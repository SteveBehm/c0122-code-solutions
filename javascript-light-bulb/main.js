var $bodyColor = document.querySelector('body');

var $switch = true;
function lightBulb(event) {
  if ($switch) {
    $circle.className = 'circle light-bulb-on';
    $bodyColor.className = 'light-on';
  } else {
    $circle.className = 'circle';
    $bodyColor.className = '';
  }
  $switch = !$switch;
}

var $circle = document.querySelector('.circle');
$circle.addEventListener('click', lightBulb);
