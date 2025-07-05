<?php

namespace App\Http\Controllers;

use App\Models\CategoryProduct;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index() 
    {
        $columns = ['id', 'category_id', 'title', 'slug', 'image', 'anchor_link', 'price', 'price_after_discount', 'discount', 'is_promo'];

        $getProductsByCategory = fn ($category) => Product::select($columns)
            ->where('status', 'published')
            ->whereHas('category', fn ($query) => $query->where('title', $category))
            ->latest()
            ->simplePaginate(8);

        $snackProducts = $getProductsByCategory('Food');
        $applicationProducts = $getProductsByCategory('Application');
        $categoryProducts = CategoryProduct::select('id', 'title')->get();

        return Inertia::render('Product/Index', [
            'snackProducts' => $snackProducts,
            'applicationProducts' => $applicationProducts,
            'categories' => $categoryProducts,
        ]);
    }
} 
