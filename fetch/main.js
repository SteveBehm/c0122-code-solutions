fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failed!', err));

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  // the then method of the previous return from the then method is being called
  // with an anonymous arrow function
  .then(data => console.log(data))
  .catch(err => console.error('Fetch failed!', err));
