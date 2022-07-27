<?php

namespace App\Http\Controllers;

use App\Http\Resources\Category\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all(){
        $categories = Category::all();
        return CategoryResource::collection($categories);
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
