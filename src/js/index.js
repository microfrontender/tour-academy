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
