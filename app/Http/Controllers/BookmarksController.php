<?php

namespace App\Http\Controllers;

use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class BookmarksController extends Controller
{
    public function index(){

    }

    public function store(Post $post){
        auth()->user()->userBookmarks()->toggle($post->id);
        dump(auth()->user()->userBookmarks);
        return response([]);
    }

    public function delete(){

    }
}
