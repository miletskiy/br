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
        nextArrow:'<span><i class="fa fa-arrow-circle-right fa-2x" aria-hidden="true"></i></span>',
        prevArrow: '<button type="button" data-role="none" class="slick-pre slick-arro" aria-label="Previous" role="button" style=""><i class="fa fa-asterisk" aria-hidden="true"></i></button>'
    });

});
