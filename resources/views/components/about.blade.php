<div id="about-me">
    <section class="section section-no-border section-parallax bg-transparent custom-section-padding-1 custom-position-1 custom-xs-bg-size-cover parallax-no-overflow m-0" data-plugin-parallax data-plugin-options="{'speed': 1.5}" data-image-src="img/about-me-bg-1.jpg">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 position-relative custom-sm-margin-bottom-1">
                    <img src="img/luismiguelopes.jpeg" class="img-fluid custom-border custom-image-position-2 custom-box-shadow-4" alt />
                </div>
                <div class="col-lg-6 col-xl-5">
                    <h1 class="text-color-primary custom-font-size-1">Luis Lopes</h1>
                    <p class="text-color-primary font-weight-normal custom-font-size-2 custom-margin-bottom-1">{{ __('presentation.job') }}</p>
                    <span class="custom-about-me-infos">
					<span class="custom-text-color-1 text-uppercase">{{ __('presentation.place') }}</span>
					<span class="custom-text-color-1 text-uppercase mb-3">Information Technology &amp; Analytics</span>
					<span class="custom-text-color-1 text-uppercase">
											<strong class="text-color-light">Previous: </strong>
											Data Analyst at Teleperformance
											<a data-hash href="#experience" class="btn btn-tertiary text-uppercase custom-btn-style-1 text-1 ms-2">View More</a>


				    </span>
                </div>
                <div class="col-lg-2 col-xl-3 d-none d-lg-block">
                    <img src="img/mouse.png" custom-anim class="img-fluid custom-image-pos-1" alt />
                </div>
            </div>
        </div>

    </section>

    <div class="custom-about-me-links bg-color-light">
        <div class="container">
            <div class="row justify-content-end">
                <div class="col-lg-3 text-center custom-xs-border-bottom p-0">
                    <a data-hash href="#say-hello" class="text-decoration-none">
										<span class="custom-nav-button text-color-dark">
											<i class="icon-earphones-alt icons text-color-primary"></i>
											{{ __('presentation.btncontact') }}
										</span>
                    </a>
                </div>
                <div class="col-lg-2 text-center custom-xs-border-bottom p-0">
                    <a data-hash href="#say-hello" class="text-decoration-none">
										<span class="custom-nav-button custom-divisors text-color-dark">
											<i class="icon-envelope-open icons text-color-primary"></i>
											 {{ __('presentation.btnmessage') }}
										</span>
                    </a>
                </div>
                <div class="col-lg-3 text-center p-0">
                    <a href="{{ route('download.file') }}" class="text-decoration-none">
										<span class="custom-nav-button text-color-dark">
											<i class="icon-cloud-download icons text-color-primary"></i>
											{{ __('presentation.btnresume') }}
										</span>
                    </a>
                </div>
            </div>
        </div>
    </div>

    <section class="section section-no-border bg-color-light m-0">
        <div class="container">
            <div class="row">
                <div class="col">

                    <div class="custom-box-details bg-color-light custom-box-shadow-1 col-lg-6 ms-5 mb-5 mb-lg-4 float-end clearfix">
                        <h4>Personal Details</h4>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="custom-list-style-1 p-0 mb-0">
                                    <li>
                                        <span class="text-color-dark">{{ __('presentation.birthday') }}</span>
                                        <span class="custom-text-color-2">{{ __('presentation.birthdate') }}</span>
                                    </li>
                                    <li>
                                        <span class="text-color-dark">{{ __('presentation.nationality') }}</span>
                                        <span class="custom-text-color-2">{{ __('presentation.nationtxt') }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="custom-list-style-1 p-0 mb-0">
                                    <li>
                                        <span class="text-color-dark">{{ __('presentation.github') }}</span>
                                        <span class="custom-text-color-2"><a class="custom-text-color-2" href="https://github.com/luismiguelopes" target="_blank">{{ __('presentation.githubtxt') }}</a></span>
                                    </li>
                                    <li>
                                        <span class="text-color-dark">{{ __('presentation.linkedin') }}</span>
                                        <span class="custom-text-color-2"><a class="custom-text-color-2" href="https://www.linkedin.com/in/luismiguelopes/" target="_blank">{{ __('presentation.linkedintxt') }}</a></span>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <h2 class="text-color-dark font-weight-extra-bold text-uppercase">{{ __('presentation.aboutme') }}</h2>

                    {!! __('presentation.aboutme-descript') !!}

                </div>
            </div>
        </div>
    </section>
</div>
