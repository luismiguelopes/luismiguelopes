<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Support\Facades\Cache;

class JobController extends Controller
{
    // Display a listing of the jobs.
    public function index()
    {
        // Fetch jobs sorted by 'to' column in descending order and cache the result
        $jobs = Cache::remember('jobs_list', 60 * 24 * 30, function () {
            // Cache for 30 days (60 minutes * 24 hours * 30 days)
            return Job::orderBy('to', 'desc')->get();
        });

        return view('main', compact('jobs'));
    }
}
