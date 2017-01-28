/* Создайте код, который загрузит файл phones.json из текущей директории и
выведет все названия телефонов из него в виде списка.
*/

let url = "data/beetroot.json";
// let url = getUrl();

function getUrl() {
    // let url = locatino.url + "id";
    // return url
}

function alex(data) {
    $.each(data, function(i, phone) {
        $("#id_list").append("<li>" + phone.snippet + "  " + phone.name + " i=" + i + "</li>");
    });

}
let dataType = "json";

function error() {
    alert("Error!");
}

let params = {
    url: "data/beetroot.json",
    success: function (data) {
        $.each(data, function(i, phone) {
            $("#id_list").append("<li>" + phone.snippet + "  " + phone.name + " i=" + i + "</li>");
        });
    },
    dataType: "json",
    error: error
}


$(document).ready(function() {
    $("button").click(function() {
        $.ajax(params);

        // $.getJSON("data/beetroot.json", function(data) {
        //     $.each(data, function(i, phone) {
        //         $("#id_list").append("<li>" + phone.snippet + "  " + phone.name + " i=" + i + "</li>");
        //     });
        // })
    })
});
