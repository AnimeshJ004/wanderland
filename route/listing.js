const express = require("express");
const router = express.Router();
const listing = require("../models/listing.js");
const wrapAsync = require("../util/wrapAsync.js");
const { isLoggedIn , isOwner , validatelisting } = require("../middleware.js");
const { index , NewList , ShowList , CreateList , EditList , 
         UpdateList , DeleteList} = require("../controllers/listing.js");

const multer = require('multer');
const { storage } = require("../cloudconfig.js");
const upload = multer({storage}); // Set the destination folder for uploads

//Index Route
router.get("/" , wrapAsync(index));
//New Route
router.get("/new" ,isLoggedIn,NewList);
//Show Route
router.get("/:id" , ShowList);
//Create Route
router.post("/" , upload.array('listing[image]', 10), validatelisting, isLoggedIn, CreateList);
//Edit Route
router.get("/:id/edit", isLoggedIn, isOwner, EditList);
//Update route
router.put("/:id", upload.array('listing[image]', 10), validatelisting, isLoggedIn, isOwner, UpdateList);
//Delete Route
router.delete("/:id" , isLoggedIn, isOwner ,DeleteList);

module.exports = router;
