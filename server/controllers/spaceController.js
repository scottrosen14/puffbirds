const db = require('../db');

const spaceController = {};

// /api/space output in the form of
/*
{
  "_id": 1,
  "coord_x": [
      50,
      51
  ],
  "coord_y": [
      52,
      54
  ]
} */
spaceController.getSpace = (req, res, next) => {
  let results;
  const query = db.conn.query('SELECT * FROM "Space";');
  query.on('row', (row) => {
    results = row;
  });
  query.on('end', () => {
    res.status(200).json(results);
    next();
  });
};

// PUT /api/update/space
/*
Input Body: 
{
    coords_x = [1,2,3,4,5,...],
    coords_y = [1,2,3,4,5,...]
}*/
spaceController.updateSpace = (req, res, next) => { 

  let results;
  // const data = { coords_x: req.body.coords_x, coords_y: req.body.coords_y };
  db.conn.query('UPDATE "Space" SET coord_x=($1), coord_y=($2) WHERE _id=($3)',
    [mouseXPosArray, mouseYPosArray, 1]);
  const query = client.query('SELECT * FROM "Space";');
  query.on('row', (row) => {
    results = row;
  });
  query.on('end', function () {
    return res.json(results);
  });
};



spaceController.clearSpace = (req, res, next) => { 
  let results;
  db.conn.query('UPDATE "Space" SET coord_x=($1), coord_y=($2) WHERE _id=($3)',
    [[], [], 1]);
  mouseXPosArray = [];
  mouseYPosArray = [];
  const query = db.conn.query('SELECT * FROM "Space";');
  query.on('row', (row) => {
    results = row;
  });
  query.on('end', function () {
    res.status(200).json(results);
    next();
  });
};

module.exports = spaceController;