var $letters = document.querySelectorAll('span');

var index = 0;
function handleKeyDown(event) {
  if (event.key === ' ' && event.key === $letters[index].textContent) {
    $letters[index].className = '';
    $letters[index + 1].className = 'normal';
    index++;
  } else if (event.key === $letters[index].textContent) {
    $letters[index].className = 'correct';
    $letters[index + 1].className = 'normal';
    index++;
  } else if (event.key !== $letters[index].textContent) {
    $letters[index].className = 'incorrect';
  }
}
window.addEventListener('keydown', handleKeyDown);
