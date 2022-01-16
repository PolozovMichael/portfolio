import "anime.min.js";

var $text = $(".navbar");
    var $title = $(".text");
    var $second_page = $(".first_page-2");
    $second_page.hide();
    $title.hide();
    $text.hide();
    var $block = $("#text");
    $block.hide();
    $block.slideDown(2000);
    anime({
        targets: '.welcome path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        delay: function(el, i) { return i * 100 },
        direction: 'alternate',
    });
    setTimeout(function() {
        $text.slideDown(1000);
        $title.show(1000);
        $second_page.show();
    }, 6700);

    setTimeout(function() {
        $block.hide(1000);
    }, 6500);


const mediaQuery = window.matchMedia('(max-width: 1200px)');

if(mediaQuery.matches) {

}