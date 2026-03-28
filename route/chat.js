const express = require("express");
const router = express.Router();
const { handleChat, getSuggestions } = require("../controllers/chat.js");

// Handle chat messages
router.post("/", handleChat);

// Get suggestions
router.get("/suggestions", getSuggestions);

module.exports = router;
