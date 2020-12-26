// function for displaying Date at top of calendar

document.getElementById("currentDay").innerHTML = formatAMPM();

function formatAMPM() {
  var d = new Date(),
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  return days[d.getDay()] + " " + months[d.getMonth()] + " " + d.getDate();
}

//changing background color based on time using parseInt and moment
//browser registers moment as undefined so function will not run

var currentDate = new Date();
var currentHour = currentDate.getHours();
console.log(currentHour);

$(".hour").each(function () {
  var inputTime = parseInt($(this).data("time"));

  if (currentHour === inputTime) {
    $(this).addClass("present");
  } else if (currentHour > inputTime) {
    $(this).addClass("past");
  } else if (currentHour < inputTime) {
    $(this).addClass("future");
  }
});

//button adjustments
document.querySelector(".saveBtn");
buttonEl.addEventListener("click", function () {
  alert("button clicked");
});

//local storage code

//  when the user clicks the save icon tasks are saved to local storage

/*  localstorage, make it so that when the save icon is clicked, contents of userInput are stored to local server. should involve set and get 
      window.onbeforeunload = function() {
    localStorage.setItem("", $('#userInput').val());
      
      */
