// Slick slider


$(document).ready(function() {

    $("#slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        cssEase: 'linear',
        arrows: false,
    });

    // isotope settings
    var select = "*";
    var opts = {
        itemSelector: ".ma-grid__item",
        layoutMode: "fitRows",
        filter: select
    }
    var $grid = $(".ma-grid").isotope(opts);

    $(".ma-button").on("click", function() {
        var filterVal = $(this).data().filter;
        $grid.isotope({
            filter: filterVal
        });
    });
});
