const TIME_LIMIT = 20;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;

function formatTimeLeft(time) {
const minutes = Math.floor(time / 60);
let seconds = time % 60;
if (seconds < 10) {
    seconds = `0${seconds}`;
}
return `${minutes}:${seconds}`;
}

//document.getElementById("base-timer-label").innerHTML = 
//`${formatTimeLeft(timeLeft)}`;

function startTimer() {
    timerInterval = setInterval(() => {
        timePassed = timePassed += 1;
        timeLeft = TIME_LIMIT -timePassed;

        document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
    },1000)
}

startTimer();



const COLOR_CODES = {
    info: {
      color: "green"
    }
  };
  
  let remainingPathColor = COLOR_CODES.info.color;
  function calculateTimeFraction() {
    return timeLeft / TIME_LIMIT;
  }
      
  // Update the dasharray value as time passes, starting with 283
  function setCircleDasharray() {
    const circleDasharray = `${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} 283`;
      document.getElementById("base-timer-path-remaining")
      
      document.setAttribute("stroke-dasharray", circleDasharray);
  }
  function startTimer() {
    timerInterval = setInterval(() => {
      timePassed = timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      document.getElementById("base-timer-label").innerHTML = formatTimeLeft(timeLeft);
      setInterval();
      setCircleDasharray();
    }, 1000);
  }
startTimer();