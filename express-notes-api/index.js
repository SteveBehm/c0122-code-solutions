const express = require('express');
const appObj = express();
const dataJSON = require('./data.json');

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
