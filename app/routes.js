const express = require("express");
const multer = require("multer");

const router = new express.Router();

var controller = require("./controllers/bulkUploadController");

// BULK UPLOAD ROUTES
router.get("/test", controller.testController);
module.exports = router;
