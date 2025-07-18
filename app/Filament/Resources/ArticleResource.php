<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Filament\Resources\ArticleResource\RelationManagers;
use App\Models\Article;
use App\Models\ArticleTag;
use App\Models\CategoryArticle;
use Filament\Tables\Actions\ActionGroup;
use Filament\Forms;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Filters\SelectFilter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Str;

class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationIcon = 'heroicon-o-newspaper';

    protected static ?string $navigationGroup = 'Articles';

    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                FileUpload::make('image')
                    ->label('Article Image')
                    ->acceptedFileTypes(['image/png', 'image/svg+xml', 'image/webp'])
                    ->required()
                    ->maxSize(2048)
                    ->columnSpanFull()
                    ->preserveFilenames()
                    ->directory('articles'),
                Select::make('article_session_id')
                    ->label('Article Session or Series')
                    ->placeholder('Select an article session or series')
                    ->relationship('articleSession', 'title_en')
                    ->searchable()
                    ->columnSpanFull(),
                Grid::make([
                    'default' => 1,
                    'md' => 2
                ])
                    ->schema([
                        TextInput::make('title_en')
                            ->label('Article Title (English)')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn ($state, callable $set) =>
                                $set('slug_en', Str::slug($state))
                            ),
                        TextInput::make('title_id')
                            ->label('Article Title (Indonesian)')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn ($state, callable $set) =>
                                $set('slug_id', Str::slug($state))
                            ),
                ]),
                Grid::make([
                    'default' => 1,
                    'md' => 2
                ])
                    ->schema([
                        TextInput::make('slug_en')
                            ->label('Slug (English)')
                            ->placeholder('This input will be generated automatically')
                            ->readOnly(),
                        TextInput::make('slug_id')
                            ->label('Slug (Indonesian)')
                            ->placeholder('This input will be generated automatically')
                            ->readOnly()
                ]),
                MarkdownEditor::make('content_en')
                    ->label('Article Content (English)')
                    ->required()
                    ->fileAttachmentsDirectory('articles/content_en')
                    ->fileAttachmentsVisibility('visible')
                    ->columnSpanFull(),
                MarkdownEditor::make('content_id')
                    ->label('Article Content (Indonesian)')
                    ->required()
                    ->fileAttachmentsDirectory('articles/content_id')
                    ->fileAttachmentsVisibility('visible')
                    ->columnSpanFull(),
                Select::make('categories')
                    ->label('Article Categories')
                    ->placeholder('Add categories into article')
                    ->columnSpanFull()
                    ->multiple()
                    ->searchable()
                    ->relationship('categories', 'title')
                    ->options(CategoryArticle::pluck('title', 'id')->toArray())
                    ->required(),
                TagsInput::make('tags')
                    ->label('Article Tags')
                    ->placeholder('Add tags into article')
                    ->columnSpanFull()
                    ->required()
                    ->suggestions(ArticleTag::pluck('name')->toArray()),
                Textarea::make('meta_description_en')
                    ->label('Meta Description (English)')
                    ->placeholder('Meta description for English article')
                    ->columnSpanFull()
                    ->maxLength(160)
                    ->autosize(),
                Textarea::make('meta_description_id')
                    ->label('Meta Description (Indonesian)')
                    ->placeholder('Meta description for Indonesian article')
                    ->columnSpanFull()
                    ->maxLength(160)
                    ->autosize(),
                Grid::make([
                    'default' => 1,
                    'md' => 2
                ])
                    ->schema([
                        TextInput::make('meta_keyword_en')
                            ->label('Meta Keywords (English)')
                            ->placeholder('Meta keywords for English article')
                            ->helperText('Separate keywords with commas, max 15 keywords.')
                            ->maxLength(255)
                            ->rule(function () {
                                return function ($attribute, $value, $fail) {
                                    $keywords = explode(',', $value);
                                    if (count($keywords) > 15) {
                                        $fail('Max 15 keywords.');
                                    }
                                };
                            }),
                        TextInput::make('meta_keyword_id')
                            ->label('Meta Keywords (Indonesian)')
                            ->placeholder('Meta keywords for Indonesian article')
                            ->helperText('Separate keywords with commas, max 15 keywords.')
                            ->maxLength(255)
                            ->rule(function () {
                                return function ($attribute, $value, $fail) {
                                    $keywords = explode(',', $value);
                                    if (count($keywords) > 15) {
                                        $fail('Max 15 keywords.');
                                    }
                                };
                            }),
                ]),
                Select::make('is_featured')
                    ->label('Featured Article?')
                    ->options([
                        true => 'Yes',
                        false => 'No',
                    ])
                    ->default('No')
                    ->required()
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
                TextColumn::make('articleSession.title_en')
                    ->label('Session / Series Title (English)')
                    ->searchable()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('title_en')
                    ->label('Article Title (English)')
                    ->searchable()
                    ->sortable(),
                TextColumn::make('categories.title')
                    ->label('Categories')
                    ->searchable()
                    ->sortable()
                    ->limit(50)
                    ->toggleable(isToggledHiddenByDefault: true),
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
                SelectFilter::make('articleSession.title_en')
                    ->label('Article Session or Series')
                    ->relationship('articleSession', 'title_en')
                    ->searchable()
                    ->options(Article::with('articleSession')->get()->pluck('articleSession.title_en', 'article_session_id')->toArray()),
            ])
            ->actions([
                ActionGroup::make([
                    Tables\Actions\EditAction::make()->color('info'),
                    Tables\Actions\DeleteAction::make(),
                    Tables\Actions\ForceDeleteAction::make(),
                    Tables\Actions\RestoreAction::make(),
                    Action::make('status')
                        ->label('Change Status')
                        ->icon(fn (Article $record): string => $record->status === 'published' ? 'heroicon-o-document-text' : 'heroicon-o-rocket-launch')
                        ->requiresConfirmation()
                        ->action(function (Article $record) {
                            $record->status = $record->status === 'published' ? 'draft' : 'published';
                            $record->save();
                        })
                        ->requiresConfirmation()
                        ->color(fn (Article $record): string => $record->status === 'published' ? 'gray' : 'success'),
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
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
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
