var $bodyColor = document.querySelector('body');

function lightBulb(event) {
  if ($circle.className === 'circle') {
    $circle.className = 'circle light-bulb-on';
    $bodyColor.className = 'body light-on';
  } else if ($circle.className === 'circle light-bulb-on') {
    $circle.className = 'circle';
    $bodyColor.className = '';
  }
}

var $circle = document.querySelector('.circle');
$circle.addEventListener('click', lightBulb);
