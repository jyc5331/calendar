      // function for displaying Date at top of calendar

document.getElementById("currentDay").innerHTML = formatAMPM();

      function formatAMPM() {
        var d = new Date(),
          months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
          days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate();
      }

      // variables for changing color in rows based on time
      var row = Array.from(document.querySelectorAll(".row"))
      var today = new Date();
      var time = today.getHours()
      console.log(time);
      console.log(row);

      //local storage code
      $('.saveBtn').on('click', function(event){
    
      });

     // moment().hour(Number); was suggested by Chris to get time background shift up and running 

          /* HELP localstorage, make it so that when the save icon is clicked, contents of userInput are stored to local server
      window.onbeforeunload = function() {
    localStorage.setItem("", $('#userInput').val());
      }
      */
