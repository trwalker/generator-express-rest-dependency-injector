'use strict';

var HomeController = function() {
};

var get = function(req, res, next) {
  res.status(200).json({ hello: 'world' });
};

HomeController.prototype = {
  get: get
};


module.exports = HomeController;
