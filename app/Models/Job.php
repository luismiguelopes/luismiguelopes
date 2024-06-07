<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    protected $table = 'jobs';

    // The attributes that are mass assignable.
    protected $fillable = ['title', 'company', 'from', 'to'];

    // The attributes that should be hidden for arrays.
    protected $hidden = [];

    // The attributes that should be cast to native types.
    protected $casts = [
        'from' => 'date', // 'date' will automatically cast to Carbon instance
        'to' => 'date',
    ];
}
