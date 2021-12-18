<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = [
        'author',
        'title', 
        'file',
        'published',
        'category_id',
        'description', 
        'price', 
        'availability', 
        'photo', 
        'selected',
        'status',
        'count'
    ];
}
