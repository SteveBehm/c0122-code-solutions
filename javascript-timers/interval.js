var $countdown = document.querySelector('.countdown-display');

var counter = 4;
var countdownToEarth = setInterval(function countdownEarth() {
  counter--;
  $countdown.textContent = counter;
  if (counter === 0) {
    $countdown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countdownToEarth);
  }
}, 1000);
