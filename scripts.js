const countdownTimer = document.querySelector("#time");
const countdownDater = document.querySelector("#date");
const deadlineDate = new Date("10.17.2019 20:00");


function calculateCountDown() {
  let currentDate = new Date();

  let msLeft = deadlineDate - currentDate;
  let hoursLeft = msLeft / 1000 / 60 / 60
  let minutesLeft = hoursLeft % 1 * 60
  let secondsLeft = minutesLeft % 1 * 60

  let daysLeft = Math.round(hoursLeft / 24)
  let weeksLeft =Math.round(daysLeft / 7)
  let secondsLeftStr =  Math.round(secondsLeft).toLocaleString(undefined,{minimumIntegerDigits: 2})
  let minutesLeftStr =  Math.round(minutesLeft).toLocaleString(undefined,{minimumIntegerDigits: 2})
  let hoursLeftStr =  Math.round(hoursLeft).toLocaleString(undefined,{minimumIntegerDigits: 2})
  countdownTimer.innerHTML = `${hoursLeftStr}:${minutesLeftStr}:${secondsLeftStr}`
  countdownDater.innerHTML = `${weeksLeft} <small>weeks</small>, ${daysLeft} <small>days</small>`
}

calculateCountDown()
setInterval(() => calculateCountDown(), 1000);

document.addEventListener( 'visibilitychange' , () => {
    if (!document.hidden) {
        calculateCountDown();
    }
}, false );
