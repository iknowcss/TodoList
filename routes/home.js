exports.index = function (req, res) {
  res.render('index', {
    pageTitle: 'TodoList',
    title: 'TodoList',
    techList: [

      {
        name: 'express',
        url: 'http://expressjs.com',
        description: 'Web application framework'
      }, {
        name: 'jade',
        url: 'http://jade-lang.com',
        description: 'Templating engine'
      }, {
        name: '960 Grid System',
        url: 'http://960.gs',
        description: 'General layout (12-grid system)'
      }, {
        name: 'AngularJS',
        url: 'http://angularjs.org/',
        description: 'MVC Framework'
      }, {
        name: 'LESS',
        url: 'http://lesscss.org/',
        description: 'Dynamic stylesheet language'
      }, {
        name: 'node-sqlite3',
        url: 'https://github.com/developmentseed/node-sqlite3',
        description: 'Non-blocking SQLite bindings' 
      }

    ]

  });
};