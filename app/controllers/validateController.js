//@ts-check
"use strict";
const {
    testService,
    getProducts,
    getCounter,
    setCounter,
    updateProduct
} = require("../services/validateServices");
const fs = require("fs");
const Joi = require("joi");
const Papa = require("papaparse");

const productSchema = Joi.object({
    productId: Joi.number()
        .integer()
        .required(),
    listedOn: Joi.number().required(),
    listingType: Joi.string().required(),
    productType: Joi.string().required(),
    quantity: Joi.number()
        .integer()
        .required(),
    status: Joi.string().required(),
    sellerDetails: Joi.object({
        userId: Joi.number()
            .integer()
            .required(),
        name: Joi.string().required(),
        profilePic: Joi.string().required(),
        city: Joi.string().required(),
        role: Joi.string().required(),
        verified: Joi.number().required(),
        email: Joi.string().required(),
        mobile: Joi.string().required(),
        location: Joi.object({
            pincode: Joi.string().required(),
            pickupAddressId: Joi.number().required(),
            addressLocation: Joi.object({
                latitude: Joi.string(),
                longitude: Joi.string()
            }).allow()
        })
    }),
    filters: Joi.any(),
    category: Joi.object({
        categoryString: Joi.string().required(),
        categoryName: Joi.string().required(),
        categoryId: Joi.number().required(),
        categoryIdString: Joi.string().required()
    }),
    collections: Joi.array().items(Joi.number()),
    details: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        condition: Joi.string().required(),
        brand: Joi.string().required(),
        variantAttribute: Joi.string().required(),
        productAttributes: Joi.array().required(),
        variants: Joi.array().required()
    }),
    images: Joi.object({
        submittedImages: Joi.array().items(Joi.string()),
        thumbImages: Joi.array().items(Joi.string()),
        mainImages: Joi.array().items(Joi.string()),
        otherImages: Joi.array()
    }),
    activeRank: Joi.number().required(),
    baseProduct: Joi.number().required(),
    productLogs: Joi.array().required(),
    promoted: Joi.number(),
    promotionDetails: Joi.object({
        impressions: Joi.number(),
        views: Joi.number()
    }),
    __v: Joi.number().allow(),
    root: Joi.object({
        other_items: Joi.array(),
        sku: Joi.array()
    }),
    _id: Joi.any(),
    isValidProduct: Joi.boolean(),
    errorLog: Joi.array()
}).unknown(true);

const InternationalProductSchema = Joi.object()
    .strict()
    .keys({
        productId: Joi.number()
            .integer()
            .required(),
        listedOn: Joi.number().required(),
        listingType: Joi.string().required(),
        productType: Joi.string().required(),
        serviceType: Joi.string().required(),
        quantity: Joi.number(),
        status: Joi.string().required(),
        sellerDetails: Joi.object({
            userId: Joi.number()
                .integer()
                .required(),
            name: Joi.string().required(),
            profilePic: Joi.string().required(),
            city: Joi.string().required(),
            role: Joi.string().required(),
            verified: Joi.number().required(),
            email: Joi.string().required(),
            mobile: Joi.any().required(),
            location: Joi.object({
                pincode: Joi.string().required(),
                pickupAddressId: Joi.number().required(),
                addressLocation: Joi.object({
                    latitude: Joi.string(),
                    longitude: Joi.string()
                }).unknown(true)
            })
        }).unknown(true),
        filters: Joi.any(),
        category: Joi.object({
            categoryString: Joi.string(),
            categoryName: Joi.string(),
            categoryId: Joi.number().required(),
            categoryIdString: Joi.string()
        }),
        collections: Joi.array().items(Joi.number()),

        details: Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            condition: Joi.string().required(),
            brand: Joi.string().required(),
            variantAttribute: Joi.string().required(),
            productAttributes: Joi.array()
                .items(Joi.any())
                .required(),
            variants: Joi.array()
                .items(
                    Joi.object({
                        sku: Joi.string().required(),
                        variantName: Joi.string(),
                        default: Joi.number(),
                        priceDetails: Joi.object({
                            labelPrice: Joi.number()
                                .integer()
                                .required(),
                            listedPrice: Joi.number()
                                .integer()
                                .required(),
                            supplierPrice: Joi.number()
                                .integer()
                                .required(),
                            commisionPercent: Joi.number()
                                .integer()
                                .required(),
                            pickupCharges: Joi.number()
                                .integer()
                                .required(),
                            commision: Joi.number().integer(),
                            userEarnings: Joi.number().integer()
                        }).unknown(true),
                        quantity: Joi.number().integer(),
                        vendorSpecific: Joi.object({
                            price: Joi.number().integer(),
                            packingFee: Joi.number().integer(),
                            handlingFee: Joi.number().integer(),
                            baseSKU: Joi.string(),
                            warehouse: Joi.string(),
                            dollarRate: Joi.number()
                        })
                    }).unknown(true)
                )
                .required()
        }).unknown(true),
        images: Joi.object({
            submittedImages: Joi.array()
                .items(Joi.string())
                .required(),
            thumbImages: Joi.array()
                .items(Joi.string())
                .required(),
            mainImages: Joi.array()
                .items(Joi.string())
                .required(),
            otherImages: Joi.array()
                .items(Joi.string())
                .required()
        }),
        activeRank: Joi.number().required(),
        baseProduct: Joi.number().required(),
        productLogs: Joi.array().required(),
        promoted: Joi.number(),
        promotionDetails: Joi.object({
            impressions: Joi.number(),
            views: Joi.number()
        }),
        root: Joi.object({
            CBDescription: Joi.string(),
            CBCatId: Joi.string(),
            videoURL: Joi.string(),
            warehouse: Joi.string(),
            vendor: Joi.string(),
            similarSKUs: Joi.array().items(Joi.any()),
            similarProducts: Joi.number()
        }).unknown(true),
        uplodedBy: Joi.string(),
        variantCount: Joi.number(),
        productCount: Joi.number(),
        isInternational: Joi.number(),
        dimensions: Joi.object({
            length: Joi.number(),
            width: Joi.number(),
            height: Joi.number(),
            weight: Joi.number(),
            volumetricWeight: Joi.number()
        }).unknown(true),
        _id: Joi.any(),
        __v: Joi.number().allow(),
        isValidProduct: Joi.boolean(),
        errorLog: Joi.array()
    })
    .unknown(true);

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
        let limit = 70; // make a a service call for total count

        do {
            if (counter === null) {
                counter = await getCounter();
            }
            try {
                let products;
                try {
                    products = await getProducts(counter);
                    console.log("COUNTER =>", counter);

                    console.log("Length", products.length);
                } catch (error) {
                    console.log(error);
                }

                if (products.length > 0) {
                    for (const product of products) {
                        let Schema = productSchema; //local product schema

                        if (product.isInternational) {
                            if (product.isInternational === 1) {
                                Schema = InternationalProductSchema;
                            }
                        }

                        Joi.validate(
                            product,
                            Schema,
                            { convert: true, abortEarly: false },
                            async (err, value) => {
                                if (err) {
                                    // console.log("error", err.details);
                                    if (err) {
                                        let response = await updateProduct(
                                            product.productId,
                                            false,
                                            err.details
                                        );
                                        // console.log("falsy ", response);
                                    }
                                } else {
                                    // let response = await updateProduct(
                                    //     product.productId,
                                    //     true
                                    // );
                                    console.log("truthy ", product.productId);
                                }
                            }
                        );
                    }
                    console.log("COMPLEETED");
                }
                counter = await setCounter();

                console.log(
                    "UPdated Counter ======================================= => ",
                    counter
                );
            } catch (error) {
                console.log(error);
            }
        } while (counter < limit);
    }
};

module.exports = controllers;
