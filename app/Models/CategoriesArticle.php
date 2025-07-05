<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CategoriesArticle extends Model
{
    protected $table = 'article_category';
    protected $guarded = ['id'];
}
