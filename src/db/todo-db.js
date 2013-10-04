var sqlite3 = require('sqlite3').verbose()
  , db;

function create () {
  if (db) {
    console.log('Return "todo" database');
    return db;
  } else {
    console.log('Create "todo" database');
    return db = new sqlite3.Database(':memory:', createSchema);
  }
}

function createSchema () {
  console.log('Create schema');
  db.run('CREATE TABLE IF NOT EXISTS listItem ('
      + 'description TEXT'
    + ')', addTestListItems);
}

function addTestListItems () {
  var stmt = db.prepare('INSERT INTO listItem (description) VALUES (?)')
    , i;
  for (i = 1; i <= 3; i++) {
    console.log('Create "item ' + i + '"');
    stmt.run('item ' + i);
  }
  stmt.finalize();
}

function close () {
  console.log('Close "todo" database');
  db.close();
  db = null;
}

exports.create = create;
exports.close  = close;