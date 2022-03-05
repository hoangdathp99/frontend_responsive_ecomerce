$(document).ready(function() {
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
        $('.web-info').addClass('active-nav');
        $('.control-box').addClass('active-nav');
    });
    $('.cover').click(function(e) {
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
        $('.web-info').removeClass('active-nav');
        $('.control-box').removeClass('active-nav');
    });
    $(".show").click(function(e) {
        e.preventDefault();
        $('.about-content').toggle('show');
        $('.show').toggle('hide');
        $('.hide').toggle('show');
        $('.social').toggle('hide');

    });
    $(".hide").click(function(e) {
        e.preventDefault();
        $('.about-content').toggle('hide');
        $('.show').toggle('show');
        $('.hide').toggle('hide');
        $('.social').toggle('show');
    });
    $(".show-left").click(function(e) {
        e.preventDefault();
        $('.nav-item-right').toggle('show');
        // $('.show').toggle('hide');
        // $('.hide').toggle('show');
        // $('.social').toggle('hide');

    });
    $(".show-right").click(function(e) {
        e.preventDefault();
        $('.nav-item').toggle('show');

    });
    $(".address-mobile").click(function(e) {
        e.preventDefault();
        $(this).find('.content').toggle('show');
        $('.phone-mobile').toggle('hide');
        $('.mail-mobile').toggle('hide');
    });
    $(".phone-mobile").click(function(e) {
        e.preventDefault();
        $(this).find('.content').toggle('show');

        $('.address-mobile').toggle('hide');
        $('.mail-mobile').toggle('hide');
    });
    $(".mail-mobile").click(function(e) {
        e.preventDefault();
        $(this).find('.content').toggle('show');

        $('.phone-mobile').toggle('hide');
        $('.address-mobile').toggle('hide');
    });
    // $('nav-bar').click(function (e) { 
    //     e.preventDefault();
    //     $(this).find('.nav-item').addClass('active');
    //     $(this).siblings().removeClass('active');
    // });
    $('.slider').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        responsive: [{

            breakpoint: 1024,
            settings: {
                slidesToShow: 2,

            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,

            }

        }, {

            // breakpoint: 300,
            // settings: "unslick" // destroys slick

        }]
    });
});