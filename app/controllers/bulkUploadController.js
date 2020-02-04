//@ts-check

"use strict";

var bulkUploadServices = require("../services/bulkUploadServices");
var utilsValidation = require("../utility/utils");

const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");

const redis = require("../../common/redis");

var controllers = {
  testControllerFun: async function(req, res, next) {
    let result = await bulkUploadServices.testService();
    res.send(result);
  },

  bulkUpload: async function(req, res, next) {
    let jsonData = null;

    const filePath = path.join(__dirname, `../../csv/${req._fileName}`);
    const file = fs.readFileSync(filePath);

    let fileStringified = file.toString();

    if (fileStringified.length > 0) {
      Papa.parse(fileStringified, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
          let newData = results.data;
          newData.pop();
          jsonData = newData;
        }
      });
    }

    let checkedProduct = await utilsValidation.excelValidation(
      jsonData,
      req._fileName
    );

    let validProductUpload = await bulkUploadServices.uploadJSONtoDB(
      checkedProduct
    );
    console.log(typeof validProductUpload);
    if (validProductUpload.length > 0) {
      res.send({
        success: 1,
        data: validProductUpload
      });
    } else {
      res.send({
        success: 1,
        data: validProductUpload
      });
    }
  },

  editProductDetails: async function(req, res) {
    bulkUploadServices.editProductDetails();
  }
};

module.exports = controllers;
