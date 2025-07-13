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
            $table->string('meta_description_en')->nullable()->after('description_id');
            $table->string('meta_description_id')->nullable()->after('meta_description_en');
            $table->enum('difficult_level', ['Beginner', 'Medium', 'Expert', 'Intermediate'])->after('meta_description_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('article_sessions', function (Blueprint $table) {
            $table->dropColumn(['meta_description_en', 'meta_description_id', 'difficult_level']);
        });
    }
};
