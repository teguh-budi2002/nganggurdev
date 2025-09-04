<?php

namespace App\Http\Middleware;

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
}
