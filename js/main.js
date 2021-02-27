
//nav

$(function () {
    $('.hamburger-menu') .on('click', function(){

    $('.toggle') .toggleClass('open');
    $('.nav-list') .toggleClass('open');

});


});



///Magnific-popup.js

$(function() {
    $('.popup-youtube').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});


//   owl carousel js


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    items:6,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:false,
      
        }
    }
});


    //    sticky navigation menu
   

    let nav_offset_top = $('.nav').height() +50;

    
    function navbarFixed(){

        if($('.nav').length){
            $(window).scroll(function(){

                let scroll = $(window).scrollTop();
                if(scroll >= nav_offset_top){

                    $('.header .nav').addClass('navbar_fixed');
                }
                else{
                    $('.header .nav').removeClass('navbar_fixed');

                }
            })
        }
    }

    navbarFixed();



// Scroll reveal

window.sr = ScrollReveal();

sr.reveal('.animate-left',{

     
    origin:'left',
    duration:3000,
    distance:'3.5rem',
    delay:600,

});

sr.reveal('.animate-right',{

     
    origin:'right',
    duration:1000,
    distance:'3.5rem',
    delay:600,

});

sr.reveal('.animate-top',{

     
    origin:'top',
    duration:3000,
    distance:'3.5rem',
    delay:500,

});

sr.reveal('.animate-bottom',{

     
    origin:'bottom',
    duration:3000,
    distance:'3.5rem',
    delay:500,

});










