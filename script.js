// Display today's day and date
var today = moment().format('dddd, MMM Do');
$("#currentDay").html(today);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that the code isn't run until the browser has finished rendering all the elements in the html.
$(document).ready(function () {
    //Save Button click listener - saves text written by user in current time block to local storage
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
   

    function timeLoop() {
        //Get current time in hours
        var currentTime = moment().hour();

        // loop over time blocks using 'this' function to determine which block are past, present and future
        $(".time-block").each(function () {
            var timeBlock = parseInt($(this).attr("id").split("hour")[1]);

            if (timeBlock === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");

            } else if 
            (timeBlock < currentTime) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present"); 

            } else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
        })
    }

    // Get item from local storage if any
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeLoop();
})