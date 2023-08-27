const startButton = document.getElementById("stopwatch_start");
const pauseButton = document.getElementById("stopwatch_pause");
const resetButton = document.getElementById("stopwatch_reset");
const timeHours = document.getElementById("stopwatch_time_hours");
const timeMinutes = document.getElementById("stopwatch_time_minutes");
const timeSeconds = document.getElementById("stopwatch_time_seconds");
let time = 0,
  timer;
function logTime() {
  const hoursElapsed = parseInt(time / 3600);
  const minutesElapsed = parseInt((time % 3600) / 60);
  const secondsElapsed = parseInt(time % 60);
  timeHours.innerHTML = hoursElapsed.toString().padStart(2, "0");
  timeMinutes.innerHTML = minutesElapsed.toString().padStart(2, "0");
  timeSeconds.innerHTML = secondsElapsed.toString().padStart(2, "0");
}

startButton.onclick = function start() {
  timer = setInterval(() => {
    time++;
    logTime();
  }, 1000);
  this.classList.add("d-none");
  pauseButton.classList.remove("d-none");
};

pauseButton.onclick = function pause() {
  if (timer != undefined) clearInterval(timer);
  timer = undefined;
  this.classList.add("d-none");
  startButton.classList.remove("d-none");
};

resetButton.onclick = function reset() {
  time = 0;
  logTime();
  if (timer != undefined) clearInterval(timer);
  timer = undefined;
  startButton.classList.remove("d-none");
  pauseButton.classList.add("d-none");
};
