"use strict";

const Joi = require("joi");
const productModel = require("../models/product");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const bulkUploadServices = require("../services/bulkUploadServices");

var utilsFunctions = {
    excelValidation: async function () {
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
                Image2: Joi.string().allow(""),
                Image3: Joi.string().allow(""),
                Image4: Joi.string().allow(""),
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
            Category: "null",
            Brand: "MAHAVIR ",
            Service_Type: 1,
            Image1: "https://img.yzcdn.cn/upload_files/2020/01/16/FnmCpwnXF6eqRparCTspCPEsR-Wb.png",
            Image2: "https://img.yzcdn.cn/upload_files/2020/01/16/FgSrGkKBmN3N-WKVecar9R3WC_aF.png",
            Image3: "",
            Image4: "",
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
        for (var i = 0; i < dataToValidate.length; i++) {
            // console.log("inside forEach");
            result = Joi.validate(dataToValidate[i], schema);
            if (result.error === null) {
                // console.log("No Error");
                if (dataToValidate[i].Image1 != '' || dataToValidate[i].Image1 != null) {
                    var image1 = await this.doesFileExist(dataToValidate[i].Image1);
                    // console.log('image1---', image1);
                    if (image1 == false) {
                        dataToValidate[i].Image1 = "";
                    }
                }
                if (dataToValidate[i].Image2 != '' || dataToValidate[i].Image2 != null) {
                    var image2 = await this.doesFileExist(dataToValidate[i].Image2);
                    // console.log('image2---', image2);
                    if (image2 == false) {
                        dataToValidate[i].Image2 = "";
                    }
                }
                if (dataToValidate[i].Image3 != '' || dataToValidate[i].Image3 != null) {
                    var image3 = await this.doesFileExist(dataToValidate[i].Image3);
                    // console.log('image3---', image3);
                    if (image3 == false) {
                        dataToValidate[i].Image3 = "";
                    }
                }
                if (dataToValidate[i].Image4 != '' || dataToValidate[i].Image4 != null) {
                    var image4 = await this.doesFileExist(dataToValidate[i].Image4);
                    // console.log('image4---', image4);
                    if (image4 == false) {
                        dataToValidate[i].Image4 = "";
                    }
                }
                dataToValidate[i]["isValid"] = true;
            } else {
                dataToValidate[i]["isValid"] = false;
            }
        }
        // console.log("dataToValidate---", dataToValidate);
        let validateUpload = await bulkUploadServices.validationUpload(dataToValidate);
        return validateUpload;
    },

    doesFileExist: async function (urlToFile) {
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', urlToFile, false);
        xhr.send();
        if (xhr.status == "200") {
            return true;
        } else {
            return false;
        }
    }
};

module.exports = utilsFunctions;