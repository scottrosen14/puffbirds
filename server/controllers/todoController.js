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
  let results;  
  // SQL Query > Select Data
  const query = db.conn.query('SELECT * FROM "Todo";');
  // Stream results back one row at a time
  query.on('row', (row) => {
    results = row.item;
  });
  // After all data is returned, close connection and return results
  query.on('end', () => {
    res.status(200).json(results);
    next();
  });       
};

todoController.addTodo = (req, res, next) => { 

  let results;
  const data = req.body.data;
  console.log(data);  
  client.query('UPDATE "Todo" SET item = ($2) WHERE _id=($1)',
    [1, data]);
  
  const query = client.query('SELECT * FROM "Todo";');
  query.on('row', (row) => {
    results = row;
  });
  query.on('end', function () {
    res.status(200).json(results);
    next();
  });
};

module.exports = todoController;