let count = 3;

const countDownId = setInterval(() => {
  if (count > 0) {
    console.log(count);
    count--;
  } else if (count === 0) {
    console.log('Blast Off!');
    clearInterval(countDownId);
  }
}, 1000);
