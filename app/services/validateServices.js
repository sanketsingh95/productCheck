//@ts-check
// const writeProducts = require("../models/writeProduct");
const Products = require("../models/product");
const Counter = require("../models/counter");

let bulkUploadServices = {
    testService: function() {
        console.log("testService");
        return " testing suck";
    },
    getCounter: async function() {
        let counter = null;

        try {
            counter = await Counter.find(
                { name: "pageCounter" },
                { count: 1, _id: 0 }
            );
            return counter;
        } catch (error) {
            console.error("error", error);
        }
    },
    setCounter: async function() {
        let counter = null;

        try {
            const filter = { name: "pageCounter" };
            const update = { $inc: { count: 1 } };

            counter = await Counter.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true
            });
            let { count } = counter;
            return count;
        } catch (error) {
            console.error("error", error);
        }
    },
    getProducts: async function(pgNum = 0) {
        try {
            let limit = 100;
            let products = await Products.find({ isInternational: 1 })
                .limit(limit)
                .skip(pgNum * limit)
                .lean();
            // console.log("===============", JSON.stringify(products, null, 2));

            return products;
        } catch (error) {
            console.log(error);
        }
    },
    updateProduct: async function(productId, status, error = []) {
        try {
            console.log("----------------------------------------->>");

            console.log(productId, status);

            console.log(error);
            console.log("----------------------------------------");

            const filter = { productId };
            const update = {
                $set: {
                    isValidProduct: status,
                    errorLog: error
                }
            };
            let response = await Products.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true
            });
            // console.log("AFTER UPDATING ", response);

            return response;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = bulkUploadServices;
