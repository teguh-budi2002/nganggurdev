<?php

namespace App\Http\Controllers;

use App\Models\Article;
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
            $cacheKey = "list-article-home_{$locale}";
            $articles = Cache::flexible($cacheKey, [600, 1200], function() use ($suffixLocale) {
                return Article::with(['author:id,name', 'categories:id,img_category'])
                        ->select('id', 'user_id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug", "content_{$suffixLocale} as content", 'image', 'published_at', 'status')
                        ->where('status', 'published')
                        ->whereNotNull('published_at')
                        ->latest()
                        ->get();
            }); 
        }
        
        return Inertia::render('Home', [
            'locale' => $locale,
            'articles' => $articles ?? [],
        ]);
    }
}
