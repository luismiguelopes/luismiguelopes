<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Job extends Model
{
    // Define the table associated with the model (optional if it follows Laravel naming conventions)
    protected $table = 'jobs';

    // The attributes that are mass assignable
    protected $fillable = ['title', 'company', 'from', 'to'];

    // The attributes that should be cast to native types
    protected $casts = [
        'from' => 'date', // Automatically cast 'from' to Carbon instance
        'to' => 'date',   // Automatically cast 'to' to Carbon instance
    ];

    // Uncomment if the table has created_at and updated_at columns and you want to manage them automatically
    // public $timestamps = true;
}
