// We want to be able to use express and this will allow us to
const express = require('express');
const appObj = express();
// we want to be able to manipulate the file system with the fs module
const fs = require('fs');
// We want to be able to use data from the data.json file
const dataJSON = require('./data.json');
// this is the notes object where the notes are held
const notesObj = dataJSON.notes;
const dataId = dataJSON.nextId;

// this will allow the server to listen for requests coming in
appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening.');
});

// this method will get the the data from the data.json object
// it will place all the note objects into an array
// then the server will send a json response of the array
// if there are no notes then the response will be an empty array
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

// this will be another get request but for a specific note
// req.params.id will be present if the client specified an id
// if the id is not a number or isn't above 0 then the server sends
// an error message with a specific error status
// if the client specifies an id that is not present the server
// sends an errose message with 404 status code
// if the user does specify and actual note id
// then the specific note is sent from the server
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

// Express.json parses incoming requests with JSON payloads
appObj.use(express.json());

// we need post a new note to the data.json file
/*
if the user doesn't put any content send an error message and status code
if the content is not underfined then we need to post the note
*/
appObj.post('/api/notes', (req, res) => {
  const newNote = req.body;

  if (newNote.content === undefined) {
    const errObj = {
      error: 'content is a required field'
    };
    res.status(400).json(errObj);

  } else if (newNote.content !== undefined) {
    // set the new notes id to the current value of nextId from data.json
    newNote.id = dataId;
    // put the new note into the correct spot in the notes object on the data.json file
    dataJSON.notes[dataId.toString()] = newNote;
    // increment the the nextId from the data.json file to prepare for the
    // note entry
    dataJSON.nextId++;
    // the new note is now part of data.json object and we need to
    // put it into a json string to send it
    const newNoteJSON = JSON.stringify(dataJSON, null, 2);

    // we want to write the newNote in json string form to the data.json file
    fs.writeFile('data.json', newNoteJSON, 'utf8', err => {

      if (err) {
        const postErr = {
          error: 'an unexpected error occurred.'
        };
        console.error(postErr);
        // if an error happens then the status 500 will be sent from the server
        res.status(500).json(postErr);
      }

      // this will send the new note back to the client and the created status code
      // we want to do this once the new note is written to data.json
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
    // we want to delete the note from the notes object at the client's
    // desired id
    delete dataJSON.notes[noteId];
    // then we want to put the updated data.json object into a JSON string
    const currentNotes = JSON.stringify(dataJSON, null, 2);

    // now we write the updated data.json object to the data.json file
    fs.writeFile('data.json', currentNotes, 'utf8', err => {

      if (err) {
        const postErr = {
          error: 'an unexpected error occurred.'
        };
        console.error(postErr);
        res.status(500).json(postErr);
      }

      // this will send the status to the client from the server
      // no body will be shown
      res.sendStatus(204);
    });
  }
});

appObj.put('/api/notes/:id', (req, res) => {
  // store the id the client is seeking to update
  // noteId will be a string
  const noteId = req.params.id;
  // store the updatedNote from the client's new note content
  const updatedNote = req.body;

  if (!Number.isInteger(parseInt(noteId)) || parseInt(noteId) <= 0) {
    const notId = {
      error: 'id must be a positive integer'
    };
    res.status(400).send(notId);

  } else if (req.body.content === undefined) {
    const noContent = {
      error: 'content is a required field'
    };
    res.status(400).send(noContent);

  } else if (dataJSON.notes[noteId] === undefined) {
    const inavlidId = {
      error: `cannot find note with id ${noteId}`
    };
    res.status(404).send(inavlidId);

  } else {
    // the data.json object's note object at the specified id will now equal the
    // updated note content
    // then we need to set the id to the number version of the noteId
    notesObj[noteId] = updatedNote;
    notesObj[noteId].id = parseInt(noteId);
    const updatedNoteJSON = JSON.stringify(dataJSON, null, 2);

    fs.writeFile('data.json', updatedNoteJSON, 'utf8', err => {

      if (err) {
        const postErr = {
          error: 'an unexpected error occurred.'
        };
        console.error(postErr);
        res.status(500).json(postErr);
      }

      // this will send the client a status code and the updated note
      // as it will look in the data.json file object
      res.status(200).send(updatedNote);
    });
  }
});
