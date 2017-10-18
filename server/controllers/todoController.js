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
  let results = '';  
  console.log('getTODO...');

  const queryString = 'SELECT * FROM "Todo"';
  // SQL Query > Select Data
  const query = db.conn.query(queryString, (err, data) => {
    if (err) {
      res.status(404).end({ error: 'Error Requesting Database', err });
    }
    res.status(200).json(data.rows[0].item);
    next();
  });
};

todoController.addTodo = (req, res, next) => { 
  let results = '';
  const data = req.body.data;
  const user = 1; //Should be from post data - CURRENTLY HARD CODED - ONLY ONE USER
  const todoInputs = [user, data]
  let queryString = 'UPDATE "Todo" SET item = ($2) WHERE _id=($1)';
   
  client.query(queryString, todoInputs, (err) => {
    if (err) {
      res.status(404).end({ error: 'Error Inserting to Database', err })
    }
  });
  
  queryString = 'SELECT * FROM "Todo"';
  db.conn.query(queryString, (err, data) => {
    res.status(200).json(data.rows[0].item);
    next();
  });    
};

module.exports = todoController;