/*
 * GET home page.
 */

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
        name: 'Mocha',
        url: 'http://http://visionmedia.github.io/mocha/',
        description: 'Unit testing framework' 
      }

    ]

  });
};