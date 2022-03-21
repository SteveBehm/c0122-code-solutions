const express = require('express');
const appObj = express();
const dataJSON = require('./data.json');
const notesObj = dataJSON.notes;

appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening.');
});

appObj.get('/api/notes', (req, res) => {
  const gradeArr = [];
  if (dataJSON === {}) {
    res.json(gradeArr);
  }
  for (const property in dataJSON.notes) {
    gradeArr.push(dataJSON.notes[property]);
  }

  res.json(gradeArr);
});

appObj.get('/api/notes/:id', (req, res) => {
  const targetNoteId = req.params.id;

  if (!Number.isInteger(parseInt(targetNoteId)) || parseInt(targetNoteId) <= 0) {
    const errObj = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errObj);

  } else if (notesObj[targetNoteId] === undefined) {
    const noId = {
      error: `cannot find note with id ${targetNoteId}`
    };
    res.status(404).json(noId);
  } else {
    res.json(notesObj[targetNoteId]);
  }
});
