const db = require('../db');
const pg = require('pg');
// const connectionStr = 'postgres://bhtbugus:WXESMotOjz0DzpkcjU5-iSnIf8dtEMMv@elmer.db.elephantsql.com:5432/bhtbugus';

const calendarController = {};
//Calendar
// /api/cal output in the form of
/*
[
  {
      "_id": 1,
      "month": 10,
      "day": 1,
      "events": ""
  },
  {
      "_id": 2,
      "month": 10,
      "day": 2,
      "events": ""
  },
  [...]
]
*/
calendarController.getEvents = (req, res, next) => {
  const rows = [];
  // pg.connect(connectionStr, (err, client, done) => {
  db.conn.query('SELECT * FROM events', (err, data) => {
    // after querying the sql command, elephantsql passes a result object into the data parameter with the properties rows, fields, etc.
    // the property rows is an array of objects
    // place next() within the anonymous callback to avoid async issues
    if (err) {
      console.log(err);
    } else {
      console.log('data', data);
      res.json(data.rows);
      next();
    }
  });
}


calendarController.addEvent = (req, res, next) => {
  console.log('read this')
  console.log('body-------', req.body);
  console.log('email-------', req.body.clientemail);
  // separate the query string and data into two separate variables
  // pass the query string as the first argument and the data as the second
  const data = [req.body.clientemail, req.body.year, req.body.month, req.body.day, req.body.event];
  let queryStr = 'INSERT INTO events (clientemail, year, month, day, event) VALUES ($1, $2, $3, $4, $5)';

  db.conn.query(queryStr, data, (err, result) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }
    next();
  });
}


calendarController.addClientEmailColumn = (req, res, next) => {
  // db.conn.query('ALTER TABLE "Cal" ADD COLUMN "ClientEmail" text', (err, result)=> {
  //   console.log('result', result)
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     console.log('result', result);
  //   }
  // });
}

module.exports = calendarController;