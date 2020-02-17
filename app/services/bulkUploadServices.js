//@ts-check
const products = require("../models/product");

let bulkUploadServices = {
    testService: function() {
        console.log("testService");
        return " testing suck";
    }
};

module.exports = bulkUploadServices;
