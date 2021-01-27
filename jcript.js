// set time
var date = moment().format("MMMM Do YYYY");
$("#currentDay").append(date);
var hour = parseInt(moment().format("HH"));
$("#currentDay").append("Hour:",hour);

// rows color-coded to indicate past, present, or future
function checktime() {
    $(".block").each(function () {
        console.log("whats this", $(this))
        var time = $(this).data().hours;

        if (time < moment().hour()) {
            $(this).addClass("past")
        } else if (time > moment().hour()) {
            $(this).addClass("future")
        } else {
            $(this).addClass("present")
        };
    });
};
checktime($(".block"));


console.log("this is a block", $(".block").data())

$(document).ready(function () {
    getTodo(".block-entry", "to-do")
    getTodo(".block-entry1", "to-do1")
    getTodo(".block-entry2", "to-do2")
    getTodo(".block-entry3", "to-do3")
    getTodo(".block-entry4", "to-do4")
    getTodo(".block-entry5", "to-do5")
    getTodo(".block-entry6", "to-do6")
    getTodo(".block-entry7", "to-do7")
    getTodo(".block-entry8", "to-do8")
    buttonName("#9Am", ".block-entry", "to-do")
    buttonName("#10Am", ".block-entry1", "to-do1")
    buttonName("#11Am", ".block-entry2", "to-do2")
    buttonName("#12Pm", ".block-entry3", "to-do3")
    buttonName("#1Pm", ".block-entry4", "to-do4")
    buttonName("#2Pm", ".block-entry5", "to-do5")
    buttonName("#3Pm", ".block-entry6", "to-do6")
    buttonName("#4Pm", ".block-entry7", "to-do7")
    buttonName("#5Pm", ".block-entry8", "to-do8")
});

// add eventlisner
function buttonName(time, blockName, storage) {
    $(time).on("click", function (event) {
        event.preventDefault();
        console.log("click")
        storageEven(blockName, storage);
    });
}

// local Storage(save after refreash the page)
function storageEven(blockName, storage) {
    var noteInput = $(blockName).val()
    localStorage.setItem(storage, noteInput);
    console.log(noteInput)
};
function getTodo(blockName, storage) {
    var noteOutput = localStorage.getItem(storage);
    $(blockName).val(noteOutput);

}

