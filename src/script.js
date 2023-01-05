//----------variables----------
let time;

let seconds;
let minutes;
let hours;

let i1 = document.getElementById('inputHours');
let i2 = document.getElementById('inputMinutes');
let i3 = document.getElementById('inputSeconds');
let e = document.getElementById('error');
let f = document.getElementById('startTimer');

let interval;

stopFunction();

//----------functions----------

//reset all elements
function stopFunction() {
  f.className = 'startTimer';
  f.innerHTML = 'start';
  f.setAttribute('onclick', 'buttonStart()');

  clearInterval(interval);

  i1.value = '00';
  i2.value = '00';
  i3.value = '00';
  throw new Error('Here we stop');
}

//catches variables from form
function buttonStart() {
  f.className = 'stopTimer';
  f.innerHTML = 'stop';
  f.setAttribute('onclick', 'stopFunction()');

  let m1 = Math.floor(
    parseInt(document.getElementById('inputHours').value) * 60 * 60
  );
  let m2 = Math.floor(
    parseInt(document.getElementById('inputMinutes').value) * 60
  );
  let m3 = Math.floor(parseInt(document.getElementById('inputSeconds').value));

  time = m1 + m2 + m3;

  if (time <= 0) {
    stopFunction();
  }

  interval = setInterval(startTimer, 1000);
}

//main function
function startTimer() {
  seconds = Math.floor(time % 60);
  minutes = Math.floor((time / 60) % 60);
  hours = Math.floor((time / (60 * 60)) % 24);

  //if seconds/minutes below 0 prepend 0
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  //Ends the timer at 0
  if (time <= 0) {
    clearInterval(interval);
    stopFunction();
  }
  //output

  i1.value = hours;
  i2.value = minutes;
  i3.value = seconds;
  time--;
}
