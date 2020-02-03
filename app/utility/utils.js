"use strict";

const Joi = require("joi");
const productModel = require("../models/product");
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const bulkUploadServices = require("../services/bulkUploadServices");

var utilsFunctions = {
  excelValidation: async function(jsonArry, fileName) {
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
        Service_Type: Joi.number()
          .integer()
          .required(),
        Image1: Joi.string().required(),
        Image2: Joi.string().allow(""),
        Image3: Joi.string().allow(""),
        Image4: Joi.string().allow(""),
        Qty: Joi.number()
          .integer()
          .required(),
        Size: Joi.string().required(),
        Color: Joi.string().required(),
        Fabric: Joi.string(),
        Vendor_SKU: Joi.string().required()
      });

    let dataToValidate = jsonArry;

    for (var i = 0; i < dataToValidate.length; i++) {
      let product = dataToValidate[i];
      let result;

      result = Joi.validate(product, schema);

      if (result.error === null) {
        /**
         * PLEASE DO NOT DELETE THE CODE BELOW
         * the code is responsible for checking the image link
         * next phase : it will convert the the images to JSON cdn
         */

        // if (
        //   product.Image1 != "" ||
        //   product.Image1 != null
        // ) {
        //   var image1 = await this.doesFileExist(product.Image1);
        //   if (image1 == false) {
        //     product.Image1 = "";
        //   }
        // }
        // if (
        //   product.Image2 != "" ||
        //   product.Image2 != null
        // ) {
        //   var image2 = await this.doesFileExist(product.Image2);
        //   if (image2 == false) {
        //     product.Image2 = "";
        //   }
        // }
        // if (
        //   product.Image3 != "" ||
        //   product.Image3 != null
        // ) {
        //   var image3 = await this.doesFileExist(product.Image3);
        //   if (image3 == false) {
        //     product.Image3 = "";
        //   }
        // }
        // if (
        //   product.Image4 != "" ||
        //   product.Image4 != null
        // ) {
        //   var image4 = await this.doesFileExist(product.Image4);
        //   if (image4 == false) {
        //     product.Image4 = "";
        //   }
        // }
        product["fileName"] = fileName;

        product["isValid"] = true;
      } else {
        product["fileName"] = fileName;
        product["isValid"] = false;
      }
    }

    return dataToValidate;
  },

  doesFileExist: async function(url) {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", url, false);
      xhr.send();
      if (xhr.status == "200") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
};

module.exports = utilsFunctions;
