'use strict';

const Joi = require('joi');
const productModel = require("../models/product");


var utilsFunctions = {
    testUtil: async function () {
        const schema = Joi.object().strict().keys({
            Title: Joi.string().min(3).required(),
            // Description: Joi.string().min(3),
            // Listing_Price: Joi.number().integer().required(),
            // Selling_Price: Joi.number().integer().required(),
            // Category: Joi.string().min(3),
            // Brand: Joi.string().min(3).required(),
            // Service_Type: Joi.number().integer().required(),
            // Image1: Joi.string().min(3).required(),
            // Image2: Joi.string().min(3),
            // Image3: Joi.string().min(3),
            // Image4: Joi.string().min(3),
            // Qty: Joi.number().integer().required(),
            // Size: Joi.string().min(3).required(),
            // Color: Joi.string().min(3).required(),
            // Fabric: Joi.string().min(3),
            // Vendor_SKU: Joi.string().min(3).required(),
        });
        let result;
        const dataToValidate = [{
                "Title": "Mahavir Woven Kanjivaram Art Silk Saree ",
                "Description": "Mahavir sarees  Present.. It is Dark Blue color Kanjivaram silk saree with exclusive thread zari border and zari Rich pallu. Saree has heavy skirt border look. This saree comes with unstitched silk Blue colour blouse. Blouse which is shown on model is only for modeling purpose.",
                "Listing_Price": 3750,
                "Selling_Price": 750,
                "Category": null,
                "Brand": "MAHAVIR ",
                "Service_Type": 1,
                "Image1": "https://www.dropbox.com/s/q43vngom87lnamx/free-hm-kash-1023-m-s-retail-original-imafh9cvv8t4wycu.jpeg?dl=0",
                "Image2": "https://www.dropbox.com/s/zcajxdte8fwkqp5/free-hm-kash-1023-m-s-retail-original-imafh9cvkghrphwc.jpeg?dl=0",
                "Image3": "https://www.dropbox.com/s/f8sqpr27625srw3/free-hm-kash-1023-m-s-retail-original-imafh9cvsq7hz2uy.jpeg?dl=0",
                "Image4": "https://www.dropbox.com/s/4wqcodp5ylx2zqh/free-hm-kash-1023-m-s-retail-original-imafh9cvszkws8dz.jpeg?dl=0",
                "Qty": 1,
                "Size": "FREE",
                "Color": "BLUE",
                "Fabric": "ART SILK ",
                "Vendor_SKU": "HM-RL-1023_A"
            },
            {
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
            },
            {
                "Title": " ",
                "Description": "Mahavir sarees  Present.. It is Dark Blue color Kanjivaram silk saree with exclusive thread zari border and zari Rich pallu. Saree has heavy skirt border look. This saree comes with unstitched silk Blue colour blouse. Blouse which is shown on model is only for modeling purpose.",
                "Listing_Price": 3750,
                "Selling_Price": 750,
                "Category": null,
                "Brand": "MAHAVIR ",
                "Service_Type": 1,
                "Image1": "https://www.dropbox.com/s/q43vngom87lnamx/free-hm-kash-1023-m-s-retail-original-imafh9cvv8t4wycu.jpeg?dl=0",
                "Image2": "https://www.dropbox.com/s/zcajxdte8fwkqp5/free-hm-kash-1023-m-s-retail-original-imafh9cvkghrphwc.jpeg?dl=0",
                "Image3": "https://www.dropbox.com/s/f8sqpr27625srw3/free-hm-kash-1023-m-s-retail-original-imafh9cvsq7hz2uy.jpeg?dl=0",
                "Image4": "https://www.dropbox.com/s/4wqcodp5ylx2zqh/free-hm-kash-1023-m-s-retail-original-imafh9cvszkws8dz.jpeg?dl=0",
                "Qty": 1,
                "Size": "FREE",
                "Color": "BLUE",
                "Fabric": "ART SILK ",
                "Vendor_SKU": "HM-RL-1023_A"
            },
            {
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
            },
            {
                "Title": "Mahavir Woven Kanjivaram Art Silk Saree ",
                "Description": "Mahavir sarees  Present.. It is Dark Blue color Kanjivaram silk saree with exclusive thread zari border and zari Rich pallu. Saree has heavy skirt border look. This saree comes with unstitched silk Blue colour blouse. Blouse which is shown on model is only for modeling purpose.",
                "Listing_Price": 3750,
                "Selling_Price": 750,
                "Category": null,
                "Brand": "MAHAVIR ",
                "Service_Type": 1,
                "Image1": "https://www.dropbox.com/s/q43vngom87lnamx/free-hm-kash-1023-m-s-retail-original-imafh9cvv8t4wycu.jpeg?dl=0",
                "Image2": "https://www.dropbox.com/s/zcajxdte8fwkqp5/free-hm-kash-1023-m-s-retail-original-imafh9cvkghrphwc.jpeg?dl=0",
                "Image3": "https://www.dropbox.com/s/f8sqpr27625srw3/free-hm-kash-1023-m-s-retail-original-imafh9cvsq7hz2uy.jpeg?dl=0",
                "Image4": "https://www.dropbox.com/s/4wqcodp5ylx2zqh/free-hm-kash-1023-m-s-retail-original-imafh9cvszkws8dz.jpeg?dl=0",
                "Qty": 1,
                "Size": "FREE",
                "Color": "BLUE",
                "Fabric": "ART SILK ",
                "Vendor_SKU": "HM-RL-1023_A"
            },
            {
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
            },
            {
                "Title": "Mahavir Woven Kanjivaram Art Silk Saree ",
                "Description": "Mahavir sarees  Present.. It is Dark Blue color Kanjivaram silk saree with exclusive thread zari border and zari Rich pallu. Saree has heavy skirt border look. This saree comes with unstitched silk Blue colour blouse. Blouse which is shown on model is only for modeling purpose.",
                "Listing_Price": 3750,
                "Selling_Price": 750,
                "Category": null,
                "Brand": "MAHAVIR ",
                "Service_Type": 1,
                "Image1": "https://www.dropbox.com/s/q43vngom87lnamx/free-hm-kash-1023-m-s-retail-original-imafh9cvv8t4wycu.jpeg?dl=0",
                "Image2": "https://www.dropbox.com/s/zcajxdte8fwkqp5/free-hm-kash-1023-m-s-retail-original-imafh9cvkghrphwc.jpeg?dl=0",
                "Image3": "https://www.dropbox.com/s/f8sqpr27625srw3/free-hm-kash-1023-m-s-retail-original-imafh9cvsq7hz2uy.jpeg?dl=0",
                "Image4": "https://www.dropbox.com/s/4wqcodp5ylx2zqh/free-hm-kash-1023-m-s-retail-original-imafh9cvszkws8dz.jpeg?dl=0",
                "Qty": 1,
                "Size": "FREE",
                "Color": "BLUE",
                "Fabric": "ART SILK ",
                "Vendor_SKU": "HM-RL-1023_A"
            },
            {
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
            },
            {
                "Title": "Mahavir Woven Kanjivaram Art Silk Saree ",
                "Description": "Mahavir sarees  Present.. It is Dark Blue color Kanjivaram silk saree with exclusive thread zari border and zari Rich pallu. Saree has heavy skirt border look. This saree comes with unstitched silk Blue colour blouse. Blouse which is shown on model is only for modeling purpose.",
                "Listing_Price": 3750,
                "Selling_Price": 750,
                "Category": null,
                "Brand": "MAHAVIR ",
                "Service_Type": 1,
                "Image1": "https://www.dropbox.com/s/q43vngom87lnamx/free-hm-kash-1023-m-s-retail-original-imafh9cvv8t4wycu.jpeg?dl=0",
                "Image2": "https://www.dropbox.com/s/zcajxdte8fwkqp5/free-hm-kash-1023-m-s-retail-original-imafh9cvkghrphwc.jpeg?dl=0",
                "Image3": "https://www.dropbox.com/s/f8sqpr27625srw3/free-hm-kash-1023-m-s-retail-original-imafh9cvsq7hz2uy.jpeg?dl=0",
                "Image4": "https://www.dropbox.com/s/4wqcodp5ylx2zqh/free-hm-kash-1023-m-s-retail-original-imafh9cvszkws8dz.jpeg?dl=0",
                "Qty": 1,
                "Size": "FREE",
                "Color": "BLUE",
                "Fabric": "ART SILK ",
                "Vendor_SKU": "HM-RL-1023_A"
            },
            {
                "Title": "Men's casual long sleeve T-shirt",
                "Description": "Men's casual long sleeve T-shirt with V-neck, 100% cotton",
                "Listing_Price": null,
                "Selling_Price": null,
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
            },
            {
                "Title": null
            }
        ];
        dataToValidate.forEach(arrVal => {
            result = Joi.validate(arrVal, schema);
            if (result.error === null) {
                arrVal["isValid"] = true;
            } else {
                arrVal["isValid"] = false;
            }
        });
        console.log('dataToValidate---', dataToValidate);
    }
};

module.exports = utilsFunctions;