'use strict';

module.exports = function(System, app, auth, database) {

  // Home route
  var index = require('../controllers/index');
  app.route('/')
    .get(index.render);


  // Worklog route, in the future this will return data from JIRAs API
  app.route('/worklog')
      .get(function(req, res, next){
         res.json({test:'test'});
      });

};
