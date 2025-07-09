<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class Product extends Model
{
    use SoftDeletes;
    protected $guarded = ['id'];

    protected static function booted()
    {
        static::creating(function ($model) {
            $model->slug = str($model->title)->slug();        
            $model->created_by = Auth::user()->name;
        });

        static::updating(function ($model) {
            $model->slug = str($model->title)->slug();
            $model->updated_by = Auth::user()->name;
        });

        static::saving(function ($model) {
            $model->published_at = $model->status === 'published' ? now() : null;
            $model->published_by = $model->status === 'published' ? Auth::user()->name : null;
        });
    }

    public function category()
    {
        return $this->belongsTo(CategoryProduct::class, 'category_id');
    }
}
