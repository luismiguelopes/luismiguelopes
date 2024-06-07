<div id="say-hello" class="container-fluid" data-spy-offset="40">
    <div class="row">
        <div class="col-lg-6 p-0">
            <section class="section section-no-border bg-color-primary h-100 m-0">
                <div class="row justify-content-end m-0">
                    <div class="col-half-section col-half-section-right me-3">

                        <h2 class="text-color-dark text-uppercase font-weight-extra-bold">{{ __('contacts.sayhello') }}</h2>
                        <form id="contactForm" class="contact-form custom-form-style form-errors-dark" action="{{ route('contact.submit') }}" method="post">
                            @csrf
                            <div class="contact-form-success alert alert-success d-none mt-4" id="contactSuccess">
                                <strong>Success!</strong> Your message has been sent to us.
                            </div>
                            <div class="contact-form-error alert alert-danger d-none mt-4" id="contactError">
                                <strong>Error!</strong> There was an error sending your message.
                                <span class="mail-error-message text-1 d-block" id="mailErrorMessage"></span>
                            </div>

                            <div class="form-content">
                                <div class="form-control-custom form-control-custom-dark">
                                    <input type="text" class="form-control" name="name" placeholder="{{ __('contacts.name') }}" data-msg-required="This field is required." id="name" required />
                                </div>
                                <div class="form-control-custom form-control-custom-dark">
                                    <input type="text" class="form-control" name="subject" placeholder="{{ __('contacts.subject') }}" data-msg-required="This field is required." id="subject" required />
                                </div>
                                <div class="form-control-custom form-control-custom-dark">
                                    <textarea maxlength="5000" data-msg-required="Please enter your message." rows="10" class="form-control" name="message" placeholder="{{ __('contacts.message') }}" id="message" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-quaternary text-color-light text-uppercase font-weight-semibold outline-none custom-btn-style-2 custom-border-radius-1">{{ __('contacts.submit') }}</button>
                            </div>
                        </form>

                    </div>
                </div>
            </section>
        </div>
        <div class="col-lg-6 p-0">
            <section class="section section-no-border h-100 m-0" style="background: url(img/contact-bg.jpeg); background-size: cover;">
                <div class="row m-0">
                    <div class="col-half-section col-half-section-left ms-3">
                        <a href="mailto:{{ __('presentation.emailtxt') }}" class="text-decoration-none">
                            <span class="feature-box custom-feature-box align-items-center mb-4">
                                <span class="custom-feature-box-icon">
                                    <i class="icon-envelope icons text-color-light"></i>
                                </span>
                                <span class="feature-box-info">
                                    <span class="custom-label font-weight-semibold text-uppercase custom-text-color-1 line-height-5">Email</span>
                                    <strong class="font-weight-light text-color-light custom-opacity-effect-1">{{ __('presentation.emailtxt') }}</strong>
                                </span>
                            </span>
                        </a>

                        <a href="https://github.com/luismiguelopes" target="_blank" class="text-decoration-none">
                            <span class="feature-box custom-feature-box align-items-center mb-4">
                                <span class="custom-feature-box-icon">
                                    <i class="icon-social-github icons text-color-light"></i>
                                </span>
                                <span class="feature-box-info">
                                    <span class="custom-label font-weight-semibold text-uppercase custom-text-color-1 line-height-5">Github</span>
                                    <strong class="font-weight-light text-color-light custom-opacity-effect-1">{{ __('presentation.githubtxt') }}</strong>
                                </span>
                            </span>
                        </a>
                        <span class="feature-box custom-feature-box align-items-center">
                            <span class="custom-feature-box-icon">
                                <i class="icon-share icons text-color-light"></i>
                            </span>
                            <a href="https://www.linkedin.com/in/luismiguelopes/" target="_blank" class="d-flex text-decoration-none">
                                <span class="feature-box-info">
                                    <span class="custom-label font-weight-semibold text-uppercase custom-text-color-1 line-height-5">Follow me</span>
                                    <strong class="font-weight-light text-color-light custom-opacity-effect-1">Linkedin</strong>
                                </span>
                            </a>
                        </span>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>
