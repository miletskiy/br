/* Создать карту с возможностью прокладывать маршрут от точки A к точке B.
Адреса вводятся в два поля и при нажатии на кнопку “Проложить маршрут”
на карте показывается маршрут
*/

var centerMap = { lat: 48.379557, lng: 31.165632 },
    map;

// styles from https://snazzymaps.com/style/25/blue-water
var blueWater = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: centerMap,
        zoom: 7,
        styles: blueWater
    });
}

window.onload = function() {
    console.log("Loaded!");

}
