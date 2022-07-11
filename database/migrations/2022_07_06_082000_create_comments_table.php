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
        Schema::create('comments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('parent_id')->default(0);
            $table->unsignedBigInteger('post_id');
            $table->unsignedBigInteger('author_id');
            $table->text('message');
            $table->timestamps();

            $table->index('post_id', 'comment_post_idx');
            $table->foreign('post_id', 'comment_post_fk')->on('posts')->references('id');

            $table->index('author_id', 'comment_user_idx');
            $table->foreign('author_id', 'comment_user_fk')->on('users')->references('id');

            $table->softDeletes();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('comments');
    }
};
