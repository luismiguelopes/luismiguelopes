<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <!-- Basic -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>luismiguelopes</title>

    <!-- SEO Meta Tags -->
    <meta name="keywords" content="HTML5 Template" />
    <meta name="description" content="luismiguelopes">
    <meta name="author" content="luismiguelopes.com">

    <!-- Favicon -->
    <link rel="shortcut icon" href="{{ asset('img/favicon.ico') }}" type="image/x-icon" />
    <link rel="apple-touch-icon" href="{{ asset('img/apple-touch-icon.webp') }}">

    <!-- Mobile Metas -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no">

    <!-- Web Fonts  -->
    <link id="googleFonts" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800&display=swap" rel="stylesheet" type="text/css">

    <!-- Vendor CSS -->
    <link rel="stylesheet" href="{{ asset('vendor/bootstrap/css/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/animate/animate.compat.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/simple-line-icons/css/simple-line-icons.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/owl.carousel/assets/owl.carousel.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/owl.carousel/assets/owl.theme.default.min.css') }}">
    <link rel="stylesheet" href="{{ asset('vendor/magnific-popup/magnific-popup.min.css') }}">

    <!-- Theme CSS -->
    <link rel="stylesheet" href="{{ asset('css/theme.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme-elements.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme-blog.css') }}">
    <link rel="stylesheet" href="{{ asset('css/theme-shop.css') }}">

    <!-- Demo CSS -->
    <link rel="stylesheet" href="{{ asset('css/demos/demo-resume.css') }}">

    <!-- Skin CSS -->
    <link id="skinCSS" rel="stylesheet" href="{{ asset('css/skins/skin-resume.css') }}">



</head>
<body data-plugin-scroll-spy data-plugin-options="{'target': '.wrapper-spy'}">
<div class="body">
    <header id="header" class="header-floating-icons" data-plugin-options="{'stickyEnabled': false, 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': false, 'stickyStartAt': 0, 'stickySetTop': '60px', 'stickyChangeLogo': false}">
        <div class="header-body bg-transparent">
            <div class="header-container container">
                <div class="header-row">
                    <div class="header-column">
                        <div class="header-row">
                            <div class="header-nav pt-1">
                                <div class="header-nav-main">
                                    <nav class="wrapper-spy collapse">
                                        <ul class="nav" id="mainNav">
                                            <li>
                                                <a data-hash href="#about-me" class="nav-link text-color-dark bg-color-primary">
                                                    <i class="icon-home icons"></i>
                                                    <span class="custom-tooltip text-color-dark">{{ __('presentation.menuAbout') }}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-hash href="#experience" class="nav-link text-color-dark bg-color-primary">
                                                    <i class="icon-eye icons"></i>
                                                    <span class="custom-tooltip text-color-dark">{{ __('presentation.menuExperience') }}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-hash href="#skills" class="nav-link text-color-dark bg-color-primary">
                                                    <i class="icon-graduation icons"></i>
                                                    <span class="custom-tooltip text-color-dark">{{ __('presentation.menuSkills') }}</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a data-hash href="#say-hello" class="nav-link text-color-dark bg-color-primary">
                                                    <i class="icon-envelope-open icons"></i>
                                                    <span class="custom-tooltip text-color-dark">{{ __('presentation.menuContact') }}</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <button class="btn header-btn-collapse-nav text-color-dark border-radius-0" data-bs-toggle="collapse" data-bs-target=".header-nav-main nav">
                                    <i class="fas fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</div>
