'use strict';

var <%= controllerName %>Controller = function() {
};

var get = function(req, res, next) {
  res.status(200).json({ hello: 'world' });
};

<%= controllerName %>Controller.prototype = {
  get: get
};


module.exports = <%= controllerName %>Controller;
