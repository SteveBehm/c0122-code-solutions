var $letters = document.querySelectorAll('span');
window.addEventListener('keydown', handleKeyDown);

var index = 0;
function handleKeyDown(event) {
  if (event.key === $letters[index].textContent) {
    index++;
  }

}
