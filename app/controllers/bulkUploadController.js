"use strict";

var externalBulkUpload = require("../services/externalBulkUploadServices");
var internalBulkUpload = require("../services/internalBulkUploadServices");
var utilsValidation = require("../utility/utils");
const redis = require("../../common/redis");

var controllers = {
  testController: async function (req, res) {
    let response = await internalBulkUpload.testService();
    res.send({
      response
    });
  },
  testUtils: async function (req, res) {
    console.log('testUtils Ctrller');
    let response = await utilsValidation.testUtil();
    // res.send({ response });
  }
};

module.exports = controllers;