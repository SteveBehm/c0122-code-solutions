const fs = require('fs');
const userInput = process.argv[2]; // this is the 'read' string the user will write on the command line
const userNote = process.argv[3];
const editedNote = process.argv[4];

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
  } else if (userInput.toLowerCase() === 'create') {
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
  } else if (userInput.toLowerCase() === 'update') {
    /*
    when a user uses the word update and gives us the number of the note they wish to update
    we will grab that note and alter it with their new note input
    */
    for (const property in parsedData.notes) {
      if (userNote.toString() === property) {
        parsedData.notes[property] = editedNote;
        const revisedNote = JSON.stringify(parsedData, null, 2);
        fs.writeFile('data.json', revisedNote, 'utf-8', err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
        });
      }
    }
  } else if (userInput.toLowerCase() === 'delete') {
    /*
    when a user uses the word delete and gives us the number of the note they
    wish to delete. Delete that note from the data.json file and don't
    alter the nextId value.
    */
    for (const property in parsedData.notes) {
      if (userNote.toString() === property) {
        delete parsedData.notes[property];
        const currentNotes = JSON.stringify(parsedData, null, 2);
        fs.writeFile('data.json', currentNotes, 'utf-8', err => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
        });
      }
    }
  } else if (err) {
    console.error(err);
    process.exit(1);
  }
}
);
