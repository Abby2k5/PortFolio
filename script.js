$(document).ready(function () {
    // Scroll Up Button
    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Slide Up
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
    });

    // Toggle Menu
    $('.menu-btn').click(function () {
        $('.menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Typing Animation
    var typed = new Typed('.typing', {
        strings: ['Web Developer', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed2 = new Typed('.typing-2', {
        strings: ['Web Developer', 'Designer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
