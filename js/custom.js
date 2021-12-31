//Toggle Menu
$(document).ready(function () {
    $('.navigation-menu .nav .toggle-icon').click(function () {
        $('.navigation-menu .nav').toggleClass('collapse');
    })
})

//owl-carousel for blog
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav .owl-prev'),$('.owl-nav .owl-next')],
        responsive:{
            0:{
              items:1
            },
            320:{
                items:1
            },
            550:{
                items:2
            },
            950:{
                items:3
            },
        }
    });
})

//scroll btn show
$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 500) {
            $('.scroll-top').addClass('show')
        } else {
            $('.scroll-top').removeClass('show')
        }
    })
})

//Scroll top
$(document).ready(function () {
    $('.footer .scroll-top').click(function () {
        $('html,body').animate({
            scrollTop:0
        }, 1000)
    })

})

//Animation on Scroll
$(document).ready(function () {
    AOS.init()
})