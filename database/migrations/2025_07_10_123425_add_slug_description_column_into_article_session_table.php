<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('article_sessions', function (Blueprint $table) {
            $table->string('slug_en')->unique()->nullable()->after('title_id');
            $table->string('slug_id')->unique()->nullable()->after('slug_en');
            $table->text('description_en')->nullable()->after('slug_id');
            $table->text('description_id')->nullable()->after('description_en');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('article_sessions', function (Blueprint $table) {
            $table->dropColumn(['slug_en', 'slug_id', 'description_en', 'description_id']);
        });
    }
};
