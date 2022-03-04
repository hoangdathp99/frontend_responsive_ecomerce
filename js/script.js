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
                infinite: true
            }

        }, {

            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                dots: true
            }

        }, {

            breakpoint: 300,
            settings: "unslick" // destroys slick

        }]
    });
});