<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\Article;
use Carbon\Carbon;

class GenerateSitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate sitemap.xml for the application';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $locales = config('app.available_locales', ['id', 'en']);

        foreach ($locales as $locale) {
            $this->generateSitemapForLocale($locale);
        }

        $this->generateSitemapIndex($locales);

        $this->info('Sitemaps generated for all locales successfully.');
    }

    private function generateSitemapForLocale($locale)
    {
        $sitemap = Sitemap::create();

        // Homepage
        $sitemap->add(Url::create($this->getLocalizedUrl('/', $locale))
            ->setLastModificationDate(Carbon::now())
            ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
            ->setPriority(1.0));

        // Static pages
        $staticPages = [
            '/articles' => ['priority' => 0.8, 'frequency' => Url::CHANGE_FREQUENCY_MONTHLY],
            '/shop' => ['priority' => 0.7, 'frequency' => Url::CHANGE_FREQUENCY_MONTHLY],
            // '/laravel' => ['priority' => 0.9, 'frequency' => Url::CHANGE_FREQUENCY_WEEKLY],
        ];

        foreach ($staticPages as $url => $config) {
            $sitemap->add(Url::create($this->getLocalizedUrl($url, $locale))
                ->setLastModificationDate(Carbon::now())
                ->setChangeFrequency($config['frequency'])
                ->setPriority($config['priority']));
        }

        // Articles
        Article::select("id", "slug_{$locale} as slug", 'updated_at')->chunk(100, function ($articles) use ($sitemap, $locale) {
            foreach ($articles as $article) {
                $url = url("/{$locale}/article/{$article->slug}");
                $this->info("Adding article: {$url}");
        
                $sitemap->add(Url::create($url)
                        ->setLastModificationDate($article->updated_at)
                        ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                        ->setPriority(0.7));
            }
        });

        $sitemap->writeToFile(public_path("sitemap-{$locale}.xml"));
    }

    private function generateSitemapIndex($locales)
    {
        $sitemapIndex = '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
        $sitemapIndex .= '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";

        foreach ($locales as $locale) {
            $sitemapIndex .= '  <sitemap>' . "\n";
            $sitemapIndex .= '    <loc>' . url("sitemap-{$locale}.xml") . '</loc>' . "\n";
            $sitemapIndex .= '    <lastmod>' . now()->toISOString() . '</lastmod>' . "\n";
            $sitemapIndex .= '  </sitemap>' . "\n";
        }

        $sitemapIndex .= '</sitemapindex>';

        file_put_contents(public_path('sitemap.xml'), $sitemapIndex);
    }

    private function getLocalizedUrl($path, $locale)
    {
        return url("/{$locale}{$path}");
    }
}
