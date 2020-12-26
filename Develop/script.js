//global variables and document elements
document.querySelector("#currentDay").innerHTML = formatAMPM();
var timeBlocks = document.querySelectorAll(".timeblock");
var saveBtn = document.querySelector(".saveBtnImg");

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

function changeBackgroundColor() {
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  console.log(timeBlocks);
  console.log(currentHour);
  timeBlocks.forEach(function (timeBlock, i) {
    console.log(timeBlock.id);
    var documentHour = parseInt(timeBlock.id.match(/[0-9]/g).join(""));
    // or try this parseInt(timeBlock.id.slice(5));
    console.log(documentHour);
    if (currentHour > documentHour) {
      timeBlock.classList.add("past");
    }
  });
}

function saveTasks() {
  //event.preventDefault();
  console.log("saveTasks function is running");
  var unsavedContent = timeBlocks.textContent;
  console.log(unsavedContent);
  localStorage.setItem("content", unsavedContent);
}

//local storage code

//event handlers and function calls
changeBackgroundColor();
saveTasks();
