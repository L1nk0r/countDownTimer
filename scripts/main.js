
function updateCountDown(){
   countDownEl.innerHTML = getStrFromTime();

   if (time === 0){
      renewCD();

   } else {
      time--;
   }
}

function startCD(){
   /* btnStartEl.classList.add("hidden"); */
   timerID = setInterval(updateCountDown, 1000);
}

function stopCD(){
   btnStopEl.classList.toggle("stopped");
   
   
   if (timerID === null){
      timerID = setInterval(updateCountDown, 1000);
   } else {
      clearInterval(timerID);
      timerID = null;
   }
}

function renewCD(){
   clearInterval(timerID);

   let arrTime = inputTime.value.split(':');
   time = Number(arrTime[0]) * 60 + Number(arrTime[1]);

   console.log(arrTime);
   
   countDownEl.innerHTML = getStrFromTime();
   
}

function getStrFromTime(){
   const minutes = Math.floor(time / 60);
   let seconds = time % 60;

   seconds = seconds < 10 ? "0" + seconds : seconds;

   return `${minutes}:${seconds}`;
}

const countDownEl = document.getElementById("count_down");
const inputTime = document.getElementById("inputTime");

const btnStartEl = document.getElementById("startCountDown");
const btnStopEl = document.getElementById("stopCountDown");
const btnRenewEl = document.getElementById("renewCountDown");

btnStartEl.addEventListener("click", function(){startCD()});
btnStopEl.addEventListener("click", function(){stopCD()});
btnRenewEl.addEventListener("click", function(){renewCD()});

let timerID = null;

let time = 15;

countDownEl.innerHTML = getStrFromTime();