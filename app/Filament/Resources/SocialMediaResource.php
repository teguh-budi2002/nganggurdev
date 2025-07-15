<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SocialMediaResource\Pages;
use App\Filament\Resources\SocialMediaResource\RelationManagers;
use App\Models\SocialMedia;
use Filament\Forms;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SocialMediaResource extends Resource
{
    protected static ?string $model = SocialMedia::class;

    protected static ?string $navigationIcon = 'heroicon-o-paper-clip';

    public static ?string $navigationGroup = 'Website';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                TextInput::make('whatsapp')
                    ->label('Link WhatsApp')
                    ->columnSpanFull(),
                TextInput::make('instagram')
                    ->label('Link Instagram')
                    ->columnSpanFull(),
                TextInput::make('youtube')
                    ->label('Link YouTube')
                    ->columnSpanFull(),
                TextInput::make('tiktok')
                    ->label('Link TikTok')
                    ->columnSpanFull(),
                TextInput::make('github')
                    ->label('Link GitHub')
                    ->columnSpanFull(),
                TextInput::make('linkedin')
                    ->label('Link LinkedIn')
                    ->columnSpanFull(),
                TextInput::make('twitter')
                    ->label('Link Twitter')
                    ->columnSpanFull(),
                TextInput::make('facebook')
                    ->label('Link Facebook')
                    ->columnSpanFull(),
                TextInput::make('telegram')
                    ->label('Link Telegram')
                    ->columnSpanFull(),
                TextInput::make('discord')
                    ->label('Link Discord')
                    ->columnSpanFull(),         
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('whatsapp')
                    ->label('WhatsApp Link')
                    ->searchable()
                    ->sortable()
                    ->default('None'),
                TextColumn::make('facebook')
                    ->label('Facebook Link')
                    ->searchable()
                    ->sortable()
                    ->default('None'),
                TextColumn::make('youtube')
                    ->label('Youtube Link')
                    ->searchable()
                    ->sortable()
                    ->default('None'),
                TextColumn::make('tiktok')
                    ->label('TikTok Link')
                    ->searchable()
                    ->sortable()
                    ->default('None'),
                TextColumn::make('instagram')
                    ->label('Instagram Link')
                    ->searchable()
                    ->sortable()
                    ->default('None'),
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
            ->emptyStateHeading('No Social Media Found')
            ->emptyStateDescription('You can create a new social media first.')
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
            'index' => Pages\ListSocialMedia::route('/'),
            'create' => Pages\CreateSocialMedia::route('/create'),
            'edit' => Pages\EditSocialMedia::route('/{record}/edit'),
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
