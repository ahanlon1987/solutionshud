'use strict';

module.exports = function(System, app, auth, database) {

//  var http = require('http');
  var JiraApi = require('jira').JiraApi;

  var config = {
        'user': 'jirabot',
        'password': 'jiraBotSlalom1',
        'port':'443',
        'host': 'slalom100.jira.com'
    };


  // Home route
  var index = require('../controllers/index');
  app.route('/')
    .get(index.render);


  // Worklog route, in the future this will return data from JIRAs API
  //TODO move this work into a service class
  app.route('/worklog')
      .get(function(req, res, next){

          var query = 'targetUser=steved';
          var jira = new JiraApi('https', config.host, config.port, config.user, config.password, '2');


          jira.searchWorklog(query,function(error, issues) {

              if(error){
                  console.log(error);
                  return;
              }

//              console.log(issues);
              res.json(issues);


          });


      });

};
