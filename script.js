let timer;
let totalTime = 0;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const hoursInput = document.getElementById("hours");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);

function startTimer() {
  if (isRunning) return;

  const hours = parseInt(hoursInput.value) || 0;
  const minutes = parseInt(minutesInput.value) || 0;
  const seconds = parseInt(secondsInput.value) || 0;

  totalTime = hours * 3600 + minutes * 60 + seconds;

  if (totalTime <= 0) return;

  isRunning = true;
  timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  totalTime = 0;
  timerDisplay.textContent = "00:00:00";
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}

function updateTimer() {
  if (totalTime <= 0) {
    clearInterval(timer);
    isRunning = false;
    return;
  }

  totalTime--;

  const hours = Math.floor(totalTime / 3600);
  const minutes = Math.floor((totalTime % 3600) / 60);
  const seconds = totalTime % 60;

  timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num < 10 ? "0" + num : num;
}
