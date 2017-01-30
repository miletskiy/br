// Slick slider


$(document).ready(function() {
    // $("").css("background", "red");
    $("#slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        // dots: true,
        infinite: true,
        cssEase: 'linear',
        arrows:false,
    });

});
