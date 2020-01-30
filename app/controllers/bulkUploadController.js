"use strict";

var bulkUpload = require("../services/bulkUploadServices");

const fs = require("fs");
const path = require("path");
const Papa = require("papaparse");

const redis = require("../../common/redis");

var controllers = {
  testControllerFun: async function(req, res, next) {
    let result = await bulkUpload.testService();
    res.send(result);
  },

  bulkUpload: async function(req, res, next) {
    let jsonData = null;
    try {
      const filePath = path.join(__dirname, `../../csv/${req._fileName}`);
      const file = fs.readFileSync(filePath);

      let fileStringified = file.toString();

      if (fileStringified.length > 0) {
        Papa.parse(fileStringified, {
          header: true,
          dynamicTyping: true,
          complete: function(results) {
            jsonData = results;
            console.log(JSON.stringify(results, null, 3));
          }
        });
      }
      res.send(jsonData);

      // validate json
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = controllers;
