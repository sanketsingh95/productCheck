const express = require("express");
const multer = require("multer");

const router = new express.Router();

var controller = require("./controllers/validateController");

// BULK UPLOAD ROUTES
router.get("/test", controller.testController);
router.get("/validateProducts", controller.validateProducts);

module.exports = router;
