//@ts-check
const Products = require("../models/product");

let bulkUploadServices = {
    testService: function() {
        console.log("testService");
        return " testing suck";
    },
    getProducts: async function(pgNum = 0) {
        try {
            let limit = 1000;
            let products = await Products.find({})
                .limit(limit)
                .skip(pgNum * limit);
            return products;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = bulkUploadServices;
