<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;

class ContactPosted extends Mailable
{
    use Queueable, SerializesModels;

    public $details;

    public function __construct($details)
    {
        $this->details = $details;
    }


    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Contact Mail',
        );
    }
    public function content(): Content
    {
        return new Content(
            view: 'mail.contact',
        );
    }
    public function attachments(): array
    {
        return [];
    }
}
