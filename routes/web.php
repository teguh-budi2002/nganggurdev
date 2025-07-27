<?php

use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ArticleSeriesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LocaleController;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $locale = session('locale', config('app.locale'));
    return redirect("/{$locale}");
});

Route::group(['prefix' => '{locale}'], function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');
    Route::get('/articles', [ArticleController::class, 'listOfArticles'])->name('articles.index');
    Route::get('/search-article', [ArticleController::class, 'getArticleBySearchQuery'])->name('articles.search');
    Route::get('/article/{slug}', [ArticleController::class, 'showArticle'])->name('article.show');
    Route::get('/get-article-slug/{slug}', [ArticleController::class, 'getArticleSlug'])->name('article.getSlug');
    
    Route::get('/article-series/{slug}', [ArticleSeriesController::class, 'listArticleOfSeries'])->name('list-article-of-series.index');
    Route::get('/get-article-series-slug/{slug}', [ArticleSeriesController::class, 'getArticleSeriesSlug'])->name('article_series.getSlug');

    Route::get('/shop', [ProductController::class, 'index'])->name('shop');

    Route::post('/set-locale', [LocaleController::class, 'setLocale']);
})->where('locale', 'id|en');
