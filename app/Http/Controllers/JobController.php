<?php

namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    // Display a listing of the jobs.
    public function index()
    {
        $jobs = Job::orderBy('to', 'desc')->get(); // Ensure jobs are sorted by 'to' column in descending order
        return view('main', compact('jobs'));
    }

    // Show the form for creating a new job.
    public function create()
    {
        return view('jobs.create');
    }

    // Store a newly created job in storage.
    public function store(Request $request)
    {
        $job = Job::create($request->all());
        return redirect()->route('jobs.index');
    }

    // Display the specified job.
    public function show(Job $job)
    {
        return view('jobs.show', compact('job'));
    }

    // Show the form for editing the specified job.
    public function edit(Job $job)
    {
        return view('jobs.edit', compact('job'));
    }

    // Update the specified job in storage.
    public function update(Request $request, Job $job)
    {
        $job->update($request->all());
        return redirect()->route('jobs.index');
    }

    // Remove the specified job from storage.
    public function destroy(Job $job)
    {
        $job->delete();
        return redirect()->route('jobs.index');
    }
}
