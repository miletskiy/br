/* Создать карту с возможностью прокладывать маршрут от точки A к точке B.
Адреса вводятся в два поля и при нажатии на кнопку “Проложить маршрут”
на карте показывается маршрут
*/

var centerMap = { lat: 48.379557, lng: 31.165632 },
    map;
var directionsDisplay;
var directionsService;
var autocompleteStart,autocompleteEnd;

// styles from https://snazzymaps.com/style/83/muted-blue
var mutedBlue = [{"featureType":"all","stylers":[{"saturation":0},{"hue":"#e7ecf0"}]},{"featureType":"road","stylers":[{"saturation":-70}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"simplified"},{"saturation":-60}]}];

function initMap() {

    directionsDisplay = new google.maps.DirectionsRenderer();
    directionsService = new google.maps.DirectionsService();
    map = new google.maps.Map(document.getElementById('map'), {
        center: centerMap,
        zoom: 6,
        styles: mutedBlue
    });
    directionsDisplay.setMap(map);

    var inputStart = document.getElementById("start");
    var inputEnd = document.getElementById("end");
    autocompleteStart = new google.maps.places.Autocomplete(inputStart);
    autocompleteEnd = new google.maps.places.Autocomplete(inputEnd);
    autocompleteStart.bindTo('bounds', map);
    autocompleteEnd.bindTo('bounds', map);

}


function setRoute(start, end) {

    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(result);
        } else {
            alert("Возникла ошибка:" + status);
        }
    });
}


window.onload = function() {

    document.querySelector("#route").addEventListener("click", function() {
        s = autocompleteStart.getPlace();
        var latStart = s.geometry.location.lat();
        var lngStart = s.geometry.location.lng();
        e = autocompleteEnd.getPlace();
        var latEnd = e.geometry.location.lat();
        var lngEnd = e.geometry.location.lng();
        start = new google.maps.LatLng(latStart, lngStart);
        end = new google.maps.LatLng(latEnd, lngEnd);

        setRoute(start, end);
    });

    console.log("Loaded!");
}
