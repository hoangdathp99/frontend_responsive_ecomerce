$(document).ready(function () {
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
        $('.web-info').addClass('active-nav');
        $('.control-box').addClass('active-nav');
    });
    $('.cover').click(function (e) { 
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
});