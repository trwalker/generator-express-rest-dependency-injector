var appGenerator = (function() {

  var questions = [];

  var initializingStep = {
    initQuestions: function () {
      questions.push({ type    : 'input',
                       name    : 'appName',
                       message : 'Your project name',
                       default : this.appname });
    }
  };

  var promptingStep = {
    promptTask: function () {
      var done = this.async();

      var handleAnswers = function(answers) {
        this.appName = answers.appName;
        done();
      };

      this.prompt(questions, handleAnswers.bind(this));
    }
  };

  var configuringStep = {
    installDependenciesTask: function() {
      var done = this.async();
      this.npmInstall(['express', 'cluster-service', 'body-parser', 'express-dependency-injector'], { 'save': true }, done);
    },
    installDevDependenciesTask: function() {
      var done = this.async();
      this.npmInstall(['mocha', 'chai', 'sinon'], { 'saveDev': true }, done);
    }
  };

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

module.exports = yeoman.generators.Base.extend(appGenerator);
