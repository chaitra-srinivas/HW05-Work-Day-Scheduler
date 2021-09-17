// Reference to import DOM elelments

var $timeDisplayEl = $("#time-display");
var $eventInputEl = $("#event-input");
var $saveBtnEl = $(".saveBtn");
var $hourEl = $(".hour");

// Populates data stored in local storage on page reload
getSavedEvents();

// Displays the current date and time
$timeDisplayEl.text(moment().format("dddd MMM DD, YYYY [at] hh:mm:ss a"));

// Each time save button is clicked the value in the text area is and the corresponding id is saved to the local storage
$saveBtnEl.on("click", function () {
    var eventTime = $(this).parent().attr("id");
    var textValue = $(this).siblings("#event-input").val();
    localStorage.setItem(eventTime, textValue);
    console.log(eventTime + textValue + "Setting values");
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

