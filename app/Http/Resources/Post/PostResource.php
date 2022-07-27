<?php

namespace App\Http\Resources\Post;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=> $this->id,
            'title' => $this->title,
            'image' => $this->image,
            'preview_image' => $this->preview_image,
            'excerpt' => substr($this->content, 0, 245).'...',
            'category' => $this->category,
            'content' => $this->content,
            'author' => $this->authorInfo,
            'status' => $this->status,
            'tags' => $this->tags,
            'date' => $this->updated_at,
        ];
    }
}
