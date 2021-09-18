// Reference to import DOM elelments

var $timeDisplayEl = $("#time-display");
var $eventInputEl = $("#event-input");
var $saveBtnEl = $(".saveBtn");
var $hourEl = $(".hour");
var $timeBlockEl = $(".time-block");

// Populates data stored in local storage on page reload
getSavedEvents();
checkIfCurHour(); // Checks if the time block is in the past/present/future

// Displays the current date and time
$timeDisplayEl.text(moment().format("dddd MMM DD, YYYY [at] hh:mm:ss a"));

// Each time save button is clicked the value in the text area and the corresponding id is saved to local storage
$saveBtnEl.on("click", function () {
    var eventTime = $(this).parent().attr("id");
    var textValue = $(this).siblings("#event-input").val();
    localStorage.setItem(eventTime, textValue);
});

function getSavedEvents() {
    $hourEl.each(function () {
        var eventTime = $(this).parent().attr("id");
        var textValue = localStorage.getItem(eventTime);
        if (textValue !== null) {
            $(this).siblings("#event-input").text(textValue);
        }
    });
}

// Check if hour is current, past or future
function checkIfCurHour() {
    var currHour = "hour" + moment().hours();
    $timeBlockEl.each(function () {
        var blockHour = $(this).attr("id")

        if (blockHour > currHour) {
            $(this).removeClass("present");
            $(this).addClass("past");
            $(this).addClass("future");
        } else if (blockHour < currHour) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        } else if (blockHour === currHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}