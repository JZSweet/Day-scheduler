// add current dates
var now = new Date();
$("#currentDay").append(now);
// add rows
// add buttons
// add eventlisner
// local Storage(save after refreash the page)
// rows color-coded to indicate past, present, or future
$(document).ready(function () {
    $("button").on("click", function (event) {
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


// $("button").click(function () {
//     $(this).append("the button")
// });


