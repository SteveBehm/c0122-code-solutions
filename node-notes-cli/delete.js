const fs = require('fs');
const JSONdata = require('./data.json');
const userNote = process.argv[3];

module.exports.delete = () => {
  /*
  when a user uses the word delete and gives us the number of the note they
  wish to delete. Delete that note from the data.json file and don't
  alter the nextId value.
  */
  if (!JSONdata.notes[userNote]) {
    console.log('the notes with this id does not exist.');
  } else {
    delete JSONdata.notes[userNote];
    const currentNotes = JSON.stringify(JSONdata, null, 2);
    fs.writeFile('data.json', currentNotes, 'utf8', err => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
    });
  }
};
