var libraryArr = [
  {
    isbn: '0001',
    title: 'Artemis',
    author: 'Andy Weir'
  },
  {
    isbn: '0002',
    title: 'The Martian',
    author: 'Andrew Weir'
  },
  {
    isbn: '0003',
    title: 'Project Hail Mary',
    author: 'Andrew Weird'
  }
];
console.log('my library of books:', libraryArr);
console.log('type of library:', typeof libraryArr);

var libraryString = JSON.stringify(libraryArr);
console.log('JSON library of books:', libraryString);
console.log('type of JSON library:', typeof libraryString);

var student = '{"Number id": 3731, "String name": "Steve"}';
console.log('JSON string:', student);
console.log('JSON string type of:', typeof studentJSON);

var studentObj = JSON.parse(student);
console.log('student JS object:', studentObj);
console.log('student JS object type of:', typeof studentObj);
