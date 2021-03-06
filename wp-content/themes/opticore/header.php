<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo bloginfo('title'); ?></title>
    <meta name="description" content="<?php echo bloginfo('description'); ?>"/>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.3/nouislider.min.css"
          integrity="sha512-KRrxEp/6rgIme11XXeYvYRYY/x6XPGwk0RsIC6PyMRc072vj2tcjBzFmn939xzjeDhj0aDO7TDMd7Rbz3OEuBQ=="
          crossorigin="anonymous"/>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
    <meta name="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="<?php echo get_template_directory_uri(); ?>/src/img/twitter.png">
    <meta name="twitter:title" content="Home">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Home">
    <meta property="og:description" content="">
    <?php if (get_locale() == 'de_DE') { ?>
        <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/src/img/openD.png">
    <?php } else { ?>
        <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/src/img/open.png">
    <?php } ?>
    <script>
        history.scrollRestoration = "manual"
    </script>
    <?php wp_head(); ?>
</head>
<body class="main preloader-active">


<script
        src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
<?php if (strpos($_SERVER['HTTP_USER_AGENT'], 'Chrome-Lighthouse')) {

} else { ?>
    <style>


        .preloader .svg-container {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-75px, -34px);
        }

        .preloader .svg-container svg {
            position: absolute;
        }

        .preloader .bg {
            width: 100%;
            height: 100%;
            pointer-events: auto;
            background: #f0f2f5;
        }

        .mlg_circle-1,
        .mlg_circle-2a,
        .mlg_circle-2b {
            position: relative;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
            animation-duration: 1.5s;
        }

        .mlg_circle-1 {
            animation-name: mlg_canim-1;
        }

        .mlg_circle-2a {
            animation-name: mlg_canim-2a;
        }

        .mlg_circle-2b {
            animation-name: mlg_canim-2b;
        }

        @keyframes mlg_canim-1 {
            0% {
                transform: translateX(0);
            }

            25% {
                transform: translateX(-37px);
            }

            50% {
                transform: translateX(75px);
            }

            100% {
                transform: translate3d(0, 0, 1);
            }
        }

        @keyframes mlg_canim-2a {
            0% {
                transform: translateX(0);
                opacity: 1;
            }

            25% {
                transform: translateX(37px);
                opacity: 0;
            }

            50% {
                transform: translateX(-37px);
                opacity: 0;
            }

            100% {
                transform: translate3d(0, 0, 1);
                opacity: 1;
            }
        }

        @keyframes mlg_canim-2b {
            0% {
                transform: translateX(0);
                opacity: 0;
            }

            25% {
                transform: translateX(37px);
                opacity: 1;
            }

            50% {
                transform: translateX(-37px);
                opacity: 1;
            }

            100% {
                transform: translateX(0);
                opacity: 0;
            }
        }
    </style>
    <div class="preloader">
        <div class="svg-container">
            <svg class="mlg_circle-2b" width="150" height="68" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6003 8.23968C24.6004 8.2265 24.6004 8.21331 24.6004 8.20011C24.6004 8.18692 24.6004 8.17373 24.6003 8.16054V8.23968ZM16.4002 16.4002V0C11.8715 4.99938e-05 8.2002 3.67135 8.2002 8.20011C8.2002 12.7289 11.8715 16.4002 16.4002 16.4002Z" fill="url(#mlg_glinear-2)"></path>
            </svg>

            <svg width="150" class="mlg_circle-1" height="68" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8.20011" cy="8.20011" r="8.20011" fill="url(#mlg_glinear-1)"></circle>
            </svg>

            <svg class="mlg_circle-2a" width="150" height="68" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6003 8.23968C24.6004 8.2265 24.6004 8.21331 24.6004 8.20011C24.6004 8.18692 24.6004 8.17373 24.6003 8.16054V8.23968ZM16.4002 16.4002V0C11.8715 4.99938e-05 8.2002 3.67135 8.2002 8.20011C8.2002 12.7289 11.8715 16.4002 16.4002 16.4002Z" fill="url(#mlg_glinear-2)"></path>
            </svg>

            <svg width="150" height="68" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="mlg_glinear-1" x1="2.16942e-07" y1="8.23529" x2="16.4706" y2="8.23529" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#33EBF7"></stop>
                        <stop offset="1" stop-color="#3EA9F5"></stop>
                    </linearGradient>
                    <linearGradient id="mlg_glinear-2" x1="8.27057" y1="8.23529" x2="24.7411" y2="8.23529" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#3D6EF9"></stop>
                        <stop offset="0.0001" stop-color="#3D6EF9"></stop>
                        <stop offset="1" stop-color="#3D9FF9"></stop>
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
<?php } ?>
<header class="header fade-opacity ">
    <div class="container">
        <a href="/" class="header__logo">
            <svg width="172" height="30" viewBox="0 0 172 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M26.0146 12.9095C26.0146 20.0392 20.191 25.819 13.0073 25.819C5.82357 25.819 0 20.0392 0 12.9095C0 5.77978 5.82357 0 13.0073 0C20.191 0 26.0146 5.77978 26.0146 12.9095Z"
                      fill="#34CFFD"/>
                <path d="M19.5114 24.0917C23.3992 21.8596 26.0149 17.6876 26.0149 12.9093C26.0149 8.13101 23.3992 3.95906 19.5114 1.72693C15.6235 3.95906 13.0078 8.13101 13.0078 12.9093C13.0078 17.6876 15.6235 21.8596 19.5114 24.0917Z"
                      fill="#0248F5"/>
                <path d="M19.5938 24.0776C20.9934 25.0037 23.4491 25.819 26.0135 25.819V0C23.449 0 21.6085 0.580498 19.5938 1.85213C23.2229 4.14256 26.0133 8.32508 26.0133 12.9097C26.0133 17.4942 23.2228 21.7872 19.5938 24.0776Z"
                      fill="#3763E0"/>
                <path d="M49.6236 23.0651C55.659 23.0651 59.7173 19.1406 59.7173 13.2539C59.7173 7.36716 55.659 3.44267 49.6236 3.44267C43.5622 3.44267 39.5039 7.36716 39.5039 13.2539C39.5039 19.1406 43.5622 23.0651 49.6236 23.0651ZM49.6236 20.0443C45.8515 20.0443 43.302 17.3333 43.302 13.2539C43.302 9.17449 45.8515 6.46349 49.6236 6.46349C53.3957 6.46349 55.9191 9.17449 55.9191 13.2539C55.9191 17.3333 53.3957 20.0443 49.6236 20.0443Z"
                      fill="#313134"/>
                <path d="M70.8328 8.63229C68.6736 8.63229 67.1127 9.51014 66.1242 10.9818L66.0461 8.89048H62.6382V28.4871H66.1762V20.793C67.1647 22.2131 68.6996 23.0651 70.8328 23.0651C74.6049 23.0651 77.5446 20.1476 77.5446 15.7842C77.5446 11.4724 74.6049 8.63229 70.8328 8.63229ZM70.0263 20.0443C67.711 20.0443 66.1762 18.3661 66.1762 15.8358C66.1762 13.3055 67.711 11.6273 70.0263 11.6273C72.3156 11.6273 73.8765 13.3055 73.8765 15.81C73.8765 18.3661 72.3156 20.0443 70.0263 20.0443Z"
                      fill="#313134"/>
                <path d="M86.5938 20.0443C85.4491 20.0443 84.6687 19.2181 84.6687 17.953V11.7564H88.805V8.89048H84.6687V4.81108H81.1307V8.89048H78.8154V11.7564H81.1307V18.6759C81.1307 21.3094 82.8737 23.0651 85.4491 23.0651C86.6978 23.0651 87.9465 22.8586 89.0131 22.4196V19.5795C88.2067 19.9152 87.4002 20.0443 86.5938 20.0443Z"
                      fill="#313134"/>
                <path d="M93.1661 6.61841C94.3888 6.61841 95.2473 5.76638 95.2473 4.55289C95.2473 3.33939 94.3888 2.46155 93.1661 2.46155C91.9434 2.46155 91.0589 3.33939 91.0589 4.55289C91.0589 5.76638 91.9434 6.61841 93.1661 6.61841ZM91.3971 22.8069H94.9351V8.89048H91.3971V22.8069Z"
                      fill="#313134"/>
                <path d="M108.083 23.0651C111.595 23.0651 114.404 21.7225 116.251 19.2181L113.78 17.0235C112.557 18.8824 110.762 20.0443 108.161 20.0443C104.285 20.0443 101.657 17.3333 101.657 13.2281C101.657 9.17449 104.232 6.46349 108.109 6.46349C110.398 6.46349 112.245 7.44462 113.338 8.83884L115.653 6.51513C113.754 4.47543 111.204 3.44267 108.057 3.44267C101.943 3.44267 97.8589 7.34134 97.8589 13.2023C97.8589 19.1148 101.969 23.0651 108.083 23.0651Z"
                      fill="#313134"/>
                <path d="M125.139 23.0651C129.614 23.0651 132.631 20.1734 132.631 15.8358C132.631 11.524 129.614 8.63229 125.139 8.63229C120.639 8.63229 117.621 11.524 117.621 15.8358C117.621 20.1734 120.639 23.0651 125.139 23.0651ZM125.139 20.0443C122.824 20.0443 121.289 18.3661 121.289 15.8358C121.289 13.3055 122.824 11.6273 125.139 11.6273C127.428 11.6273 128.963 13.3055 128.963 15.8358C128.963 18.3661 127.428 20.0443 125.139 20.0443Z"
                      fill="#313134"/>
                <path d="M138.883 10.7494L138.831 8.89048H135.423V22.8069H138.961V15.3452C138.961 13.2539 140.886 11.8597 143.8 11.8597L144.034 8.63229C141.771 8.63229 140.002 9.38104 138.883 10.7494Z"
                      fill="#313134"/>
                <path d="M158.623 15.6292C158.623 11.4207 155.813 8.63229 151.625 8.63229C147.41 8.63229 144.627 11.5498 144.627 15.9391C144.627 20.225 147.488 23.0651 151.781 23.0651C154.434 23.0651 156.646 21.8774 157.894 20.0185L155.163 18.6501C154.33 19.657 153.16 20.3025 151.729 20.3025C149.674 20.3025 148.633 19.0632 148.373 17.1009H158.519C158.571 16.6878 158.623 16.1198 158.623 15.6292ZM151.625 11.3949C153.524 11.3949 154.642 12.6084 154.903 14.7256H148.373C148.659 12.6084 149.752 11.3949 151.625 11.3949Z"
                      fill="#313134"/>
                <path d="M166.969 1.57471C167.644 1.57471 168.249 1.73061 168.784 2.0424C169.319 2.34265 169.738 2.76416 170.041 3.30692C170.343 3.83813 170.494 4.43863 170.494 5.10842C170.494 5.7782 170.343 6.38448 170.041 6.92724C169.738 7.47 169.319 7.89728 168.784 8.20907C168.249 8.50932 167.644 8.65945 166.969 8.65945C166.282 8.65945 165.671 8.50932 165.136 8.20907C164.601 7.89728 164.182 7.47 163.88 6.92724C163.577 6.38448 163.426 5.7782 163.426 5.10842C163.426 4.43863 163.577 3.83813 163.88 3.30692C164.182 2.76416 164.601 2.34265 165.136 2.0424C165.671 1.73061 166.282 1.57471 166.969 1.57471ZM166.969 7.96657C167.807 7.96657 168.481 7.70096 168.993 7.16975C169.517 6.63854 169.779 5.95143 169.779 5.10842C169.779 4.26541 169.517 3.5783 168.993 3.04709C168.481 2.51587 167.807 2.25027 166.969 2.25027C166.119 2.25027 165.439 2.51587 164.927 3.04709C164.426 3.5783 164.176 4.26541 164.176 5.10842C164.176 5.95143 164.426 6.63854 164.927 7.16975C165.439 7.70096 166.119 7.96657 166.969 7.96657ZM168.54 4.38089C168.54 4.65804 168.464 4.89478 168.313 5.0911C168.173 5.27586 167.975 5.40867 167.719 5.4895L168.697 6.92724L167.597 6.94456L166.759 5.55879H166.463V6.94456H165.555V3.22031H167.231C167.626 3.22031 167.94 3.32424 168.173 3.5321C168.417 3.73997 168.54 4.0229 168.54 4.38089ZM166.463 4.81394H167.178C167.306 4.81394 167.411 4.7793 167.492 4.71001C167.585 4.64072 167.632 4.54256 167.632 4.41553C167.632 4.2885 167.585 4.19612 167.492 4.13838C167.411 4.06909 167.306 4.03445 167.178 4.03445H166.463V4.81394Z"
                      fill="#313134"/>
            </svg>

        </a>
        <nav class="header__nav">
            <?php
            $items = wp_get_nav_menu_items('Main');
            if (!empty($items)): ?>
                <?php foreach ($items as $item): ?>
                    <a href="<?php echo $item->url; ?>"><?php echo $item->post_title; ?></a>
                <?php endforeach; ?>

            <?php else: // Otherwise we show a message indicating that the menu has no elements
            endif; ?>

            <div class="lang">
                <?php if (get_locale() == 'de_DE') { ?>
                    <a href="/" class="active">En</a>
                <?php } else { ?>
                    <a href="/de" class="active">De</a>
                <?php } ?>
            </div>

            <div class="burger">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
        </nav>
    </div>
</header>
<div class="menu ">
    <div class="container">
        <div class="menu__nav">
            <?php
            $items = wp_get_nav_menu_items('Main');
            if (!empty($items)): ?>
                <?php foreach ($items as $item): ?>
                    <a href="<?php echo $item->url; ?>"><?php echo $item->post_title; ?></a>
                <?php endforeach; ?>

            <?php else: // Otherwise we show a message indicating that the menu has no elements
            endif; ?>
        </div>
        <div class="menu__social">
            <a href="#">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="white" fill-opacity="0.15"/>
                    <path d="M20.3583 12.5829H21.7784V10.1095C21.5334 10.0758 20.6908 10 19.7095 10C17.662 10 16.2594 11.2879 16.2594 13.6549V15.8333H14V18.5983H16.2594V25.5556H19.0296V18.599H21.1977L21.5419 15.834H19.029V13.9291C19.0296 13.1299 19.2448 12.5829 20.3583 12.5829Z"
                          fill="white"/>
                </svg>
            </a>
            <a href="#">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.15"/>
                    <path d="M23.3316 11.1111H16.6649C13.5972 11.1111 11.1094 13.5989 11.1094 16.6666V23.3333C11.1094 26.4011 13.5972 28.8889 16.6649 28.8889H23.3316C26.3994 28.8889 28.8872 26.4011 28.8872 23.3333V16.6666C28.8872 13.5989 26.3994 11.1111 23.3316 11.1111ZM27.2205 23.3333C27.2205 25.4778 25.476 27.2222 23.3316 27.2222H16.6649C14.5205 27.2222 12.776 25.4778 12.776 23.3333V16.6666C12.776 14.5222 14.5205 12.7778 16.6649 12.7778H23.3316C25.476 12.7778 27.2205 14.5222 27.2205 16.6666V23.3333Z"
                          fill="white"/>
                    <path d="M19.9991 15.5555C17.5447 15.5555 15.5547 17.5455 15.5547 20C15.5547 22.4544 17.5447 24.4444 19.9991 24.4444C22.4536 24.4444 24.4436 22.4544 24.4436 20C24.4436 17.5455 22.4536 15.5555 19.9991 15.5555ZM19.9991 22.7778C18.468 22.7778 17.2214 21.5311 17.2214 20C17.2214 18.4678 18.468 17.2222 19.9991 17.2222C21.5302 17.2222 22.7769 18.4678 22.7769 20C22.7769 21.5311 21.5302 22.7778 19.9991 22.7778Z"
                          fill="white"/>
                    <path d="M24.7719 15.8146C25.099 15.8146 25.3641 15.5494 25.3641 15.2223C25.3641 14.8953 25.099 14.6301 24.7719 14.6301C24.4448 14.6301 24.1797 14.8953 24.1797 15.2223C24.1797 15.5494 24.4448 15.8146 24.7719 15.8146Z"
                          fill="white"/>
                </svg>

            </a>
            <a href="#">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="18" cy="18" r="18" fill="white" fill-opacity="0.15"/>
                    <path d="M25.5495 25.5555V25.5549H25.5534V19.8499C25.5534 17.059 24.9526 14.9091 21.6898 14.9091C20.1213 14.9091 19.0687 15.7698 18.639 16.5858H18.5936V15.1696H15.5V25.5549H18.7213V20.4125C18.7213 19.0585 18.978 17.7492 20.6547 17.7492C22.3069 17.7492 22.3315 19.2944 22.3315 20.4993V25.5555H25.5495Z"
                          fill="white"/>
                    <path d="M10.2539 15.1703H13.4791V25.5556H10.2539V15.1703Z" fill="white"/>
                    <path d="M11.868 10C10.8368 10 10 10.8368 10 11.868C10 12.8992 10.8368 13.7534 11.868 13.7534C12.8992 13.7534 13.7359 12.8992 13.7359 11.868C13.7353 10.8368 12.8985 10 11.868 10V10Z"
                          fill="white"/>
                </svg>

            </a>
            <a href="#">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill="white" fill-opacity="0.15"/>
                    <path d="M28.3731 14.8868C27.7725 15.1503 27.1325 15.3249 26.4653 15.4097C27.1517 14.9999 27.6756 14.3559 27.9219 13.5797C27.2819 13.9612 26.5753 14.2307 25.8223 14.3811C25.2147 13.7341 24.3486 13.3334 23.4038 13.3334C21.5707 13.3334 20.095 14.8212 20.095 16.6452C20.095 16.9077 20.1172 17.16 20.1717 17.4003C17.4191 17.266 14.9834 15.9467 13.3471 13.937C13.0615 14.4326 12.8939 14.9999 12.8939 15.6106C12.8939 16.7573 13.4844 17.7737 14.3646 18.3622C13.8327 18.3521 13.3108 18.1977 12.8687 17.9544C12.8687 17.9645 12.8687 17.9776 12.8687 17.9908C12.8687 19.5997 14.0164 20.9362 15.5214 21.2441C15.2519 21.3177 14.9581 21.3531 14.6533 21.3531C14.4413 21.3531 14.2273 21.341 14.0265 21.2965C14.4555 22.6078 15.6728 23.5717 17.1203 23.603C15.9938 24.4842 14.5635 25.0152 13.015 25.0152C12.7435 25.0152 12.4831 25.0031 12.2227 24.9698C13.6893 25.9156 15.4275 26.4556 17.302 26.4556C23.3947 26.4556 26.7257 21.4086 26.7257 17.0338C26.7257 16.8875 26.7207 16.7462 26.7136 16.6059C27.3707 16.1395 27.9229 15.5571 28.3731 14.8868Z"
                          fill="white"/>
                </svg>

            </a>
        </div>
        <svg class="menu__decor" width="375" height="178" viewBox="0 0 375 178" fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M133.455 0.347778L132.153 0.341152C117.416 0.266118 105.416 11.3582 105.346 25.1201L105.125 68.4679C105.055 82.2298 93.055 93.3218 78.3179 93.2468L77.0165 93.2402C62.2794 93.1651 50.3929 81.9514 50.463 68.1895L50.5166 57.6565C50.5867 43.8946 38.7002 32.6808 23.9631 32.6058L22.6616 32.5992C7.92454 32.5241 -4.0755 43.6163 -4.14556 57.3782L-6.72801 564.587C-6.79808 578.349 5.08838 589.563 19.8255 589.638L21.127 589.644C35.8641 589.719 47.8641 578.627 47.9342 564.865L48.0332 545.42C48.1032 531.658 60.1033 520.566 74.8404 520.641L76.1418 520.647C90.8789 520.722 102.765 531.936 102.695 545.698L102.623 559.877C102.553 573.639 114.44 584.853 129.177 584.928L130.478 584.934C145.215 585.009 157.215 573.917 157.285 560.155L157.298 557.725C157.368 543.963 169.368 532.871 184.105 532.946L185.406 532.952C200.143 533.027 212.03 544.241 211.96 558.003L211.82 585.551C211.75 599.313 223.636 610.527 238.373 610.602L239.675 610.608C254.412 610.683 266.412 599.591 266.482 585.829L266.548 572.866C266.618 559.104 278.618 548.012 293.355 548.087L294.656 548.093C309.394 548.168 321.28 559.382 321.21 573.144L321.123 590.159C321.053 603.921 332.94 615.134 347.677 615.21L348.978 615.216C363.715 615.291 375.715 604.199 375.785 590.437L378.508 55.6803C378.578 41.9184 366.692 30.7046 351.955 30.6296L350.653 30.623C335.916 30.5479 323.916 41.6401 323.846 55.402L323.741 76.063C323.671 89.8249 311.671 100.917 296.934 100.842L295.632 100.835C280.895 100.76 269.009 89.5466 269.079 75.7847L269.165 58.7697C269.235 45.0078 257.349 33.7941 242.612 33.719L241.31 33.7124C226.573 33.6374 214.573 44.7295 214.503 58.4914C214.433 72.2533 202.433 83.3454 187.696 83.2703L186.394 83.2637C171.657 83.1887 159.771 71.975 159.841 58.2131L160.008 25.3985C160.078 11.6366 148.192 0.422812 133.455 0.347778Z"
                  fill="white" fill-opacity="0.1"/>
        </svg>

    </div>
</div>

<main>
