<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JobController;
use App\Http\Controllers\FileController;


// Custom route for the root (/) to display all jobs
Route::get('/', [JobController::class, 'index'])->name('root');

// Route for downloading a file
Route::get('/download-file', [FileController::class, 'downloadFile'])->name('download.file');

// Route for form submission
//Route::post('/', [ContactController::class, 'submit'])->name('contact.submit');
// test email send
//Route::get('/testroute', [ContactController::class, 'getPosted']);


/********** testing purposes to implement on future deployments
// testing purposes
Route::get('/contact', function () {
    return view('mail.contact');
})->name('contact');


Route::post('/contact', [ContactController::class, 'submit'])->name('contact.submit');

 * ////////
// End of routes/web.php
 */
