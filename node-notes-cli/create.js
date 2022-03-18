const fs = require('fs');
const JSONdata = require('./data.json');
const id = JSONdata.nextId;
const userNote = process.argv[3];

module.exports.create = () => {
  /*
  if the userInput is create we want to create a new note and add it to
  data.json as the next note in the note object of the greater object
  get the current value of the nextId property of the parsedData object
  the parsedData object's note object will have a new property and value
  the new property will be the value nextId value and the value will be
  the userNote which the user typed in
  */
  JSONdata.notes[id] = userNote;
  JSONdata.nextId++;
  const newNote = JSON.stringify(JSONdata, null, 2);
  fs.writeFile('data.json', newNote, 'utf8', err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};
