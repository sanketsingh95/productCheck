"use strict";

const request = require("request-promise");
const productModel = require("../models/product");
const tempBulkUpload = require("../models/tempBulkUpload");
const followersModel = require("../models/followModel");

var bulkUploadServices = {
  testService: async function () {
    return " test completed sasdfghjkl./.,mnbvc";
  },
  validationUpload: async function (dataToValidate) {
    // console.log("dataToValidate---", dataToValidate.length);
    var successful = [];
    var unsuccessful = [];
    try {
      for (let i = 0; i < dataToValidate.length; i++) {
        // console.log("====", i);
        let result = await tempBulkUpload.create(dataToValidate[i]);
        // console.log("result---", result);
        // if (!result) {
        //   unsuccessful.push(dataToValidate[i]);
        // }
        successful.push(result);
      }
      return successful;
    } catch (error) {
      throw error;
    }
  }
};

module.exports = bulkUploadServices;