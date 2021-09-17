// Reference to import DOM elelments

var $timeDisplayEl = $("#time-display");
var $eventInputEl = $("#event-input");
var $saveBtnEl = $("#save-button");
var $hourDisplayEl = $('#hour-display');

var newEvent = localStorage.getItem("event-name");
$eventInputEl.text(newEvent);

function displayTime() {
    var rightNow = moment().format('dddd MMM DD, YYYY [at] hh:mm:ss a');
    $timeDisplayEl.text(rightNow);
}

setInterval(displayTime, 1000);

/* $saveBtnEl.click( function(){
    alert($eventInputEl.val());
    localStorage.setItem("event-name",$eventInputEl.val());
     return;
    });



    alert(localStorage.getItem("event-name"));
    var savedEvent = localStorage.getItem("event-name");
    $eventInputEl.text(savedEvent);

console.log($eventInputEl.val()); */
/* $('#myTextbox').on('input', function() {
    // do something
}); */



$saveBtnEl.on('click', function(){

    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = $(this).val();
       localStorage.setItem(id, value);

    });   
});

$('#load').on('click', function(){
    $('input[type="text"]').each(function(){    
        var id = $(this).attr('id');
        var value = localStorage.getItem(id);

        $(this).val(value);

    }); 
});