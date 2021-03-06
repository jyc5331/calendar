//global variables and document elements
document.querySelector("#currentDay").innerHTML = formatAMPM();
var timeBlocks = document.querySelectorAll(".timeblock");
var saveBtns = document.querySelectorAll(".saveBtnImg");
var timeBlockData = {
  9: "",
  10: "",
  11: "",
  12: "",
  13: "",
  14: "",
  15: "",
  16: "",
  17: "",
};

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
    console.log(documentHour);
    if (currentHour > documentHour) {
      timeBlock.classList.add("past");
    } else if (currentHour < documentHour) {
      timeBlock.classList.add("future");
    } else {
      timeBlock.classList.add("present");
    }
  });
}

function saveTasks(saveBtn) {
  //event.preventDefault();
  var clickedTimeBlock = saveBtn.dataset.time;
  var inputText = document.querySelector("#hour-" + clickedTimeBlock).value;
  console.log(inputText);
  var timeBlockObject = JSON.parse(localStorage.getItem("timeBlockStorage"));
  timeBlockObject[clickedTimeBlock] = inputText;
  localStorage.setItem("timeBlockStorage", JSON.stringify(timeBlockObject));
}
//without this if check, it would set localstorage value to empty string on every refresh
if (localStorage.getItem("timeBlockStorage") === null) {
  localStorage.setItem("timeBlockStorage", JSON.stringify(timeBlockData));
  console.log("is this thing even working?");
}
//populate the page with data from local storage timeBlocks.foreach use value =
function populatePage() {
  if (localStorage.getItem("timeBlockStorage") !== null) {
    var storedData = JSON.parse(localStorage.getItem("timeBlockStorage"));
    timeBlocks = storedData;
    for (const time in timeBlocks) {
      console.log(`${time}: ${timeBlocks[time]}`);
      document.querySelector("#hour-" + time).value = timeBlocks[time];
    }
  }
  //access timeBlockStorage and parse
  //fill timeBlocks with the parsed data...
}

//event handlers and function calls
changeBackgroundColor();

saveBtns.forEach(function (saveBtn) {
  saveBtn.addEventListener("click", function (event) {
    saveTasks(saveBtn);
  });
});
saveBtns.forEach(function (saveBtn) {
  saveBtn.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      saveTasks(saveBtn);
      console.log("still working");
    }
  });
});
timeBlocks.forEach(function (timeBlock) {
  timeBlock.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      saveTasks(timeBlock);
    }
  });
});

populatePage();
