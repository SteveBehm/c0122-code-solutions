const express = require('express');
const app = express();
// const fs = require('fs');
const pg = require('pg');

// pnly create one pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('The server is now listening');
});

// express.json parses incoming requests with JSON payloads
const jsonParse = express.json();
app.use('/api/grades', jsonParse);

app.get('/api/grades', (req, res) => {
  // first we need to query the database for the data we want
  // use template literal format so it is easier to indent
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
  `;
  db.query(sql)
  // the query succeeded even if nothing was found
  // the Result object will include an array of rows
    .then(result => {
      const grades = result.rows;
      // this will send the response of the array of objects
      // back to the client that requested the data
      res.json(grades);
    })
    .catch(err => {
      // the query failed for some reason
      // possibly due to syntax error in the sql statement
      // print the error to the STDERR (terminal) for debugging purposes
      console.error(err);
      // respond to the client with a generic 500 error message
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  const name = req.body.name;
  const course = req.body.course;
  const score = (req.body.score);

  if (newGrade === {}) {
    res.status(400).json({
      error: 'need to include: name, course, and score'
    });
    return;
  }
  if (name === undefined || name === '') {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  }
  if (course === undefined || course === '') {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  }
  if (score === undefined || score === '') {
    res.status(400).json({
      error: 'score is a required field'
    });
    return;
  }
  if (!Number.isInteger(parseInt(score)) || parseInt(score) <= 0) {
    res.status(400).json({
      error: 'score needs to be a positive integer greater than 0'
    });
    return;
  }
  const sql = `
    insert into "grades" ("name", "course", "score")
         values ($1, $2, $3)
         returning *;
  `;

  const params = [name, course, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const updatedGrade = req.body;
  const gradeId = req.body.gradeId;
  const name = req.body.name;
  const course = req.body.course;
  const score = (req.body.score);

  if (!Number.isInteger(parseInt(gradeId) || parseInt(gradeId) > 0)) {
    res.status(400).json({
      error: 'gradeId needs to be a positive integer > 0.'
    });
    return;
  }
  if (updatedGrade === {}) {
    res.status(400).json({
      error: 'need to include: gradeId, name, course, and score'
    });
    return;
  }
  if (name === undefined || name === '') {
    res.status(400).json({
      error: 'name is a required field'
    });
    return;
  }
  if (course === undefined || course === '') {
    res.status(400).json({
      error: 'course is a required field'
    });
    return;
  }
  if (score === undefined || score === '') {
    res.status(400).json({
      error: 'score is a required field'
    });
    return;
  }
  if (!Number.isInteger(parseInt(score)) || parseInt(score) <= 0) {
    res.status(400).json({
      error: 'score needs to be a positive integer greater than 0'
    });

  }

  const sql = `
      update "grades"
         set "name"     = $1,
             "course"   = $2,
             "score"    = $3
       where "gradeId"  = $4
       returning *;
  `;

  const params = [name, course, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.body.gradeId;

  if (!Number.isInteger(parseInt(gradeId) || parseInt(gradeId) > 0)) {
    res.status(400).json({
      error: 'gradeId needs to be a positive integer > 0.'
    });
    return;
  }

  const sql = `
      delete from "grades"
            where "gradeId" = $1
        returning *;
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId ${gradeId}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});
