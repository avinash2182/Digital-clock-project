function digitalclock() {
    
    let date = new Date(); 
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
  
    if (hours > 12) {
      hours = hours - 12;
    }  
    //assigning real time value to html elements
    let hrs = document.getElementById("hours");
    hrs.innerHTML = hours;
    let mins = document.getElementById("minutes");
    mins.innerHTML = minutes;
    let secs = document.getElementById("seconds");
    secs.innerHTML = seconds;
  }
  
  setInterval(() => {
    digitalclock();
  }, 1000);
  
  function newtiming() {
    let date = new Date(); 
    let hours = date.getHours();
  
    if (hours >= 12) {
      let ampm = document.getElementById("ampm");
      ampm.innerText = "PM";
    } else if (hours < 12) {
      let ampm = document.getElementById("ampm");
      ampm.innerHTML = "AM";
    }
  
    let greeting = document.getElementById("new-msg");
  
    if (hours >= 12 && hours < 16) {
      greeting.innerHTML = "GOOD AFTERNOON!!";
    }
    if (hours >= 16 && hours < 17) {
      greeting.innerHTML = "GOOD EVENING!!";
    }
    if (hours >= 17 && hours < 22) {
      greeting.innerHTML = "GOOD NIGHT!!";
    }
  
    let button = document.getElementById("set-alarm-btn");
    button.addEventListener("mouseover", function () {
      this.innerText = "Party time";
    });
    button.addEventListener("mouseout", function () {
      this.innerText = "Set Alarm";
    });
  
    button.addEventListener("click", function () {
      let date = new Date();
      let hours = date.getHours();
  
      let wakeUp = document.getElementById("wakeup");
      let lunch = document.getElementById("lunch");
      let nap = document.getElementById("nap");
      let night = document.getElementById("night");
  
      if (parseInt(wakeUp.value) === hours) {
        // console.log(wakeUp.key.value);
        document.getElementById("new-msg-2").innerHTML =
          "GRAB SOME HEALTHY BREAKFAST!!!";
        document.getElementById("morning-img").src = "./Component 30 – 1.svg"; 
  
      }
       else if (parseInt(lunch.value) === hours) {
        document.getElementById("new-msg-2").innerHTML = "LET'S HAVE SOME LUNCH";
        document.getElementById("morning-img").src = "./Component 31 – 1.svg";
      } 
      else if (parseInt(nap.value) === hours) {
        document.getElementById("new-msg-2").innerHTML =
          "STOP YAWNING, GET SOME TEA.. IT'S JUST EVENING";
        document.getElementById("morning-img").src = "./Component 32 – 1.svg";
      }
       else if (parseInt(night.value) === hours) {
        document.getElementById("new-msg-2").innerHTML =
          "CLOSE YOUR EYES AND GO TO SLEEP";
        document.getElementById("morning-img").src = "./Component 32 – 1.svg";
      }
  
      let timing = document.getElementsByClassName("time1");
  
      timing[0].innerText = wakeUp.options[wakeUp.selectedIndex].text;
      timing[1].innerText = lunch.options[lunch.selectedIndex].text;
      timing[2].innerText = nap.options[nap.selectedIndex].text;
      timing[3].innerText = night.options[night.selectedIndex].text;
    });
  }
  
  setInterval(() => {
    newtiming();
  }, 1000);