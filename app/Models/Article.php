<?php

namespace App\Models;

use App\Services\MarkdownRenderer;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Article extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected $casts = [
        'tags' => 'array',
    ];

    public function articleSession()
    {
        return $this->belongsTo(ArticleSession::class);
    }

    public function categories()
    {
        return $this->belongsToMany(CategoryArticle::class, 'article_category', 'article_id', 'category_article_id');
    }

    public function author() {
        return $this->belongsTo(User::class, 'user_id');
    }

    protected static function booted()
    {
        static::creating(function ($model) {
            $model->published_at = $model->status === 'published' ? now() : null;
            $model->published_by = $model->status === 'published' ? Auth::user()->name : null;
            $model->user_id = Auth::id();
            $model->created_by = Auth::user()->name;
        });

        static::updating(function ($model) {
            $model->published_at = $model->status === 'published' ? now() : null;
            $model->published_by = $model->status === 'published' ? Auth::user()->name : null;
            $model->updated_by = Auth::user()->name;
        });

        static::saving(function ($model) {
            $model->slug_en = str($model->title_en)->slug();
            $model->slug_id = str($model->title_id)->slug();
            $model->content_en_html = MarkdownRenderer::render($model->content_en);
            $model->content_id_html = MarkdownRenderer::render($model->content_id);
        });
    }

    protected function publishedAt(): Attribute
    {
        return Attribute::make(
            get: fn (mixed $value) =>  $value ? Carbon::parse($value)->translatedFormat('Y F d') : '-',
        );
    }

    #[Scope]
    public function filterBySearchQuery($query, $searchQuery, $locale = 'en')
    {
        return $query->when($searchQuery ?? null, function ($q) use ($searchQuery, $locale) {
            return $q->where(function ($deepQuery) use ($searchQuery, $locale) {
                $deepQuery->where("title_{$locale}", 'like', "%{$searchQuery}%");
            });
        });
    }

    #[Scope]
    public function published($query) {
        return $query->where('status', 'published')
            ->whereNotNull('published_at');
    }
}
