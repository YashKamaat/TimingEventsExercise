// TIMING EVENTS EXERCISE

// 1. Use a setTimeout method to have "Hi" displayed as a p element/tag inside the div with the id of "first" 1 second after the page loads.
//=========================================
setTimeout(() => {
    const div1 = document.querySelector(`#first`);
    const p1 = document.createElement(`p`);
    p1.innerText = `Hi`;
    div1.append(p1);
  }, 1000);
  //=========================================
  // 2. Use nested setTimeout methods to complete the following: Have the text of "One" displayed as a p element/tag inside the div with the id of "timeout-nesting" 2 seconds after the page loads. Also, below the "One" p element/tag, have the text of "Two" also displayed as a p element/tag inside the same div 3 seconds after the page loads.
  //=========================================
  setTimeout(() => {
    const div2 = document.querySelector(`#timeout-nesting`);
    const p2 = document.createElement(`p`);
    p2.innerText = `One`;
    div2.append(p2);
    // Nested setTimeout
  setTimeout(() => {
    const p3 = document.createElement(`p`);
    p3.innerText = `Two`;
    div2.append(p3);
  }, 1000);
}, 2000);
//===========================================
  // 3a.  Use a setInterval method to display a counter in the console that starts at 1 and continues going up one number at a time every second.
  //==========================================
  let counter = 1;
  const time = setInterval(() => {
    console.log(counter);
    counter++;
  }, 1000);
  //===========================================
  // 3b. Have the "STOP" button set up so that when it is pressed the setInterval method created in 3a will stop continuously running (HINT: Need to create a variable).
//===========================================

  const stop = document.querySelector(`button`);
  stop.addEventListener(`click`, () => {
    clearInterval(time);
    });
//===========================================

  //BONUS
//4
//===========================================
const countdown = document.querySelector(`#countdown`);
const p4 = document.createElement(`p`);
p4.innerText = `2:00`;
countdown.append(p4);

const startTime = 2;
let times = startTime * 60;
function updateCountdown(){
  const minutes = Math.floor(times / 60);
  let seconds = times % 60;
  seconds = (seconds < 10) ? `0` + seconds : seconds;
  countdown.innerText = `${minutes} : ${seconds}`;
  times--;
}

setInterval(() => {
  updateCountdown();
  if (times <= 0){
    countdown.innerText = `TIME IS UP`;
  }
}, 1000);
//===========================================
