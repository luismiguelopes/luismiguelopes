<x-header></x-header>
<div role="main" class="main">
    <x-about></x-about>

    <section id="experience" class="section section-secondary section-no-border m-0">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="text-color-dark text-uppercase font-weight-extra-bold">Experience</h2>

                    <section class="timeline custom-timeline" id="timeline">
                        <div class="timeline-body">
                            @foreach($jobs as $job)
                                @php
                                    // Ensure $from and $to are Carbon instances
                                    $from = \Carbon\Carbon::parse($job->from);
                                    $to = \Carbon\Carbon::parse($job->to);

                                    // Check if 'to' date is in the future
                                    if ($to->isFuture()) {
                                        $to = \Carbon\Carbon::now();
                                    }

                                    // Calculate the duration
                                    $totalDays = $from->diffInDays($to);
                                    $years = floor($totalDays / 365);
                                    $days = $totalDays % 365;
                                    $duration = "{$years} year" . ($years != 1 ? 's' : '') . " and {$days} day" . ($days != 1 ? 's' : '');
                                @endphp
                                <article class="timeline-box right custom-box-shadow-2">
                                    <div class="row">
                                        <div class="experience-info col-lg-3 col-sm-5 bg-color-primary">
                                            <span class="from text-color-dark text-uppercase">
                                                From
                                                <span class="font-weight-semibold">{{ $from->format('M Y') }}</span>
                                            </span>
                                            <span class="to text-color-dark text-uppercase">
                                                To
                                                <span class="font-weight-semibold">
                                                    {{ $job->to->isFuture() ? 'Present' : $job->to->format('M Y') }}
                                                </span>
                                            </span>
                                            <p class="text-color-dark">({{ $duration }})</p>
                                            <span class="company text-color-dark font-weight-semibold">
                                                {{ $job->company }}
                                                <span class="company-location text-color-dark font-weight-normal text-uppercase">Lisbon</span>
                                            </span>
                                        </div>
                                        <div class="experience-description col-lg-9 col-sm-7 bg-color-light">
                                            <h4 class="text-color-dark font-weight-semibold">{{ $job->title }}</h4>
                                            <p class="custom-text-color-2">{!! nl2br(e($job->description)) !!}</p>
                                        </div>
                                    </div>
                                </article>
                            @endforeach
                            <div class="timeline-bar"></div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>

    <x-skills></x-skills>
    <x-sayhello></x-sayhello>
</div>
<x-footer></x-footer>
