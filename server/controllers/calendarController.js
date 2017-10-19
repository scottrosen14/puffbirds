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
  // to select all events
  if(!req.body.date) {
    db.conn.query('SELECT * FROM events', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('result', result);
        res.json(result.rows);
        next();
      }
    });
  } else {
  // to select based on criteria
    db.conn.query('SELECT * FROM events WHERE date=($1)', [req.body.date], (err, result) => {
      // after querying the sql command, elephantsql passes a result object into the data parameter with the properties rows, fields, etc.
      // the property rows is an array of objects
      // place next() within the anonymous callback to avoid async issues
      if (err) {
        console.log(err);
      } else {
        console.log('result', result);
        res.json(result.rows);
        next();
      }
    });
  }
}


calendarController.addRow = (req, res, next) => {
  // separate the query string and data into two separate variables
  // pass the query string as the first argument and the data as the second
  // console.log('body-------', req.body);
  // console.log('email-------', req.body.clientemail);
  const data = [req.body.clientemail, req.body.date, req.body.event];
  const queryStr = 'INSERT INTO events (clientemail, date, event) VALUES ($1, $2, $3)';

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
  const queryStr = 'UPDATE events SET event=($1) WHERE _id=($2)';
  const data = [req.body.event, req.body._id];
  console.log('update', req.body);
  db.conn.query(queryStr, data, (err, result) => {
    console.log('ROW', result)
    if (err) {
      console.log(err);
      throw new Error(err);
    }
    res.json(result.rows);
    res.status(200).send('Success inserting row');
    next();
  });
}


calendarController.removeRow = (req, res, next) => {
  console.log('params------', req.body);
  const queryStr = 'DELETE FROM events WHERE _id=($1) OR date>($2) AND date<($2)';
  const data = [req.body._id, req.body.date];

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