<?php

namespace App\Services;

use League\CommonMark\CommonMarkConverter;
use Spatie\ShikiPhp\Shiki;

class MarkdownRenderer
{
    public static function render(string $markdown): string
    {
        $converter = new CommonMarkConverter([
            'html_input' => 'escape',
            'allow_unsafe_links' => false,
        ]);

        $html = $converter->convert($markdown);

        return preg_replace_callback(
            '/<pre><code class="language-(.+?)">(.*?)<\/code><\/pre>/s',
            function ($matches) {
                $lang = $matches[1];
                $code = html_entity_decode($matches[2]);

                return Shiki::highlight($code, $lang, theme: 'github-dark');
            },
            $html
        );
    }
}
