<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FileController extends Controller
{
    public function downloadFile()
    {
        $filePath = public_path('files/luismiguelopes-cv.pdf'); // Adjust the path to your file
        $fileName = 'luismiguelopes-cv.pdf'; // The name for the download

        return response()->download($filePath, $fileName);
    }
}
