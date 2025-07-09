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
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')
                  ->constrained()
                  ->onDelete('cascade');
            $table->foreignId('article_session_id')
                  ->nullable()
                  ->constrained()
                  ->onUpdate('cascade')
                  ->onDelete('cascade');
            $table->string('title_en');
            $table->string('title_id');
            $table->longText('content_en');
            $table->longText('content_id');
            $table->string('slug_en')->unique();
            $table->string('slug_id')->unique();
            $table->string('image');
            $table->enum('status', ['published', 'draft'])->default('draft');
            $table->json('tags')->nullable();
            $table->string('meta_description_id')->nullable();
            $table->string('meta_description_en')->nullable();
            $table->string('meta_keyword_en')->nullable();
            $table->string('meta_keyword_id')->nullable();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('published_by')->nullable();
            $table->timestamp('published_at')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
