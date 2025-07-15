<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ProductResource\Pages;
use App\Filament\Resources\ProductResource\RelationManagers;
use App\Models\CategoryProduct;
use App\Models\Product;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Actions\ActionGroup;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ProductResource extends Resource
{
    protected static ?string $model = Product::class;

    protected static ?string $navigationIcon = 'heroicon-o-shopping-bag';

    protected static ?string $navigationGroup = 'Products';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
            FileUpload::make('image')
                ->label('Product Image')
                ->acceptedFileTypes(['image/png', 'image/svg+xml', 'image/webp'])
                ->required()
                ->maxSize(2048)
                ->columnSpanFull()
                ->preserveFilenames()
                ->directory('products'),
            Grid::make([
                'default' => 1,
                'md' => 2
            ])
                ->schema([
                    TextInput::make('title')
                        ->label('Product Title')
                        ->required()
                        ->live(debounce: 500)
                        ->afterStateUpdated(fn ($state, callable $set) =>
                            $set('slug', Str::slug($state))
                        ),
                    TextInput::make('slug')
                        ->label('Slug')
                        ->placeholder('This input will be generated automatically')
                        ->readOnly(),
            ]),
            Grid::make([
                'default' => 1,
                'md' => 2
            ])
                ->schema([
                    Select::make('category_id')
                        ->label('Product Categories')
                        ->placeholder('Add categories into product')
                        ->searchable()
                        ->relationship('category', 'title')
                        ->options(CategoryProduct::pluck('title', 'id')->toArray())
                        ->required(),
                    TextInput::make('price')
                        ->label('Product Price')
                        ->required()
                        ->numeric()
                        ->prefix('Rp ')
                        ->suffix(',-'),
            ]),
            Grid::make([
                'default' => 1,
                'md' => 2
            ])
                ->schema([
                    TextInput::make('discount')
                        ->label('Discount (%)')
                        ->numeric()
                        ->suffix('%'),
                    TextInput::make('price_after_discount')
                        ->label('Product Price (After Discount)')
                        ->numeric()
                        ->prefix('Rp ')
                        ->suffix(',-'),
            ]),
            Grid::make([
                'default' => 1,
                'md' => 2
            ])->schema([
                TextInput::make('variant')
                    ->label('Varian Product')
                    ->placeholder('e.g. 200/500 gr, 1/2 kg, etc.'),
                TextInput::make('ingridients')
                    ->label('Ingridients')
                    ->placeholder('e.g. sauce, ketchup, chilli paper, etc.')
            ]),
            TextInput::make('anchor_link')
                ->label('Link Anchor')
                ->required()
                ->columnSpanFull(),
            Textarea::make('description')
                ->label('Product Description')
                ->placeholder('Write product description here...')
                ->columnSpanFull()
                ->rows(5)
                ->maxLength(5000),
            Select::make('is_promo')
                ->label('Is Product Promo?')
                ->options([
                    true => 'Yes',
                    false => 'No',
                ])
                ->boolean()
                ->default(true)
                ->columnSpanFull(),
            Select::make('status')
                ->label('Status Publication')
                ->options([
                    'published' => 'Published',
                    'draft' => 'Draft',
                ])
                ->default('draft')
                ->required()
                ->columnSpanFull(),
        ]);
    }

    public static function table(Table $table): Table
    {
        return $table
        ->columns([
            ImageColumn::make('image')
                ->label('Image')
                ->size(50),
            TextColumn::make('category.title')
                ->label('Category')
                ->searchable()
                ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
            TextColumn::make('title')
                ->label('Product Title')
                ->searchable()
                ->sortable(),
            TextColumn::make('status')
                ->badge()
                ->color(fn (string $state): string => match ($state) {
                    'draft' => 'danger',
                    'published' => 'success',
                })
                ->icon(fn (string $state): string => match ($state) {
                    'draft' => 'heroicon-o-document-text',
                    'published' => 'heroicon-o-check-circle',
                })
                ->extraAttributes(['class' => 'capitalize']),
            TextColumn::make('created_by')
                ->label('Created By')
                ->searchable()
                ->sortable(),
            TextColumn::make('updated_by')
                ->label('Updated By')
                ->searchable()
                ->sortable()
                ->default('-'),
            TextColumn::make('published_at')
                ->label('Published At')
                ->searchable()
                ->sortable(),
            TextColumn::make('published_by')
                ->label('Published By')
                ->searchable()
                ->sortable(),
        ])
        ->filters([
            Tables\Filters\TrashedFilter::make(),
            SelectFilter::make('status')
                ->label('Status')
                ->options([
                    'published' => 'Published',
                    'draft' => 'Draft',
                ]),
        ])
        ->actions([
            ActionGroup::make([
                Tables\Actions\EditAction::make()->color('info'),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),
                Action::make('status')
                    ->label('Change Status')
                    ->icon(fn (Product $record): string => $record->status === 'published' ? 'heroicon-o-document-text' : 'heroicon-o-rocket-launch')
                    ->requiresConfirmation()
                    ->action(function (Product $record) {
                        $record->status = $record->status === 'published' ? 'draft' : 'published';
                        $record->save();
                    })
                    ->requiresConfirmation()
                    ->color(fn (Product $record): string => $record->status === 'published' ? 'gray' : 'success'),
            ]),
        ])
        ->bulkActions([
            Tables\Actions\BulkActionGroup::make([
                Tables\Actions\DeleteBulkAction::make(),
                Tables\Actions\ForceDeleteBulkAction::make(),
                Tables\Actions\RestoreBulkAction::make(),
            ]),
        ])
        ->emptyStateHeading('No Article Found')
        ->emptyStateDescription('You can create a new article first.')
        ->emptyStateIcon('heroicon-o-exclamation-triangle');    
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListProducts::route('/'),
            'create' => Pages\CreateProduct::route('/create'),
            'edit' => Pages\EditProduct::route('/{record}/edit'),
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }
}
