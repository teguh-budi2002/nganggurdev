<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleSessionResource\Pages;
use App\Filament\Resources\ArticleSessionResource\RelationManagers;
use App\Models\ArticleSession;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ArticleSessionResource extends Resource
{
    protected static ?string $model = ArticleSession::class;

    protected static ?string $navigationIcon = 'heroicon-o-squares-plus';
    
    protected static ?string $navigationGroup = 'Articles';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('title_en')
                    ->label('Article Session or Series Title (English)')
                    ->placeholder('Ex: Tutorial Laravel with Filament, etc.')
                    ->required()
                    ->maxLength(255)
                    ->autocomplete('off')
                    ->columnSpanFull(),
                TextInput::make('title_id')
                    ->label('Article Session or Series Title (Indonesian)')
                    ->placeholder('Ex: Tutorial Laravel with Filament, etc.')
                    ->required()
                    ->maxLength(255)
                    ->autocomplete('off')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
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
