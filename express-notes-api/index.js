const express = require('express');
const appObj = express();
const fs = require('fs');
const dataJSON = require('./data.json');
const notesObj = dataJSON.notes;
const dataId = dataJSON.nextId;

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

appObj.use(express.json());

appObj.post('/api/notes', (req, res) => {
  const newNote = req.body;

  if (newNote.content === undefined) {
    const errObj = {
      error: 'content is a required field'
    };
    res.status(400).json(errObj);

  } else if (newNote.content !== undefined) {
    newNote.id = dataId;
    dataJSON.notes[dataId.toString()] = newNote;
    dataJSON.nextId++;
    const newNoteJSON = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', newNoteJSON, 'utf8', err => {
      if (err) {
        const postErr = {
          error: 'an unexpected error occurred.'
        };
        console.error(postErr);
        res.status(500).json(postErr);
      }
      res.status(201).send(newNote);
    });
  }
});

appObj.delete('/api/notes/:id', (req, res) => {
  const noteId = req.params.id;

  if (!Number.isInteger(parseInt(noteId)) || parseInt(noteId) <= 0) {
    const errObj = {
      error: 'id must be a positive integer'
    };
    res.status(400).json(errObj);
  } else if (dataJSON.notes[noteId] === undefined) {
    const noId = {
      error: `cannot find note with id ${noteId}`
    };
    res.status(404).json(noId);
  } else {
    delete dataJSON.notes[noteId];
    const currentNotes = JSON.stringify(dataJSON, null, 2);
    fs.writeFile('data.json', currentNotes, 'utf8', err => {
      if (err) {
        const postErr = {
          error: 'an unexpected error occurred.'
        };
        console.error(postErr);
        res.status(500).json(postErr);
      }
      res.sendStatus(204);
    });
  }
});
