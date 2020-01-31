"use strict";

const request = require("request-promise");
const productModel = require("../models/product");
const followersModel = require("../models/followModel");

var internalBulkUploadServices = {
  testService: async function() {
    return " test completed sasdfghjkl./.,mnbvc";
  }
};

module.exports = internalBulkUploadServices;
