<?php

namespace App\Http\Controllers;

use App\Http\Resources\Comment\CommentResource;
use App\Http\Resources\Post\PostResource;
use Illuminate\Http\Request;

class UserController extends Controller
{

    public function posts(){
        return PostResource::collection(auth()->user()->posts);
    }

    public function bookmarks(){
        return PostResource::collection(auth()->user()->userBookmarks);
    }

    public function comments(){
        return CommentResource::collection(auth()->user()->comments);
    }
}
