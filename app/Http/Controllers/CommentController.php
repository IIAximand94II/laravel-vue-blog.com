<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Http\Resources\Comment\CommentResource;
use App\Models\Comment;
use App\Models\Post;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function index(Post $post){
        $comments = $post->comments;
        //dd($comments);
        return CommentResource::collection($comments);
    }

    public function show(){

    }

    public function store(Post $post,CommentRequest $request){
        $data = $request->validated();
        $data['post_id'] = $post->id;
        $data['author_id'] = auth()->user()->id;
        //$data['author_id'] = auth()->user()->id ?? 1;
        //dd(auth()->user()->id);
        Comment::create($data);
        return response()->json(['message'=>'Comment created!']);
    }

    public function update(){

    }

    public function delete(){

    }
}
