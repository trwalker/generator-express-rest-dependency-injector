var yeoman = require('yeoman-generator');

var input = {};
var questions = [];

var appNameQuestion = {
  type    : 'input',
  name    : 'name',
  message : 'Your project name',
  default : this.appname
};

var appGenerator = {
  initializing: {
    initTask: function () {
      questions.push(appNameQuestion);
    }
  },

  prompting: {
    promptTask: function () {
      var done = this.async();

      var handleAnswers = function(answers) {
        input.name = answers.name;
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

module.exports = yeoman.generators.Base.extend(appGenerator);
