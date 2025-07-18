<?php

namespace App\Filament\Resources\ArticleResource\Pages;

use App\Filament\Resources\ArticleResource;
use App\Models\Article;
use Filament\Actions;
use Filament\Notifications\Notification;
use Filament\Resources\Pages\ViewRecord;

class ViewArticle extends ViewRecord
{
    protected static string $resource = ArticleResource::class;

    protected static string $view = 'filament.resources.article.pages.view-article';

    protected function getHeaderActions(): array
    {
        return [
            Actions\Action::make('publish')
                ->label('Publish Article')
                ->icon('heroicon-o-check-circle')
                ->color('success')
                ->visible(fn () => $this->record->status !== 'published')
                ->requiresConfirmation()
                ->modalHeading('Publish Article')
                ->modalDescription('Are you sure you want to publish this article?')
                ->action(function () {
                    $this->record->update([
                        'status' => 'published',
                    ]);
                    
                    Notification::make()
                        ->title('Article Published')
                        ->success()
                        ->send();
                }),

            Actions\Action::make('draft')
                ->label('Move to Draft')
                ->icon('heroicon-o-document-text')
                ->color('warning')
                ->visible(fn () => $this->record->status === 'published')
                ->requiresConfirmation()
                ->modalHeading('Move to Draft')
                ->modalDescription('Are you sure you want to move this article back to draft?')
                ->action(function () {
                    $this->record->update([
                        'status' => 'draft',
                    ]);
                    
                    Notification::make()
                        ->title('Article moved to draft')
                        ->warning()
                        ->send();
                }),

            Actions\EditAction::make()
                ->icon('heroicon-o-pencil-square')
                ->color('info'),

            Actions\DeleteAction::make()
                ->icon('heroicon-o-trash')
                ->requiresConfirmation(),
        ];
    }

    public function getData(): array
    {
        $article = $this->record;
        return [
            'stats' => [
                'article' => $article,
            ]
        ];
    }
}
