// Reference to import DOM elelments

var $timeDisplayEl = $("#time-display");
var $eventInputEl = $("#event-input");
var $saveBtnEl = $(".saveBtn");

var newEvent = localStorage.getItem("event-name");
$eventInputEl.text(newEvent);

// Displays the current date and time
$timeDisplayEl.text(moment().format("dddd MMM DD, YYYY [at] hh:mm:ss a"));

$saveBtnEl.on("click", function () {
  var eventTime = $(this).parent().attr("id");
  var textValue = $(this).siblings("#event-input").val();
  localStorage.setItem(eventTime, textValue);
  console.log(eventTime + textValue + "Setting values");
});

function refreshPage() {
    $eventInputEl.each(function () {
    var eventTime = $(this).parent().attr("id");
    var textValue = localStorage.getItem(eventTime);

    if(textValue !== null){
       $(this).val(textValue);
       /*  $(this).siblings(".description").val(textValue); */
    }
    console.log(eventTime + textValue + "Getting values");
  });
}
refreshPage();
