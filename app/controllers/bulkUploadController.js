"use strict";

var externalBulkUpload = require("../services/externalBulkUploadServices");
var internalBulkUpload = require("../services/internalBulkUploadServices");
const redis = require("../../common/redis");

var controllers = {
  testController: async function(req, res) {
    let response = await internalBulkUpload.testService();
    res.send({ response });
  }
};

module.exports = controllers;
