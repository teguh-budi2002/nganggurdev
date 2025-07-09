<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ArticleSession extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    public function articles() {
        return $this->hasMany(Article::class);
    }
}
