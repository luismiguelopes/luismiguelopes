<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\JobController;
use App\Http\Controllers\FileController;
use Illuminate\Support\Facades\Route;

// Custom route for the root (/) to display all jobs
Route::get('/', [JobController::class, 'index'])->name('root');

// Route for downloading a file
Route::get('/download-file', [FileController::class, 'downloadFile'])->name('download.file');

/*
|--------------------------------------------------------------------------
| Future Routes
|--------------------------------------------------------------------------
| Uncomment and use these routes when needed.
*/

// Route for form submission
// Route::post('/', [ContactController::class, 'submit'])->name('contact.submit');

// Test email send
// Route::get('/testroute', [ContactController::class, 'getPosted']);

/*
|--------------------------------------------------------------------------
| Testing Purposes
|--------------------------------------------------------------------------
| Routes for testing purposes. Move to appropriate section when deploying.
*/

// Contact form view
// Route::get('/contact', function () {
//     return view('mail.contact');
// })->name('contact');

// Contact form submission
// Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

/*
|--------------------------------------------------------------------------
| End of Routes
|--------------------------------------------------------------------------
*/

