<?php

namespace App\Http\Controllers;

use App\Http\Requests\ImageRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function store(ImageRequest $request){
        $data = $request->validated();
        $image = $data['image'];
        $imageName = md5(Carbon::now().'_'.$image->getClientOriginalName()).'.'.$image->getClientOriginalExtension();
        $imagePath = Storage::disk('public')->putFileAs('/images', $image, $imageName);

        return response()->json(['url'=>url('/storage/'.$imagePath)]);
    }
}
