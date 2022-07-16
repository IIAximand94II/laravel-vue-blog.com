<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->string('title', 255);
            $table->string('slug', 255)->nullable();
            $table->string('image', 255);
            $table->unsignedBigInteger('category_id');
            $table->longText('content');
            $table->unsignedBigInteger('author')->default(1);
            $table->tinyInteger('status')->default(0);

            $table->index('category_id', 'post_category_idx');
            $table->foreign('category_id', 'post_category_fk')->on('categories')->references('id');

            $table->index('author', 'post_author_idx');
            $table->foreign('author', 'post_author_fk')->on('users')->references('id');


            $table->timestamps();

            //$table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('posts');
    }
};
