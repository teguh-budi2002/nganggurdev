<?php

use Illuminate\Support\Facades\Schedule;
use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Schedule::command('app:generate-sitemap')
    ->weeklyOn(1, '00:00')
    ->timezone('Asia/Jakarta')
    ->runInBackground()
    ->onSuccess(function () {
        Artisan::call('optimize:clear');
        Artisan::call('optimize');
    });
