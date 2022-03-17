const fs = require('fs');
const userInput = process.argv[2]; // this is the 'read' string the user will write on the command line
const userNote = process.argv[3];

// we want to read the data from the data.json file
fs.readFile('data.json', 'utf8', (err, data) => {
  // the data.json file is still in the json string format
  // parsing the data will and storing it in an object will allow
  // me to work with the data as the object parsedData
  const parsedData = JSON.parse(data);
  if (userInput.toLowerCase() === 'read') {
    // we want to display each property and its value
    for (const property in parsedData.notes) {
      console.log(`${property}: ${parsedData.notes[property]}`);
    }
  } else if (userInput === 'create') {
    /*
    if the userInput is create we want to create a new note and add it to
    data.json as the next note in the note object of the greater object
    get the current value of the nextId property of the parsedData object
    the parsedData object's note object will have a new property and value
    the new property will be the value nextId value and the value will be
    the userNote which the user typed in
    */
    const Id = parsedData.nextId;
    parsedData.notes[Id] = userNote;
    parsedData.nextId++;
    const newNote = JSON.stringify(parsedData, null, 2);
    fs.writeFile('data.json', newNote, 'utf-8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
  if (err) {
    console.error(err);
    process.exit(1);
  }
}
);
