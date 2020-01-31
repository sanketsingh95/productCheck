"use strict";

const Joi = require("joi");
const productModel = require("../models/product");

var utilsFunctions = {
    testUtil: async function () {
        const schema = Joi.object()
            .strict()
            .keys({
                Title: Joi.string().required(),
                Description: Joi.string(),
                Listing_Price: Joi.number()
                    .integer()
                    .required(),
                Selling_Price: Joi.number()
                    .integer()
                    .required(),
                Category: Joi.string(),
                Brand: Joi.string().required(),
                Service_Type: Joi.number().integer().required(),
                Image1: Joi.string().required(),
                Image2: Joi.string(),
                Image3: Joi.string(),
                Image4: Joi.string(),
                Qty: Joi.number().integer().required(),
                Size: Joi.string().required(),
                Color: Joi.string().required(),
                Fabric: Joi.string(),
                Vendor_SKU: Joi.string().required(),
            });
        let result;
        let dataToValidate = [{
            Title: "Mahavir Woven Kanjivaram Art Silk Saree ",
            Description: "Mahavir sarees  Present.. It is Dark Blue color Kanjivaram silk saree with exclusive thread zari border and zari Rich pallu. Saree has heavy skirt border look. This saree comes with unstitched silk Blue colour blouse. Blouse which is shown on model is only for modeling purpose.",
            Listing_Price: 3750,
            Selling_Price: 750,
            Category: null,
            Brand: "MAHAVIR ",
            Service_Type: 1,
            Image1: "https://www.dropbox.com/s/q43vngom87lnamx/free-hm-kash-1023-m-s-retail-original-imafh9cvv8t4wycu.jpeg?dl=0",
            Image2: "https://www.dropbox.com/s/zcajxdte8fwkqp5/free-hm-kash-1023-m-s-retail-original-imafh9cvkghrphwc.jpeg?dl=0",
            Image3: "https://www.dropbox.com/s/f8sqpr27625srw3/free-hm-kash-1023-m-s-retail-original-imafh9cvsq7hz2uy.jpeg?dl=0",
            Image4: "https://www.dropbox.com/s/4wqcodp5ylx2zqh/free-hm-kash-1023-m-s-retail-original-imafh9cvszkws8dz.jpeg?dl=0",
            Qty: 1,
            Size: "FREE",
            Color: "BLUE",
            Fabric: "ART SILK ",
            Vendor_SKU: "HM-RL-1023_A"
        }, {
            "Title": "Men's casual long sleeve T-shirt",
            "Description": "Men's casual long sleeve T-shirt with V-neck, 100% cotton",
            "Listing_Price": 390,
            "Selling_Price": 100,
            "Category": "Men's Fashion/Topwear/Polos & T-Shirts/T-Shirts",
            "Brand": "Clride.n",
            "Service_Type": 1,
            "Image1": "https://img.yzcdn.cn/upload_files/2019/05/08/FqvJ6GGOvtQP9PfhN58yWqMAlCHp.jpg!large.jpg",
            "Image2": "https://img.yzcdn.cn/upload_files/2019/05/08/Fk3IKUjvSdRCldbjxeNtALIdwbxg.jpg!large.jpg",
            "Image3": "https://img.yzcdn.cn/upload_files/2019/05/08/Fnk1TP7o_zYZjk7INc6f45J_p7hb.jpg!large.jpg",
            "Image4": "https://img.yzcdn.cn/upload_files/2020/01/05/Fo0uCiKevwIOHDJwRpPa7leAdLaS.JPG",
            "Qty": 20,
            "Size": "S",
            "Color": "Blue",
            "Fabric": "Cotton",
            "Vendor_SKU": "CGATS120U063"
        }];
        // let newDataToValidate = JSON.parse(JSON.stringify(dataToValidate));
        dataToValidate.forEach(arrVal => {
            console.log("inside forEach");
            result = Joi.validate(arrVal, schema);
            if (result.error === null) {
                console.log("No Error");
                arrVal["isValid"] = true;
            } else {
                console.log("An Error");
                arrVal["isValid"] = false;
            }
        });
        console.log("dataToValidate---", dataToValidate);
    }
};

module.exports = utilsFunctions;