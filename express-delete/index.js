const express = require('express');
const appObj = express();

const grades =
{
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening.');
});

appObj.get('/api/grades', (req, res) => {
  const gradeArr = [];

  for (const property in grades) {
    gradeArr.push(grades[property]);
  }

  res.json(gradeArr);
});

// useing the delete method will allow the program to delete a grade
// the client will specify what id they want to delete in the terminal
// this requires there to be an additional step in the file path
// using the :id allows allows one to use the req.params.id appropriately
// then in the callback function we can use the delete operator to delete
// the object that is at the specified id
// we then send back the status 204 to indicate there is no longer content
// at that id.
appObj.delete('/api/grades/:id', (req, res) => {
  delete grades[req.params.id];
  res.sendStatus(204);
});
