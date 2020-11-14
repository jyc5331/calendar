document.getElementById("currentDay").innerHTML = formatAMPM();
      // function for displaying Date at top of calendar
      function formatAMPM() {
        var d = new Date(),
          months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
          days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate();
      }
      // function for changing color in rows based on time, time works!
      var today = new Date();
      var time = today.getHours()
      console.log(time);


          /* HELP localstorage, make it so that when the save icon is clicked, contents of userInput are stored to local server
      window.onbeforeunload = function() {
    localStorage.setItem("", $('#userInput').val());
      }
      */
