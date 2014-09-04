'use strict';

var <%= controllerName %>Controller = function(myDependency) {
  this.myDependency = myDependency;
};

var get = function(req, res, next) {
  res.status(200).json({ hello: 'world'});
};

<%= controllerName %>Controller.prototype = {
  get: get
};


module.exports = <%= controllerName %>Controller;
