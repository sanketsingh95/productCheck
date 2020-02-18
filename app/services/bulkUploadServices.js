//@ts-check
const writeProducts = require("../models/writeProduct");
const readProducts = require("../models/readProduct");
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
            let limit = 1000;
            let products = await readProducts
                .find({})
                .limit(limit)
                .skip(pgNum * limit);
            return products;
        } catch (error) {
            console.log(error);
        }
    }
};

module.exports = bulkUploadServices;
