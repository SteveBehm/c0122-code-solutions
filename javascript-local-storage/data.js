/* exported todos */
window.addEventListener('beforeunload', handleBeforeUnload);
var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

function handleBeforeUnload(event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
  if (previousTodosJSON !== null) {
    todos = JSON.parse(previousTodosJSON);
  }
}
