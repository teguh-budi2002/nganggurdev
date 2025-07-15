<?php

namespace App\Services;

use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\Attributes\AttributesExtension;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\MarkdownConverter;
use Spatie\ShikiPhp\Shiki;

class MarkdownRenderer
{
    protected static array $conifg = [
        'html_input' => 'escape',
        'allow_unsafe_links' => false,
        'attributes' => [
            'allow' => ['id', 'class'],
        ],
    ];

    public static function render(string $markdown): string
    {
        $environment = new Environment(self::$conifg);
        $environment->addExtension(new AttributesExtension());
        $environment->addExtension(new CommonMarkCoreExtension());

        $converter = new MarkdownConverter($environment);

        $html = $converter->convert($markdown)->getContent();

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
