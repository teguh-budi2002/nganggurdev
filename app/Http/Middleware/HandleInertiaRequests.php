<?php

namespace App\Http\Middleware;

use App\Models\Article;
use App\Models\SocialMedia;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tighten\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $locale = $request->route('locale') ?? session('locale') ?? app()->getLocale();
        return array_merge(parent::share($request), [
            'locale' => $locale,
            'url' => url()->current(),
            'base_url' => env('APP_URL', 'https://www.nganggurdev.com'),
            'current_url' => url()->current(),
            'alternate_urls' => $this->generateAlternateUrls($request),
            'ziggy' => fn () => array_merge((new Ziggy)->toArray(), [
                'location' => $request->url(),
            ]),
            'slug' => $request->route('slug'),
            'query' => $request->query(),
            'social_media' => SocialMedia::select('id', 'whatsapp', 'facebook', 'twitter', 'instagram', 'tiktok', 'youtube')
                                    ->first() ?? new SocialMedia([
                                        'whatsapp' => null,
                                        'facebook' => null,
                                        'twitter' => null,
                                        'instagram' => null,
                                        'tiktok' => null,
                                        'youtube' => null,
                                    ]),
        ]);
    }

    private function generateAlternateUrls(Request $request): array
    {
        $routes = [];
        $currentLocale = $request->route('locale') ?? app()->getLocale();
        $routeName = $request->route()->getName() ?? 'home';
        $routeParameters = $request->route()->parameters();
        $locales = ['en', 'id'];

        foreach ($locales as $locale) {
            try {
                $params = collect($routeParameters)->except('locale')->toArray();
                
                if ($this->isArticleRoute($routeName) && $request->route('slug')) {
                    $alternateSlug = $this->getAlternateSlug($request->route('slug'), $locale, $currentLocale);
                    if ($alternateSlug) {
                        $params['slug'] = $alternateSlug;
                    }
                }
                
                $params['locale'] = $locale;
                
                $url = route($routeName, $params);
                $routes[$locale] = $url;
                        
                } catch (\Exception $e) {
                    $routes[$locale] = route('home', ['locale' => $locale]);
                }
            }
            
        return $routes;
    }

    private function isArticleRoute(string $routeName): bool
    {
        return str_contains($routeName, 'article') || str_contains($routeName, 'post');
    }

    private function getAlternateSlug(string $currentSlug, string $targetLocale, string $currentLocale): ?string
    {   
        if (!$currentSlug) {
            return null;
        }
        
        $article = Article::where("slug_{$currentLocale}", $currentSlug)->first();
        
        if ($article) {
            return $article->{"slug_{$targetLocale}"} ?? $currentSlug;
        }
        
        return $currentSlug;
    }
}
