$(document).ready(function(){


$('#search-icon').click(function(){
    $('.search-bar').toggle(500);
})

$('.main-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})


wow = new WOW({
    mobile:false
});

wow.init();


$(function(){
    $('.main-menu').slicknav({
        prependTo :".header_bottom"
    });
});










});