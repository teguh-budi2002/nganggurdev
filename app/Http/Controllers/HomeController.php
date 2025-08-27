<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleSession;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index($locale) {
        Session::put('locale', $locale);

        if (in_array($locale, ['en', 'id'])) {
            $suffixLocale = $locale ?? app()->getLocale();
            $latestArticleCacheKey = "list-article-home_{$locale}";
            $featuredArticleCacheKey = "list-featured-article-home_{$locale}";
            $articleSeriesCacheKey = "list-article-series-home_{$locale}";

            $articleSeries = Cache::flexible($articleSeriesCacheKey, [600, 1200], function() use ($suffixLocale) {
                return ArticleSession::select('id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug", 'image')
                        ->latest()
                        ->get();
            });

            $articles = Cache::flexible($latestArticleCacheKey, [600, 1200], function() use ($suffixLocale) {
                return Article::with(['author:id,name', 'categories:id,img_category'])
                        ->select('id', 'user_id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug", 'image', 'published_at', 'status')
                        ->published()
                        ->where('is_featured', false)
                        ->latest()
                        ->limit(8)
                        ->get();
            });
             
            $featuredArticles = Cache::flexible($featuredArticleCacheKey, [600, 1200], function() use ($suffixLocale) {
                return Article::with(['author:id,name', 'categories:id,img_category'])
                        ->select('id', 'user_id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug", 'image', 'published_at', 'status')
                        ->published()
                        ->where('is_featured', true)
                        ->latest()
                        ->limit(8)
                        ->get();
            }); 
        }
        
        return Inertia::render('Home', [
            'articleSeries' => $articleSeries ?? [],
            'articles' => $articles ?? [],
            'featuredArticles' => $featuredArticles ?? [],
        ]);
    }

    public function aboutUs() {
        return Inertia::render('AboutUs');
    }

    public function privacyPolicy() {
        return Inertia::render('PrivacyPolicy');
    }

    public function termsOfService() {
        return Inertia::render('TermsOfService');
    }
}
