/*
  new XMLHttpRequest () is used to create a new XHR object.
  xhr.open is used to set the request method and URL.
  xhr.responseType automatically parses the JSON response body into JS objects
  xhr.addEventListener() is used to execute a function when the response is eventually loaded
  xhr.send() is used to actually send the request to the server at the URL specified in xhr.open()
  xhr.status is used to read the HTTP status code of the response message
  xhr.response is used to get the body of the HTTP response once it has been converted from a JSON string to JS objects.
*/
function getPokemonData(name) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/' + name);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    console.log(xhr.status);
    console.log(xhr.response);
  });
  xhr.send();
}

getPokemonData('cubone');
