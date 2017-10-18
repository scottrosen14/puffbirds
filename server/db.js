const pg = require('pg');


const connectionStr = 'postgres://bhtbugus:WXESMotOjz0DzpkcjU5-iSnIf8dtEMMv@elmer.db.elephantsql.com:5432/bhtbugus';

// create a db object in which to store the client parameter
// assign the client to the property conn
// export the db object to be used in other files
const db = {};

pg.connect(connectionStr, (err, client, done) => {
  if (err)  {
    console.log('Error Connecting to Database..');
    throw new Error(err);
  }
  db.conn = client;
  console.log('Connected to Database..')
});

module.exports = db;
