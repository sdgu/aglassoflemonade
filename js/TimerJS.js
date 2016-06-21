//window.onload = function () {
  


  var seconds = 00; 
  var tens = 00; 
  var minutes = 00;



  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var appendMinutes = document.getElementById("minutes");



  var Interval ;



  function startTimer()
  {

    tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59)
    {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
  }

  function start()
  {
    
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    Interval = setInterval(startTimer, 10);

  }

  function stop()
  {

    clearInterval(Interval);
  }

  function reset()
  {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  }


function deleteCookie(key)
{
  // Delete a cookie by setting the date of expiry to yesterday
  date = new Date();
  date.setDate(date.getDate() -1);
  document.cookie = escape(key) + '=;expires=' + date;
}

function deleteAllCookies() {

   
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}


window.onload = function()
{
  start();
  alert("test");
}

/*

  var Timer = (function()
  {
    return
    {
      settings:
      {

      }
      start: function()
      {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
      }

      stop: function()
      {
        clearInterval(Interval);
      }

      startTimer: function()
      {
        tens++; 
    
    if(tens < 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }

    if (seconds > 59)
    {
      console.log("minutes");
      minutes++;
      appendMinutes.innerHTML = "0" + minutes;
      seconds = 0;
      appendSeconds.innerHTML = "0" + 0;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
      }

    }






  })

  

  

  /* buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
  	seconds = "58";
    minutes = "00";
    appendTens.innerHTML = tens;
  	appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
  }
  */
   
  
  
  //}


