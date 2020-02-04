//@ts-check
const request = require("request-promise");
const productModel = require("../models/product");
const TempBulkUpload = require("../models/tempBulkUpload");
const followersModel = require("../models/followModel");
const util = require("../utility/utils");

var bulkUploadServices = {
  testService: async function() {
    let url = "https://cdn2.coutloot.com/stock/177/176736_1.jpg";
    let start = Date.now();
    let result = await util.doesFileExist(url);
    let end = Date.now();
    let timeTake = end - start;
    console.log("object", result);
    return { result: result, timeTake };
  },

  uploadJSONtoDB: async function(JSONData) {
    try {
      let res = await TempBulkUpload.insertMany(JSONData);
      return res;
    } catch (error) {
      console.error(`Failed to insert documents: ${error}`);
    }
  },

  editProductDetails: async function() {
    return "edit Product Details";
  }
};

module.exports = bulkUploadServices;
