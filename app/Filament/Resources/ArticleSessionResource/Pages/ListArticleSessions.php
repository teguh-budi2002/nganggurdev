<?php

namespace App\Filament\Resources\ArticleSessionResource\Pages;

use App\Filament\Resources\ArticleSessionResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;

class ListArticleSessions extends ListRecords
{
    protected static string $resource = ArticleSessionResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
