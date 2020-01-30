"use strict";

var controller = require("./controllers/bulkUploadController");

module.exports = function (app) {
  app.route("/test").get(controller.testController);
  app.route("/testUtils").get(controller.testUtils);
};