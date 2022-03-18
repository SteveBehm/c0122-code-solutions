const fs = require('fs');
const JSONdata = require('./data.json');
const userNote = process.argv[3];
const editedNote = process.argv[4];

module.exports.update = () => {
  /*
  when a user uses the word update and gives us the number of the note they wish to update
  we will grab that note and alter it with their new note input
  */
  for (const property in JSONdata.notes) {
    if (userNote.toString() === property) {
      JSONdata.notes[property] = editedNote;
      const revisedNote = JSON.stringify(JSONdata, null, 2);
      fs.writeFile('data.json', revisedNote, 'utf8', err => {
        if (err) {
          console.error(err);
          process.exit(1);
        }
      });
    }
  }
};
