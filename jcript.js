// add current dates
var now = new Date();
$("#currentDay").append(now);
// add eventlisner
// local Storage(save after refreash the page)
$(document).ready(function () {
    $(".button").on("click", function (event) {
        event.preventDefault();
        storageEven();
    });
    function storageEven() {
        var noteInput = $(".block-entry").val()
        localStorage.setItem("to-do", noteInput);
        console.log(noteInput)
    };

    var noteOutput = localStorage.getItem("to-do");
    $(".block-entry").val(noteOutput);
});

// rows color-coded to indicate past, present, or future