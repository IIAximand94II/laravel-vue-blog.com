<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tag extends Model
{
    use HasFactory,SoftDeletes;
    protected $guarded = false;
    protected $table = 'tags';

    public function posts(){
        return $this->belongsToMany(Post::class, 'post_tags', 'tag_id', 'post_id');
    }
}
