/* Code by Kalinovsky.
    Find me here
    mail - kalinovsky.job@gmail.com
    tg - @AlexKalinovsky 
    */

import "jquery";
import 'reset-css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'owl.carousel';
import '../sass/index.sass';

// BEGIN NAVBAR

function openNav(){
    $('.header__nav').addClass('header__nav_active');
}
function closeNav(){
    $('.header__nav').removeClass('header__nav_active');
}

$('.header__burger').click(openNav);
$('.nav__close').click(closeNav);
// END NAVBAR


// BEGIN REVIEW CAROUSEL
var owl = $(".review__carousel");
owl.owlCarousel({
    loop: true,
    merge: true,
    nav: false,
    dots: false,
    autoWidth: true,
    center: true,
    items: 1,
    touchDrag: false,
    mouseDrag: false
});


$('.review__nav_prev').click(function() {
    owl.trigger('prev.owl.carousel');
});
$('.review__nav_next').click(function() {
    owl.trigger('next.owl.carousel');
});
// END REVIEW CAROUSEL

// BEGIN POPUP

const scrollbarWidth = function() {
    var block = $('<div>').css({'height':'50px','width':'50px'}),
        indicator = $('<div>').css({'height':'200px'});
    
    $('body').append(block.append(indicator));
    var w1 = $('div', block).innerWidth();    
    block.css('overflow-y', 'scroll');
    var w2 = $('div', block).innerWidth();
    $(block).remove();
    return (w1 - w2);
}

function closePopup(){
    $('.overlay').removeClass('overlay_active');
    $('.popup').each(function(){
        $(this).hide();
    });
    $('#ytplayer').attr('src', '');
    $('body').removeClass('body-hide').css('margin-right', '0');
}
// closePopup();
function openPopup(id){
    closePopup();
    $('.overlay').addClass('overlay_active');
    $(id).show();
    $('body').css('margin-right', scrollbarWidth).addClass('body-hide');
}

$('.popup-wrap__close').click(closePopup);


$('.btn, .footer__call').click(function(e){
    
    // console.log($(this).attr('href'));
    if($(this).attr('href')){
        e.preventDefault();
        openPopup($(this).attr('href'));
        $('#popup-form').find('.form__title').html($(this).children('span').html())
        $('#popup-form').find('.btn').children('span').html($(this).children('span').html())
        
    } 
});


$('.r-item__play').click(function(e){
    e.preventDefault();
    openPopup('#popup-video');
    $('#ytplayer').attr('src', $(this).attr('href'));
});

$('.conf').click(function(e){
    e.preventDefault();
    openPopup('#popup-polit');
});

$('.r-item__more').click(function(e){
    e.preventDefault();
    openPopup('#popup-more');
});
// END POPUP

// BEGIN FAQ

$('.faq__head').click(function(){
    $('.faq__body').removeClass('faq__body_active');
    $('.faq__button').removeClass('faq__button_active');
    $(this).siblings('.faq__body').addClass('faq__body_active');
    $(this).children('.faq__button').addClass('faq__button_active');
});

// END FAQ