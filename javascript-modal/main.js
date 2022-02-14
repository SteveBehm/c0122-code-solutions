var $openClicked = document.querySelector('.open-button');
$openClicked.addEventListener('click', handleOpenClick);

function handleOpenClick(event) {
  document.querySelector('.bg-modal').style.display = 'flex';
}

var $noClicked = document.querySelector('.modal-button');
$noClicked.addEventListener('click', handleCloseClick);

function handleCloseClick(event) {
  document.querySelector('.bg-modal').style.display = 'none';
}
