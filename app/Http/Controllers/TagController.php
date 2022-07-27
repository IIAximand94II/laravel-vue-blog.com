<?php

namespace App\Http\Controllers;

use App\Http\Resources\Tag\TagRecource;
use App\Models\Tag;
use Illuminate\Http\Request;

class TagController extends Controller
{
    public function all(){
        $tags = Tag::all();
        return TagRecource::collection($tags);
    }

    public function index(){

    }

    public function show(){

    }

    public function store(){

    }

    public function update(){

    }

    public function delete(){

    }
}
