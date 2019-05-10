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
import WOW from 'wowjs';
import 'animate.css';
import '../sass/index.sass';
import Inputmask from "inputmask";
<<<<<<< HEAD


// wow init

var wow = new WOW.WOW(
    {    
      mobile:       false, 
      resetAnimation: true
    }
  );
wow.init();
=======
>>>>>>> c05adb9... Full

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

// main popup form
$('.btn').click(function(e){
    
    // console.log($(this).attr('href'));
    if($(this).attr('href')){
        
        
        e.preventDefault();
        openPopup($(this).attr('href'));
        if($(this).siblings().hasClass('tariff__name')){
            $('#popup-form').find('.form__title').html($(this).siblings('.tariff__name').html())
            $('#popup-form').find('.popup-title').val($(this).children('span').html() + ': ' + $(this).siblings('.tariff__name').html())
        } else{
            $('#popup-form').find('.form__title').html($(this).children('span').html())
            $('#popup-form').find('.popup-title').val($(this).children('span').html())
        }
       
        $('#popup-form').find('.btn').children('span').html($(this).children('span').html())
        
    } else{
        return true;
    }
});

// call popup
$('.footer__call').click(function(e){
    e.preventDefault();
    openPopup('#popup-call');
});
// video popup

$('.r-item__play').click(function(e){
    e.preventDefault();
    openPopup('#popup-video');
    $('#ytplayer').attr('src', $(this).attr('href'));
});

// polit conf popup
$('.conf').click(function(e){
    e.preventDefault();
    openPopup('#popup-polit');
});

// more popup
$('.r-item__more').click(function(e){
    e.preventDefault();
    openPopup('#popup-more');
});
// more tariff popup
$('.tariff__more').click(function(e){
    e.preventDefault();
    openPopup('#popup-more-tariff');
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

// BEGIN SEND MAIL
$("#feedback-form, #popup-call, #popup-form").submit(function() {
    $.ajax({
        type: "POST",
        url: "send.php",
        data: $(this).serialize()
    }).done(function() {
        $("#feedback-form")[0].reset();
        $("#popup-call")[0].reset();
        $("#popup-form")[0].reset();
        openPopup('#popup-thx');
    });
    return false;
  });

// BEGIN END MAIL

<<<<<<< HEAD
// phone mask
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(document.querySelectorAll("#popup-phone"))


// nav animate
$(".nav__link").on("click", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 500);
});
=======
var im = new Inputmask("+7 (999) 999-99-99");
im.mask(document.querySelectorAll("#popup-phone"))
>>>>>>> c05adb9... Full
