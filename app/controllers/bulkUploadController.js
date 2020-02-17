//@ts-check
"use strict";
const { testService } = require("../services/bulkUploadServices");
const fs = require("fs");
const Papa = require("papaparse");

let controllers = {
    testController: async function(req, res) {
        try {
            let response = await testService();
            res.send(response);
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = controllers;
