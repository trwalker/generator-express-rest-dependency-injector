var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({

  initializing: {
    method1: function () {
      console.log('method 1 just ran');
    },
    method2: function () {
      console.log('method 2 just ran');
    }
  },

  prompting: {
    promptTask: function () {
      var done = this.async();

      this.prompt({
        type    : 'input',
        name    : 'name',
        message : 'Your project name',
        default : this.appname // Default to current folder name
      },
      function (answers) {
        this.log(answers.name);
        done();
      }
      .bind(this));
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
});
