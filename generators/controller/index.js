var yeoman = require('yeoman-generator');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
  initializingStep: function() {
    this.questions = [];
    this.controllerName = 'Users';
    this.controllerVersion = 'v1';
    this.controllerFolderPath = 'users';
    this.controllerRoute = '/users/:userid'
    this.controllerMethod = 'GET';
  },

  promptingStep: function() {
    this.questions.push({ type    : 'input',
                          name    : 'controllerName',
                          message : 'Controller Name (leave off the "Controller" postfix)',
                          default : this.controllerName });

    this.questions.push({ type    : 'input',
                          name    : 'controllerVersion',
                          message : 'Controller Version',
                          default :  this.controllerVersion });

    this.questions.push({ type    : 'input',
                          name    : 'controllerFolderPath',
                          message : 'Controller Folder Path (relative path after the version folder, no starting or training slashes)',
                          default :  this.controllerFolderPath });

    this.questions.push({ type    : 'input',
                          name    : 'controllerRoute',
                          message : 'Controller Route (HTTP request route without the version)',
                          default :  this.controllerRoute });

    this.questions.push({ type    : 'input',
                          name    : 'controllerMethod',
                          message : 'Controller Method (GET, PUT, POST, DELETE)',
                          default :  this.controllerMethod });

    var done = this.async();

    var generator = this;

    var handleAnswers = function(answers) {
      generator.controllerName = generator._.classify(answers.controllerName);
      generator.controllerVersion = answers.controllerVersion;
      generator.controllerFolderPath = answers.controllerFolderPath.toLowerCase();
      generator.controllerRoute = answers.controllerRoute.toLowerCase();
      generator.controllerMethod = answers.controllerMethod.toUpperCase();

      done();
    };

    this.prompt(this.questions, handleAnswers.bind(this));
  },

  configuringStep: function() {
  },

  defaultStep: function() {
  },

  writingStep: function() {
    var controllerDestination = this.destinationRoot() +
                                '/lib/controllers/' +
                                this.controllerVersion +
                                '/' +
                                this.controllerFolderPath +
                                '/' +
                                this.controllerName.toLowerCase() +
                                'controller.js';

    copyTemplate(this, 'lib/controllers/_controller.js', controllerDestination);

    var routeConfigPath = this.destinationRoot() + '/lib/config/route.config.json';
    var routeConfig = require(routeConfigPath);

    if(routeConfig && routeConfig.routes) {
      var controllerRoute = '/' +
                            this.controllerVersion +
                            this.controllerRoute;

      var controllerLocation = '../controllers/' +
                               this.controllerVersion +
                               '/' +
                               this.controllerFolderPath +
                               '/' +
                               this.controllerName.toLowerCase() +
                               'controller';

      routeConfig.routes.push({ route: controllerRoute, method: this.controllerMethod, controller: controllerLocation });

      fs.writeFileSync(routeConfigPath, JSON.stringify(routeConfig, null, 2));
    }
    else {
      throw 'Badly formatted "' + routeConfigPath + '"';
    }
  },

  conflictsStep: function() {
  },

  installStep: function() {
  },

  endStep: function() {
  }
});

var copyTemplate = function(generator, template, path) {
  if(fs.existsSync(path)) {
    throw 'The file "' + path + '" already exists!';
  }
  else {
    generator.template(template, path);
  }
};