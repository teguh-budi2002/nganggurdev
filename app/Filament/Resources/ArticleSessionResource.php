<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleSessionResource\Pages;
use App\Filament\Resources\ArticleSessionResource\RelationManagers;
use App\Models\ArticleSession;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ArticleSessionResource extends Resource
{
    protected static ?string $model = ArticleSession::class;

    protected static ?string $navigationIcon = 'heroicon-o-squares-plus';
    
    protected static ?string $navigationGroup = 'Articles';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image')
                    ->label('Article Series Image')
                    ->acceptedFileTypes(['image/png', 'image/svg+xml', 'image/webp'])
                    ->required()
                    ->maxSize(2048)
                    ->columnSpanFull()
                    ->preserveFilenames()
                    ->directory('article-series'),
                Grid::make([
                    'default' => 1,
                    'md' => 2,
                ])->schema([
                    TextInput::make('title_en')
                        ->label('Article Session or Series Title (English)')
                        ->placeholder('Ex: Tutorial Laravel with Filament, etc.')
                        ->required()
                        ->maxLength(255)
                        ->autocomplete('off')
                        ->live(onBlur: true)
                        ->afterStateUpdated( fn ($state, callable $set) => 
                            $set('slug_en', Str::slug($state))
                        ),
                    TextInput::make('title_id')
                        ->label('Article Session or Series Title (Indonesian)')
                        ->placeholder('Ex: Tutorial Laravel with Filament, etc.')
                        ->required()
                        ->maxLength(255)
                        ->autocomplete('off')
                        ->live(onBlur: true)
                        ->afterStateUpdated( fn ($state, callable $set) => 
                            $set('slug_id', Str::slug($state))
                        ),
                ]),
                Grid::make([
                    'default' => 1,
                    'md' => 2,
                ])->schema([
                    TextInput::make('slug_en')
                        ->label('Article Session Slug (English)')
                        ->placeholder('This input will be generated automatically')
                        ->unique(ArticleSession::class, 'slug_en', ignorable: fn (?ArticleSession $record) => $record),
                    TextInput::make('slug_id')
                        ->label('Article Session Slug (Indonesian)')
                        ->placeholder('This input will be generated automatically')
                        ->unique(ArticleSession::class, 'slug_id', ignorable: fn (?ArticleSession $record) => $record)
                ]),
                Grid::make([
                    'default' => 1,
                    'md' => 2,
                ])->schema([
                    Textarea::make('description_en')
                        ->label('Article Session Description (English)')
                        ->placeholder('Ex: This article series will cover the basics of Laravel with Filament.')
                        ->minLength(165)
                        ->maxLength(280)
                        ->rows(3),
                    Textarea::make('description_id')
                        ->label('Article Session Description (Indonesian)')
                        ->placeholder('Ex: Seri artikel ini akan membahas dasar-dasar Laravel dengan Filament.')
                        ->minLength(165)
                        ->maxLength(280)
                        ->rows(3),
                ]),
                Grid::make([
                    'default' => 1,
                    'md' => 2,
                ])->schema([
                    Textarea::make('meta_description_en')
                        ->label('Meta Description (English)')
                        ->placeholder('Ex: This article series will cover the basics of Laravel with Filament.')
                        ->maxLength(1000)
                        ->rows(3),
                    Textarea::make('meta_description_id')
                        ->label('Meta Description (Indonesian)')
                        ->placeholder('Ex: Seri artikel ini akan membahas dasar-dasar Laravel dengan Filament.')
                        ->maxLength(1000)
                        ->rows(3),
                ]),
                Select::make('difficult_level')
                    ->label('Difficulty Level')
                    ->options([
                        'Beginner' => 'Beginner',
                        'Medium' => 'Medium',
                        'Expert' => 'Expert',
                        'Intermediate' => 'Intermediate',
                    ])
                    ->required()
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                ImageColumn::make('image')
                    ->label('Article Series Image')
                    ->size(50),
                TextColumn::make('title_en')
                    ->label('Session / Series Title (English)')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('title_id')
                    ->label('Session / Series Title (Indonesian)')
                    ->searchable()
                    ->sortable()
            ])
            ->filters([
                Tables\Filters\TrashedFilter::make(),
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
                Tables\Actions\ForceDeleteAction::make(),
                Tables\Actions\RestoreAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                    Tables\Actions\ForceDeleteBulkAction::make(),
                    Tables\Actions\RestoreBulkAction::make(),
                ]),
            ])
            ->emptyStateHeading('No Tags Found')
            ->emptyStateDescription('You can create a new tag first.')
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
            'index' => Pages\ListArticleSessions::route('/'),
            'create' => Pages\CreateArticleSession::route('/create'),
            'edit' => Pages\EditArticleSession::route('/{record}/edit'),
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
