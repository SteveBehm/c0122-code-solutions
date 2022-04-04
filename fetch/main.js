fetch('http://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error);

fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error);
