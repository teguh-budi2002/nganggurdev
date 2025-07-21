<?php

namespace App\Http\Controllers;

use App\Models\Article;
use App\Models\ArticleSession;
use App\Models\CategoryArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function listOfArticles(Request $request, $locale)
    {
        if (!in_array($locale, ['en', 'id'])) {
            return redirect()->route('home', ['locale' => app()->getLocale()]);
        }

        $filterByCategory = $request->query('categoryName');
        $searchQuery = $request->query('searchQuery');
        $suffixLocale = $locale ?? app()->getLocale();
        $cacheKeyArticle = "list-articles_{$locale}";
        $cacheKeyCategories = "list-categories_{$locale}";
        $perPage = 9;
        $query = Article::with('author:id,name')
                        ->select('id', 'user_id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug", 'image', 'published_at', 'status')
                        ->published();

        if (filled($filterByCategory)) {
            $query->whereHas('categories', function ($query) use ($filterByCategory) {
                $query->where('title', $filterByCategory);
            });
        } 
        
        if (filled($searchQuery)) {
            $query->filterBySearchQuery($searchQuery, $suffixLocale);
        } 

        $articles = Cache::flexible($cacheKeyArticle, [600, 1200], function() use ($query, $perPage) {
            return $query->latest('published_at')->simplePaginate($perPage);
        });

        // 1 hour soft TTL | 1 day hard TTL
        $categories = Cache::flexible($cacheKeyCategories, [3600, 86400], function() {
            return CategoryArticle::select('id', 'title', 'img_category')->get();
        });
        
        return Inertia::render('Article/Index', [
            'articles' => $articles,
            'categories' => $categories,
        ]);
    }

    public function showArticle($locale, $slug)
    {
        if (in_array($locale, ['en', 'id'])) {
            $suffixLocale = $locale ?? app()->getLocale();
            $cacheKey = "show-article_{$locale}_{$slug}";
            $article = Cache::flexible($cacheKey, [300, 600], function() use ($slug, $suffixLocale) {
                return Article::with(['author:id,name', 'categories:id,img_category'])
                        ->select('id', 'user_id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug", "content_{$suffixLocale}_html as content", 'image', 'tags', "meta_description_{$suffixLocale} as meta_description", "meta_keyword_{$suffixLocale} as meta_keyword", 'published_at', 'status')
                        ->where("slug_{$suffixLocale}", $slug)
                        ->where('status', 'published')
                        ->whereNotNull('published_at')
                        ->first();
            }); 
            $articleSession = ArticleSession::with(['articles' => function ($query) use ($suffixLocale) {
                $query->select('id', 'user_id', "article_session_id", "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug");
            }])->first();
        }
        
        return Inertia::render('Article/Show', [
            'article' => $article,
            'articleSession' => $articleSession,
        ]);
    }

    public function getArticleSlug($locale, $slug)
    {
        if (!in_array($locale, ['en', 'id'])) {
            return response()->json(['error' => 'Invalid locale'], 400);
        }
    
        $article = Article::select('id', 'slug_id', 'slug_en')
            ->where('slug_en', $slug)
            ->orWhere('slug_id', $slug)
            ->where('status', 'published')
            ->whereNotNull('published_at')
            ->first();
    
        if (!$article) {
            return response()->json(['error' => 'Article not found'], 404);
        }
    
        $newSlug = $locale === 'id' ? $article->slug_id : $article->slug_en;
    
        if (!$newSlug) {
            return response()->json(['error' => 'Slug not available for this locale'], 404);
        }
    
        return response()->json(['slug' => $newSlug]);
    }

    public function getArticleBySearchQuery(Request $request, $locale)
    {
        if (!in_array($locale, ['en', 'id'])) {
            return response()->json(['error' => 'Invalid locale'], 400);
        }

        $searchQuery = $request->query('searchQuery');
        if (empty($searchQuery)) {
            return response()->json(['error' => 'Search query is required'], 400);
        }
        
        $suffixLocale = $locale ?? app()->getLocale();
        $articles = Article::select('id', "title_{$suffixLocale} as title", "slug_{$suffixLocale} as slug")
            ->filterBySearchQuery($searchQuery, $suffixLocale)
            ->where('status', 'published')
            ->whereNotNull('published_at')
            ->orderBy('published_at', 'desc')
            ->limit(10)
            ->get();

        return response()->json($articles);
    }
}
