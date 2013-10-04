var basePath      = require('path').dirname(require.main.filename)
  , listItemRepo  = require(basePath + '/src/db/list-item-repo');

function IndexRequest (req, res) {
  this.req = req;
  this.res = res;
}

IndexRequest.prototype = {

  exec: function (res) {
    listItemRepo.requestListItems(this.receiveListItems.bind(this));
  },

  receiveListItems: function (listItems) {
    this.res.render('todo', {
      listItems: listItems
    });
  }

};

exports.index = function (req, res) {
  new IndexRequest(req, res).exec();
};