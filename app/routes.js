const express = require("express");
const multer = require("multer");

const router = new express.Router();

var controller = require("./controllers/bulkUploadController");

// MULTER CONFIG
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./csv");
  },
  filename: (req, file, cb) => {
    console.log("FILE =>", file);
    // let fileName = file.originalname + "_" + Date.now() + ".csv";
    let fileName = file.originalname;

    cb(null, fileName);
    req._fileName = fileName;
  }
});

let CSVBulkUpload = multer({
  storage: storage
});

// BULK UPLOAD ROUTES
router.get("/test", controller.testControllerFun);
router.post("/bulkUpload", CSVBulkUpload.single("file"), controller.bulkUpload);
router.patch("/editProductDetails", controller.editProductDetails);

module.exports = router;
