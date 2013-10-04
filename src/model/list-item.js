function ListItem () {
}

ListItem.bind = function (row) {
  var listItem = new ListItem();
  // listItem.id = row.id;
  listItem.description = row.description;

  return listItem;
};

module.exports = exports = ListItem;