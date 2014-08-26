var yeoman = require('yeoman-generator');

var input = {};
var questions = [];

var controllerFolderQuestion = {
  type    : 'input',
  name    : 'controllerFolder',
  message : 'Controller Folder',
  default : 'controllers'
};

var controllerNameQuestion = {
  type    : 'input',
  name    : 'controllerName',
  message : 'Controller Name',
  default : 'newcontroller'
};

var controllerGenerator = {
  initializing: {
    initTask: function () {
      questions.push(controllerFolderQuestion);
      questions.push(controllerNameQuestion);
    }
  },

  prompting: {
    promptTask: function () {
      var done = this.async();

      var handleAnswers = function(answers) {
        input.controllerFolder = answers.controllerFolder;
        input.controllerName = answers.controllerName;

        done();
      };

      this.prompt(questions, handleAnswers.bind(this));
    }
  },

  configuring: {

  },

  default: {

  },

  writing: {

  },

  conflicts: {

  },

  install: {

  },

  end: {

  }
};

module.exports = yeoman.generators.Base.extend(controllerGenerator);
