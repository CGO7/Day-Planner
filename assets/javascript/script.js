//will need current time tracker for the header. project tracker mini project
var today = moment();
$("#currentDay").text(today.format("MMMM Do, YYYY, h:mm:ss a"));
var time = today
console.log(time);

var currentTime = document.querySelectorAll("textarea");
var hour = document.querySelectorAll("time").textContent;
// var d = new Date();

//will need a for loop to run through boxes and grey out boxes that are before current time
function colorChanger() {
if (hour < time) {
    currentTime.color = "#d3d3d3";

} else if (hour > today) {
  currentTime.color = "blue";

} else (hour === today) 
    currentTime.color = "red";
}
colorChanger();


// var btn = document.querySelectorAll("saveBtn");

// btn.forEach(function(button) {
//     button.addEventListener("click",function() {
//         var x = querySelectorAll("textarea").textContent;
//         console.log(x);
// })
// })
//will need save buttons on the right of the table to save user input. will have to use memory to keep input there
// plannerInput = document.getElementById("#textarea");
// document.getElementById("saveBtn").addEventListener("click", function() {
//     var x = document.getElementById("textarea").textContent;
//     console.log(x);
// })

var x = localStorage.getItem("value");
document.getElementById("textarea"),innerHTML = x;

$("button").on("click", function () {
    var value = $(this).prev().val();
    console.log(value);
    console.log($(this).attr("data-time"));
    // console.log($(this).prev());
    localStorage.setItem("value", value);

   
})



// document.getElementById("saveBtn1").addEventListener("click", function() {
//     var x = document.getElementById("textarea1").textContent;
//     console.log(x);
// })


//will need input area for user to write events:  "i did this in HTML"

//*bonus add an alert pop up for any events coming up in the hour