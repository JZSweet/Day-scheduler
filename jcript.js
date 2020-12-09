// add rows
// add current time
// add button
// add eventlisner
// local Storage 
$(document).ready(function(){ 
    $(".save-button").on("click", function(){ 
        var entryTime = $(this).parent().attr("id");
        var userEntry = $(this).siblings(".block-entry").val();
        localStorage.setItem(entryTime, userEntry);
    });
});