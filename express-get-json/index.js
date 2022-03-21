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

appObj.get('/api/grades', (req, res) => {
  const gradeArr = [];

  for (const property in grades) {
    gradeArr.push(grades[property]);
  }
  res.json(gradeArr);
});

appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening.');
});
