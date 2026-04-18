const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../util/wrapAsync.js");
const passport = require("passport");
const { saveredircturl, isLoggedIn } = require("../middleware.js");
const { PostUser, LoginUser, LogoutUser, forgotPassword, resetPassword, GoogleCallback, renderSettings, changePassword, deleteAccount } = require("../controllers/user.js");
const { resendOTP, verifyOTP } = require("../controllers/otp.js");

// Middleware to trim input fields
const trimInput = (req, res, next) => {
    if (req.body.username) req.body.username = req.body.username.trim();
    if (req.body.email) req.body.email = req.body.email.trim();
    next();
};


//Signup form  & Signup logic
router.route("/signup")
.get((req, res) => {
    res.render("users/signup");
})
.post(trimInput, wrapAsync(PostUser));

//Login form & Login logic
router.route("/login")
.get((req, res) => {
    res.render("users/login");
})
.post(trimInput, saveredircturl, passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true
}), LoginUser);

//OTP verification routes
router.route("/verify-otp")
.get((req, res) => {
    res.render("users/verify-otp");
})
.post(wrapAsync(verifyOTP));

//Resend OTP
router.get("/resend-otp", wrapAsync(resendOTP));

//Logout logic
router.get("/logout", LogoutUser);

// Settings routes
router.get("/settings", isLoggedIn, renderSettings);
router.post("/settings/change-password", isLoggedIn, wrapAsync(changePassword));
router.post("/settings/delete-account", isLoggedIn, wrapAsync(deleteAccount));

// Google Auth routes
router.get("/auth/google", (req, res, next) => {
    const { from } = req.query;
    passport.authenticate("google", { 
        scope: ["profile", "email"],
        state: from // Use state to pass the 'from' parameter
    })(req, res, next);
});

router.get("/auth/google/callback", 
    saveredircturl,
    passport.authenticate("google", { failureRedirect: "/login", failureFlash: true }),
    GoogleCallback
);

//Forgot password routes
router.route("/forgot-password")
.get((req, res) => {
    res.render("users/forgot-password");
})
.post(trimInput, wrapAsync(forgotPassword));

//Reset password routes
router.route("/reset-password")
.get((req, res) => {
    res.render("users/reset-password");
})
.post(wrapAsync(resetPassword));

module.exports = router;
