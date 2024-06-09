<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Config;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function downloadFile(Request $request) // Inject the Request object for future use
    {
        $filePath = public_path(config('files.cv_file_path')); // Use configuration for the file path
        $fileName = basename($filePath); // Extract the file name from the path

        // Check if the file exists
        if (!File::exists($filePath)) {
            return response()->json(['message' => 'File not found.'], 404);
        }

        return response()->download($filePath, $fileName);
    }
}
