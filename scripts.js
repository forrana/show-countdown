const countdownTimer = document.querySelector("#time");
const countdownDater = document.querySelector("#date");
const deadlineDate = new Date("10/17/2019");
deadlineDate.setHours(20);


function calculateCountDown() {
  let currentDate = new Date();

  let msLeft = deadlineDate - currentDate;
  let weeksLeft = msLeft / 1000 / 60 / 60 / 24 / 7
  let daysLeft = weeksLeft % 1 * 7
  let hoursLeft = daysLeft % 1 * 24
  let minutesLeft = hoursLeft % 1 * 60
  let secondsLeft = minutesLeft % 1 * 60

  let secondsLeftStr = ("" + Math.round(secondsLeft)).padStart(2, "0")
  let minutesLeftStr = ("" + Math.round(minutesLeft)).padStart(2, "0")
  let hoursLeftStr =  ("" + Math.round(hoursLeft)).padStart(2, "0")
  let daysLeftStr = Math.round(daysLeft)
  let weeksLeftStr = Math.round(weeksLeft)
  countdownTimer.innerHTML = `${weeksLeftStr} <small>weeks</small>, ${daysLeftStr} <small>days</small> ${hoursLeftStr}:${minutesLeftStr}:${secondsLeftStr}`
}

calculateCountDown()
setInterval(() => calculateCountDown(), 1000);

document.addEventListener( 'visibilitychange' , () => {
    if (!document.hidden) {
        calculateCountDown();
    }
}, false );
