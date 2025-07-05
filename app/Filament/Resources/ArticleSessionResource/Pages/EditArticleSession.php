<?php

namespace App\Filament\Resources\ArticleSessionResource\Pages;

use App\Filament\Resources\ArticleSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\EditRecord;

class EditArticleSession extends EditRecord
{
    protected static string $resource = ArticleSessionResource::class;

    public function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }

    protected function getHeaderActions(): array
    {
        return [
            Actions\DeleteAction::make(),
            Actions\ForceDeleteAction::make(),
            Actions\RestoreAction::make(),
        ];
    }
}
