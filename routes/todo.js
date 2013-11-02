var basePath     = require('path').dirname(require.main.filename)
  , listItemRepo = require(basePath + '/src/db/list-item-repo');

// /index
function IndexRequest (req, res) {
  this.req = req;
  this.res = res;
}

IndexRequest.prototype.exec = function (res) {
  this.res.render('todo');
};

exports.index = function (req, res) {
  new IndexRequest(req, res).exec();
};

// /item-list
function ListItemsRequest (req, res) {
  this.req = req;
  this.res = res;
}

ListItemsRequest.prototype.exec = function (res) {
  listItemRepo.requestListItems(this.receiveListItems.bind(this));
};

ListItemsRequest.prototype.receiveListItems = function (listItems) {
  this.res.send(listItems);
};

exports.listItems = function (req, res) {
  new ListItemsRequest(req, res).exec();
};
