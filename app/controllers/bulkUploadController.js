//@ts-check
"use strict";
const {
    testService,
    getProducts,
    getCounter,
    setCounter
} = require("../services/bulkUploadServices");
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
    },
    getCounter: async function(req, res) {
        try {
            let counter = await getCounter();
        } catch (error) {
            console.log(error);
        }
    },
    setCounter: async function(req, res) {
        try {
            let counter = await setCounter();
        } catch (error) {
            console.log(error);
        }
    },

    validateProducts: async function(req, res) {
        let counter = null;

        // getCounter

        counter = await this.getCounter();

        try {
            //get the products (/page) from the DB
            // verify it
            //send it back to the Db  (isVAerifiedProduct = true /false)
            let products;
            try {
                products = await getProducts();
                console.log("Length", products.length);
            } catch (error) {
                console.log(error);
            }

            if (products.length > 0) {
                for (const product of products) {
                    // vanadate //from utils
                    // if validate
                    // add if isVerifiedProduct  trur/ false  //await
                }
            }
            // update counter
        } catch (error) {
            console.log(error);
        }
    }
};
module.exports = controllers;
