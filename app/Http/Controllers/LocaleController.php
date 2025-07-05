<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class LocaleController extends Controller
{
    public function setLocale(Request $request, $locale)
    {
        if (in_array($locale, ['en', 'id'])) {
            app()->setLocale($locale);
            Session::put('locale', $locale);
        }
        
        return back()->with([
            'locale' => $locale
        ]);
    }
}
