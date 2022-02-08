function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
  return handleClick;
}

var $clicked = document.querySelector('.click-button');
$clicked.addEventListener('click', handleClick, false);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
  return handleMouseover;
}

var $mouseHover = document.querySelector('.hover-button');
$mouseHover.addEventListener('mouseover', handleMouseover, false);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
  return handleDoubleClick;
}

var $doubleClicked = document.querySelector('.double-click-button');
$doubleClicked.addEventListener('dblclick', handleDoubleClick, false);
