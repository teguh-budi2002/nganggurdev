<?php

namespace App\Http\Controllers;

use App\Models\ArticleSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class ArticleSeriesController extends Controller
{
    public function listArticleOfSeries($locale, $slug)
    {
        $suffixLocale = $locale ?? app()->getLocale();
        $cacheKey = "list-article-series-{$locale}-{$slug}";

        $articleSeries = Cache::flexible($cacheKey, [600, 1200], function() use ($slug, $suffixLocale) {
            return ArticleSession::with(['articles' => function ($query) use ($suffixLocale) {
                        $query->select('id', 'article_session_id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug")
                            ->published()
                            ->latest();
                    }])->select('id', "title_{$suffixLocale} as title", "description_{$suffixLocale} as description", "slug_{$suffixLocale} as slug", "meta_description_{$suffixLocale} as meta_description", 'difficult_level', 'image')
                        ->latest()
                        ->where("slug_{$suffixLocale}", $slug)
                        ->first();
        });
         
        return inertia('ArticleSeries/ListArticleOfSeries', [
            'articleSeries' => $articleSeries,
        ]);
    }

     public function getArticleSeriesSlug($locale, $slug)
    {
        if (!in_array($locale, ['en', 'id'])) {
            return response()->json(['error' => 'Invalid locale'], 400);
        }
    
        $articleSeries = ArticleSession::select('id', 'slug_id', 'slug_en')
            ->where('slug_en', $slug)
            ->orWhere('slug_id', $slug)
            ->first();
    
        if (!$articleSeries) {
            return response()->json(['error' => 'Article Series not found'], 404);
        }
    
        $newSlug = $locale === 'id' ? $articleSeries->slug_id : $articleSeries->slug_en;
    
        if (!$newSlug) {
            return response()->json(['error' => 'Slug not available for this locale'], 404);
        }
    
        return response()->json(['slug' => $newSlug]);
    }
}
