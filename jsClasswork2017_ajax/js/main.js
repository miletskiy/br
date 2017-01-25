/* Создайте код, который загрузит файл phones.json из текущей директории и
выведет все названия телефонов из него в виде списка.
*/

function getData() {
    $.getJSON("data/beetroot.json", function(data) {
            console.log("success");
            putToHtml(data);
        }).done(function() {
            console.log("second success");
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
};

function putToHtml(data) {
    $.each(data, function(i, field){
            $("#id_list").append("<li>"+ field.name + "</li>");
        });
};

$(document).ready(function() {
    $("button").click(function() {
        getData();
    })
});
