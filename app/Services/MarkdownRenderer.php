<?php

namespace App\Services;

use League\CommonMark\CommonMarkConverter;
use Spatie\ShikiPhp\Shiki;
use Illuminate\Support\Facades\Log;

class MarkdownRenderer
{
    public static function render(string $markdown): string
    {
        $converter = new CommonMarkConverter([
            'html_input' => 'escape',
            'allow_unsafe_links' => false,
        ]);

        $html = $converter->convert($markdown);

        $result = preg_replace_callback(
            '/<pre><code class="language-(.+?)">(.*?)<\/code><\/pre>/s',
            function ($matches) {
                $lang = $matches[1];
                $code = html_entity_decode($matches[2]);
		$highlighted = Shiki::highlight($code, $lang, theme: 'github-dark');
		return $highlighted;
            },
            $html
        );
        return $result;
    }
}
