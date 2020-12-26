//global variables and document elements
document.getElementById("currentDay").innerHTML = formatAMPM();

//date function 
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

//changing background color based on time using Date and getHours

function changeBackgroundColor (){
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  var timeBlocks = document.querySelector("#time-blocks")
  console.log(currentHour);
};


//local storage code

//  when the user clicks the save icon tasks are saved to local storage

//event handlers and function calls 
changeBackgroundColor();
