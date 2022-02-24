// code for event listener when you click the forward arrow

// array to hold the image files will later be used to switch the value
// of the src attribute
var imgArray = [];
imgArray[0] = 'images/025.png';
imgArray[1] = 'images/001.png';
imgArray[2] = 'images/004.png';
imgArray[3] = 'images/007.png';
imgArray[4] = 'images/039.png';

var $img = document.querySelector('img');
var $iconForward = document.querySelector('.forward');
// index variable to use in forward, backward click events as well
// as the setInterval function
var currentIndex = 0;

/*
If the current index is equal to the last index of the imgArray
set the current index to zero to go back to the first image
then set the img src attribute in the DOM to the value of imgArray[0]
If the current index is not the last index in the array
increment the current index to go to the next index
set the img src attribute in the DOM to the new currentIndex that has
has been incremented
changeImg function is then called to switch the color of the circle icons
finally call the addEventListener method on the forward icon to execute
the forward click function if it is clicked
*/
function forwardClick(event) {
  if (currentIndex === imgArray.length - 1) {
    currentIndex = 0;
    $img.setAttribute('src', imgArray[0]);
  } else if (event.target === $iconForward) {
    currentIndex++;
    $img.setAttribute('src', imgArray[currentIndex]);
  }
  changeImg(currentIndex);
}
$iconForward.addEventListener('click', forwardClick);

// code for event listener when click the backward arrow

/*
If the current index is equal to the first index of the imgArray
set the current index to the last index to go to the last image
then set the img src attribute in the DOM to the value of imgArray[4]
If the current index is not the first index in the array
decrement the current index to go to the previous index
set the img src attribute in the DOM to the new currentIndex that has
has been decremented
changeImg function is then called to switch the color of the circle icons
finally call the addEventListener method on the backward icon to execute
the backward click function if it is clicked
*/
var $iconBackward = document.querySelector('.backward');

function backwardClick(event) {
  if (currentIndex === 0) {
    currentIndex = imgArray.length - 1;
    $img.setAttribute('src', imgArray[4]);
  } else if (event.target === $iconBackward) {
    currentIndex--;
    $img.setAttribute('src', imgArray[currentIndex]);
  }
  changeImg(currentIndex);
}
$iconBackward.addEventListener('click', backwardClick);

// code for pictures cycling through on 3 second interval

/*
If the current index is equal to the last index in the imgArray
then set the current index to 0 to go back to the first img
if it isn't
increment the current index so that the img value for the next
picture can be set as the img src attribute value
changeImg function is called with the currentIndex argument
in order to change the color of the circle as the img changes
finally call the set interval function for the pokemon carousel
function with a 3sec delay between img changes
*/
function pokemonCarousel() {
  if (currentIndex === imgArray.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  changeImg(currentIndex);
  $img.setAttribute('src', imgArray[currentIndex]);
}
setInterval(pokemonCarousel, 3000);

// Code for event listeners when you click on the circle icons

/*
for the handleCircleClick event we need to perform event delegation
we need to query the dom for the parent element of all the icons as
well as query all the circle icons
set the data view attribute value of the event target to a new variable
make the value of that variable an integer so that it can be used as
an index for the change img function
this will allow us to change the color of the dot if it is clicked and
the value of the data view on the target matches the circle icons data
view value
set the src attribute of the img to the dataViewIndex of the img array
finally call the addEventListener method on the parent div element for
the icon to run the the handle circle click function when a circle is
clicked
*/
var $circleIconDiv = document.querySelector('.progress-icons');
var $circleIcons = document.querySelectorAll('.circle-icon');

function handleCircleClick(event) {
  var $iconAttribute = event.target.getAttribute('data-view');
  var dataViewIndex = parseInt($iconAttribute);
  changeImg(dataViewIndex);
  $img.setAttribute('src', imgArray[dataViewIndex]);
}
$circleIconDiv.addEventListener('click', handleCircleClick);

// function to change the circle icons color

/*
define a function with an index value as a parameter
loop through the circle icons nodeList that was queried from the dom
if the idex parameter is strictly equal to the integer version of the
circle icons data view attribute value
change the current circle icon's className to the dark circle
if the index is not equal to the integer version of the current
icons data view attribute value
change the circle icons class name to the white circle icon
*/
function changeImg(index) {
  for (var i = 0; i < $circleIcons.length; i++) {
    if (index === parseInt($circleIcons[i].getAttribute('data-view'))) {
      $circleIcons[i].className = 'fas fa-circle circle-icon';
    } else {
      $circleIcons[i].className = 'far fa-circle circle-icon';
    }
  }
}
