@foreach($jobs as $job)



<section id="experience" class="section section-secondary section-no-border m-0">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h2 class="text-color-dark text-uppercase font-weight-extra-bold">Experience</h2>
                        <section class="timeline custom-timeline" id="timeline">
                            <div class="timeline-body">
                                <article class="timeline-box right custom-box-shadow-2">
                                    <div class="row">
                                        <div class="experience-info col-lg-3 col-sm-5 bg-color-primary">
													<span class="from text-color-dark text-uppercase">
														From
														<span class="font-weight-semibold">{{ $from }}</span>
													</span>
                                            <span class="to text-color-dark text-uppercase">
														To
														<span class="font-weight-semibold">{{ $to }}</span>
													</span>
                                            <p class="text-color-dark">(3 Years 9 Months)</p>
                                            <span class="company text-color-dark font-weight-semibold">
														Okler Themes
														<span class="company-location text-color-dark font-weight-normal text-uppercase">Lisbon</span>
													</span>
                                        </div>
                                        <div class="experience-description col-lg-9 col-sm-7 bg-color-light">
                                            <h4 class="text-color-dark font-weight-semibold">{{ $job->title }}</h4>
                                            <p class="custom-text-color-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt nulla tortor, a imperdiet enim tristique nec. Nulla lobortis leo eget metus dapibus sodales. Sed placerat vitae dui vitae vehicula. Quisque in tincidunt ligula, nec dignissim arcu.</p>
                                        </div>
                                    </div>
                                </article>

                                <div class="timeline-bar"></div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>

@endforeach
