var basePath = require('path').dirname(require.main.filename)
  , db       = require(basePath + '/src/db/todo-db').create()

  , ListItem = require(basePath + '/src/model/list-item');

exports.requestListItems = function (callback) {
  var listItems = [];
  db.each('SELECT * FROM listItem', function (err, row) {
    if (err) {
      console.log(err);
    } else {
      listItems.push(ListItem.bind(row));
    }
  }, function () {
    callback(listItems);
  });
};