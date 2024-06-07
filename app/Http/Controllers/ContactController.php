<?php



namespace App\Http\Controllers;
use App\Mail\ContactPosted;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Handle the contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|min:3|max:255',
            'email' => 'required|email',
            'message' => 'required|min:10',
        ]);

        Mail::to(config('mail.to_address'))->send(new ContactPosted($validated));

        return back()->with('success', 'Thank you for your message!');
    }



    public function getPosted()
    {
        $name = 'Luis Lopes';
        $email = config('mail.to_address');
        Mail::to($email)->send(new ContactPosted($name));
    }

}
