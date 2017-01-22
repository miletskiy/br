/* Создать карту с селектором городов, при выборе разных городов карта
перемещается на указанный город и адрес. Каждый адрес имеет маркер
с кастомной иконкой и своим infoWindow. Города и адреса взять наших офисов
в Полтаве, Киеве и Одессе
*/

var imgKiev = "data:image/png;base64,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";
var imgOdessa = "data:image/png;base64,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";
var imgPoltava = "data:image/png;base64,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";
var coordKiev = { lat: 50.449241, lng: 30.516643 },
    coordOdessa = { lat: 46.487037, lng: 30.732549 },
    coordPoltava = { lat: 49.592754, lng: 34.547149 },
    centerMap = { lat: 48.379557, lng: 31.165632 },
    addrKiev = "г.Киев, ул. Прорезная, 18/1Г",
    addrOdessa = "г.Одесса, ул. Елисаветинская, 18",
    addrPoltava = "г.Полтава, площадь Независимости, 7",
    map;

var offices = ["Kiev", "Odessa", "Poltava"];
var data = {
    "Kiev": {
        "coord": coordKiev,
        "addr": addrKiev,
        "img": imgKiev,
        "info": '<span class="city">Киев</span><span class="phone">+38 (093) 887-39-08</span><span class="phone">+38 (097) 896-08-95</span><span class="phone">' + addrKiev + '</span>',
    },
    "Odessa": {
        "coord": coordOdessa,
        "addr": addrOdessa,
        "img": imgOdessa,
        "info": '<span class="city">Одесса</span><span class="phone">+38 (066) 112-55-64</span><span class="phone">+38 (093) 438-62-76</span><span class="phone">' + addrOdessa + '</span>',

    },
    "Poltava": {
        "coord": coordPoltava,
        "addr": addrPoltava,
        "img": imgPoltava,
        "info": '<span class="city">Полтава</span><span class="phone">+38 (099) 000-94-45</span><span class="phone">+38 (098) 677-71-70</span><span class="phone">' + addrPoltava + '</span>',
    },
}

// styles from https://snazzymaps.com/style/25/blue-water
var blueWater = [{ "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#f2f2f2" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#46bcec" }, { "visibility": "on" }] }];

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: centerMap,
        zoom: 7,
        styles: blueWater

    });

    var infowindow = new google.maps.InfoWindow();
    for (var i = 0; i < offices.length; i++) {

        var marker = new google.maps.Marker({
            map: map,
            position: data[offices[i]].coord,
            icon: data[offices[i]].img
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(data[offices[i]].info);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }
}

function changeCity(city) {
    if (city === "Kiev") {
        map.panTo(coordKiev);
    } else if (city === "Odessa") {
        map.panTo(coordOdessa);
    } else if (city === "Poltava") {
        map.panTo(coordPoltava);
    } else {
        map.panTo(centerMap);
    }
}

window.onload = function() {

    document.querySelector(".offices").addEventListener("change", function() {
        changeCity(this.value);
    });
}
