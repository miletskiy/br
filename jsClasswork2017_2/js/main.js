// Slick slider


$(document).ready(function() {
    // $("").css("background", "red");
    $("#sample").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        arrows:true,
        // nextArrow:"<button type="button" class="slick-next">Next</button>",
    });

});
