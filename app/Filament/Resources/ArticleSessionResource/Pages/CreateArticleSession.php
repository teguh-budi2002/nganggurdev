<?php

namespace App\Filament\Resources\ArticleSessionResource\Pages;

use App\Filament\Resources\ArticleSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateArticleSession extends CreateRecord
{
    protected static string $resource = ArticleSessionResource::class;

    public function getRedirectUrl(): string
    {
        return $this->getResource()::getUrl('index');
    }
}
