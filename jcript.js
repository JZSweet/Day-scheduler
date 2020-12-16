// add current dates
var now = new Date();
$("#currentDay").append(now);
// add eventlisner
// local Storage(save after refreash the page)
$(document).ready(function () {
    // $("#9Am").on("click", function (event) {
    //     event.preventDefault();
    //     console.log("click")
    //     storageEven(".block-entry", "to-do");
    // });

    // var noteOutput = localStorage.getItem("to-do");
    // $(".block-entry").val(noteOutput);

    // $("#10Am").on("click", function (event) {
    //     event.preventDefault();
    //     console.log("click")
    //     storageEven(".block-entry1", "to-do1");
    // });
    getTodo(".block-entry1", "to-do1")
    getTodo(".block-entry", "to-do")
    getTodo(".block-entry2", "to-do2")
    buttonName("#9Am",".block-entry","to-do")
    buttonName("#10Am",".block-entry1","to-do1")
    buttonName("#11Am",".block-entry2","to-do2")
});

// rows color-coded to indicate past, present, or future
function buttonName(time,blockName,storage){
    $(time).on("click", function (event) {
        event.preventDefault();
        console.log("click")
        storageEven(blockName, storage);
    });
}

function storageEven(blockName, storage) {
    var noteInput = $(blockName).val()
    localStorage.setItem(storage, noteInput);
    console.log(noteInput)
};
function getTodo(blockName, storage) {
    var noteOutput = localStorage.getItem(storage);
    $(blockName).val(noteOutput);

}