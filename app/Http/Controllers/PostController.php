<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
use App\Http\Resources\Post\PostResource;
use App\Models\Post;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class PostController extends Controller
{
    public function index(){
        $posts = Post::all();
        return PostResource::collection($posts);
    }

    public function show(Post $post){
        return new PostResource($post);
    }

    public function store(PostRequest $request){
        $data = $request->validated();
        $data['author'] = 1;
        //dump($data);
        //dump([2,3]);
        //dd(auth()->user());
        $image = $data['image'];
        unset($data['image']);
        $tags = $data['tags'];
        unset($data['tags']);
        //dd($tags);
        //return true;
        // image

        $imageName = md5(Carbon::now().'_'.$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension();
        $previewName = 'preview_'.$imageName;
        $imagePath = Storage::disk('public')->putFileAs('/images', $image, $imageName);
        $imageUrl = url('/storage/'.$imagePath);
        Image::make($image)->fit(260, 175)->save(storage_path('app/public/images/'). $previewName);
        $data['image'] = url('/storage/images/'.$previewName);
        $data['preview_image'] = $imageUrl;

        // end image

        $post = Post::create($data);
        if($post){
            $post->tags()->attach($tags);
        }
        return response()->json(['message'=> 'create post']);
    }

    public function update(){

    }

    public function delete(){

    }
}
