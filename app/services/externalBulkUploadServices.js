var mongoose = require("mongoose");
const User = require("../models/user");
//const request=require('sync-request');
const request = require("request-promise");

const externalBulkUploadServices = {};

module.exports = externalBulkUploadServices;
