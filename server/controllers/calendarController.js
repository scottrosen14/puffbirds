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
  db.conn.query('SELECT * FROM events WHERE year=($1) AND month=($2)', [req.body.year, req.body.month], (err, data) => {
    // after querying the sql command, elephantsql passes a result object into the data parameter with the properties rows, fields, etc.
    // the property rows is an array of objects
    // place next() within the anonymous callback to avoid async issues
    if (err) {
      console.log('Error CAL GET: ', err);
    } else {
      res.status(200).json(data.rows);
      next();
    }
  });
}


calendarController.addRow = (req, res, next) => {
  // separate the query string and data into two separate variables
  // pass the query string as the first argument and the data as the second
  // console.log('body-------', req.body);
  // console.log('email-------', req.body.clientemail);
  const data = [req.body.clientemail, req.body.year, req.body.month, req.body.day, req.body.event];
  const queryStr = 'INSERT INTO events (clientemail, year, month, day, event) VALUES ($1, $2, $3, $4, $5)';

  db.conn.query(queryStr, data, (err, result) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    } else {
      res.json(result.rows);
      next();
    }
  });
}


calendarController.updateRow = (req, res, next) => {
  const queryStr = 'UPDATE events SET id=($1), event=($2) WHERE year=($3) AND month=($4) AND day=($5)';
  const data = [req.body.id, req.body.event, req.body.year, req.body.month, req.body.day];
  db.conn.query(queryStr, data, (err, result) => {
    if (err) {
      console.log(err);
      throw new Error(err);
    }
    res.status(200).send('Success inserting row');
    next();
  });
}


calendarController.removeRow = (req, res, next) => {
  
  const queryStr = 'DELETE events'
  const data = [];
  // db.conn.query(queryStr, data, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     throw new Error(err);
  //   }
  //   next();
  // })
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