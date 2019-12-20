$(document).ready(function() {

    // menu

    $(window).scroll(function() {
        if ($(window).scrollTop() > 128) {
            $('.header').addClass('header--scrolling');
        }
        else {
            $('.header').removeClass('header--scrolling');
        }
    });


    $('.header__link').click(function (e) {
        e.preventDefault();
        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;
        if (destination != 0) destination -= 100;
        $('html, body').animate({ scrollTop: destination }, 600);
    });

    $('.header__mobile-menu-button').click(function(e) {
        e.preventDefault();
        if ($('.top').hasClass('top--opened_menu')) {
            $('.header .header__menu-wrap').slideUp();
            $('.top').removeClass('top--opened_menu');
        }
        else {
            $('.top').addClass('top--opened_menu');
            $('.header .header__menu-wrap').slideDown();
        }
    });

    $(window).resize(function() {
        if ($(window).width() > 767) {
            $('.header__menu').attr('style', '');
        }
    });

    // example

    $('.example__slider').slick({
        arrows: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.example__nav',
        appendArrows: $('.example__block'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    $('.example__nav').slick({
        arrows: false,
        autoplay: false,
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.example__slider',
        focusOnSelect: true
    });

    // reviews

    $('.reviews__slider').slick({
        arrows: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.reviews__nav',
        appendArrows: $('.reviews__block'),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    infinite: true,
                    dots: true
                }
            },
        ]
    });

    $('.reviews__nav').slick({
        arrows: true,
        autoplay: false,
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.reviews__slider',
        focusOnSelect: true
    });
});