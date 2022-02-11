var $tabContainer = document.querySelector('.tab-container');
var $tabList = document.querySelectorAll('.tab');
var $viewList = document.querySelectorAll('.view');
$tabContainer.addEventListener('click', handleClick);

function handleClick(event) {

  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tabList.length; i++) {
    if ($tabList[i] === event.target) {
      event.target.className = 'tab active';
    } else {
      $tabList[i].className = 'tab';
    }
  }

  var $dataAttr = event.target.getAttribute('data-view');
  for (var j = 0; j < $viewList.length; j++) {
    if ($viewList[j].getAttribute('data-view') === $dataAttr) {
      $viewList[j].className = 'view';
    } else {
      $viewList[j].className = 'view hidden';
    }
  }
}
