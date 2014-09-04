var controllerGenerator = (function() {

  var questions = [];

  var initializingStep = {
    initQuestions: function () {
      questions.push({ type    : 'input',
                       name    : 'controllerFolder',
                       message : 'Controller Folder',
                       default : 'controllers' });

      questions.push({ type    : 'input',
                       name    : 'controllerName',
                       message : 'Controller Name (omit "Controller" postfix)',
                       default : 'Home' });
    }
  };

  var promptingStep = {
    promptTask: function () {
      var done = this.async();

      var handleAnswers = function(answers) {
        this.controllerFolder = answers.controllerFolder.toLowerCase();
        this.controllerName = this._.classify(answers.controllerName);

        done();
      };

      this.prompt(questions, handleAnswers.bind(this));
    }
  };

  var configuringStep = {
  }

  var defaultStep = {
  };

  var writingStep = {
  };

  var conflictsStep = {
  };

  var installStep = {
  };

  var endStep = {
  };

  return {
    initializing: initializingStep,
    prompting: promptingStep,
    configuring: configuringStep,
    default: defaultStep,
    writing: writingStep,
    conflicts: conflictsStep,
    install: installStep,
    end: endStep
  };

})();

var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend(controllerGenerator);
