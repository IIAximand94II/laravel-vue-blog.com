<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use HasFactory;
    //SoftDeletes;
    protected $guarded = false;
    protected $table = 'posts';

    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    public function authorInfo(){
        return $this->belongsTo(User::class, 'author', 'id');
    }

    public function tags(){
        return $this->belongsToMany(Tag::class, 'post_tags', 'post_id', 'tag_id');
    }

    public function comments(){
        return $this->hasMany(Comment::class, 'post_id', 'id');
    }

}
