
var $userList = document.querySelector('#user-list');

var newXHR = new XMLHttpRequest();
newXHR.open('GET', 'https://jsonplaceholder.typicode.com/users');
newXHR.responseType = 'json';
newXHR.addEventListener('load', function () {
  console.log('newXHR status:', newXHR.status);
  console.log('newXHR response:', newXHR.response);
  for (var i = 0; i < newXHR.response.length; i++) {
    var $userListItem = document.createElement('li');
    $userListItem.textContent = newXHR.response[i].name;
    $userList.appendChild($userListItem);
  }
});
newXHR.send();
