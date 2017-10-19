const db = require('../db');

const todoController = {};

// /api/todos output in the form of 
/*
[
    "build stardust",
    "have a dance party"
]
*/
todoController.getTodo = (req, res, next) => { 
  const clientEmail = 'hard@coded.com';
  const queryString = `SELECT * FROM todo WHERE client_email = '${clientEmail}'` ;

  // SQL Query > Select Data
  db.conn.query(queryString, (err, data) => {
    if (err) {
      res.status(404).end({ error: 'Error Requesting Database', err });
    }
    res.status(200).json(data.rows);
    next();
  });
};

todoController.addTodo = (req, res, next) => { 
  const clientEmail = 'hard@coded.com';
  const task = req.body.task;
  const todoInputs = [task, clientEmail]
  let queryString = 'INSERT INTO todo (item, client_email) VALUES ($1, $2)';
   
  db.conn.query(queryString, todoInputs, (err, result) => {
    if (err) {
      res.status(404).end({ error: 'Error Inserting to Database', err })
    }
    res.status(200);
    next();
  });
};

todoController.removeTodo = (req, res, next) => { 
  const clientEmail = 'hard@coded.com';
  const taskId = req.body.taskId;
  let queryString = `DELETE FROM todo WHERE _id='${taskId}'`;
   
  db.conn.query(queryString, (err, result) => {
    if (err) {
      res.status(404).end({ error: 'Error Inserting to Database', err })
    }
    res.status(200);
    next();
  });
};

module.exports = todoController;