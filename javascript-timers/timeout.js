var $header = document.querySelector('.message');

function changeHeader() {
  $header.textContent = 'Hello There';
}

setTimeout(changeHeader, 2000);
