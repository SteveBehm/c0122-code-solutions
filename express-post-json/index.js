// set up a basic express server
const express = require('express');
const appObj = express();

// declare two variables, one that will hold the id of the grade
// the other will be the grades object we want to post gardes to
let nextId = 1;
const grades = {};

// using the listen method and specifying a port will allow the server
// to listen for connections (requests) from clients
appObj.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening.');
});

// the use method mounts a specified middleware function at the specified path
// express.json is a built in middleware function in Express
// Express.json parses incoming requests with JSON payloads
appObj.use(express.json());

// using the get method is a form of routing and it determines how an app
// responds to client request to a particular end point
// the code will run when the path ('/api/grades') is matched
// in the code we are taking the property and value pairs and pushing them
// into the gradeArr in a JSON format so that they can be transmitted as a
// JSON response.
appObj.get('/api/grades', (req, res) => {
  const gradeArr = [];

  for (const property in grades) {
    gradeArr.push(grades[property]);
  }

  res.json(gradeArr);
});

// using the post method is a form of routing and it also determines how an
// app response to the clients request.
// this allows us to post a new grade object to the gradesArr
// since we mounted the express.json middleware already we will have an object
// on req.body which contains key-value pairs of data submitted in the request body
// we want the req.body (grade object to be submitted) to go in the next index of the
// gradesArr, which is why we assign it to grades[nextId]
// we also need to set the property id equal to the nextId
// we change the status to indicate that the grade has been created successfully
// then we send the grades[nextId], which shows the grade that has been posted
// incrementing the nextId variable will then prepare for the next grade to be submitted
appObj.post('/api/grades', (req, res) => {
  grades[nextId] = req.body;
  grades[nextId].id = nextId;
  res.status(201).send(grades[nextId]);
  nextId++;
});
