const User = require("../models/user.js");
const { sendOTP } = require("../util/email.js");
const otpGenerator = require("otp-generator");

//Signup logic
module.exports.PostUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
       const registeredUser = await User.register(newUser, password);

        // Generate OTP
        const otp = otpGenerator.generate(6, { upperCaseAlphabets: false, lowerCaseAlphabets: false, specialChars: false });
        registeredUser.otp = otp;
        registeredUser.otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes
        await registeredUser.save();

        // Send OTP email
        await sendOTP(registeredUser.email, otp);

        // Log OTP for development testing
        if (process.env.NODE_ENV !== 'production') {
            console.log(`\n=== SIGNUP OTP ===`);
            console.log(`Email: ${registeredUser.email}`);
            console.log(`OTP: ${otp}`);
            console.log(`Expires: ${registeredUser.otpExpires}`);
            console.log(`==================\n`);
        }

        // Store email in session for OTP verification
        req.session.pendingVerificationEmail = registeredUser.email;

        req.flash("success", "OTP sent to your email. Please verify to complete signup.");
        res.redirect("/verify-otp");
    } catch (error) {
        console.error('Signup error:', error);
        req.flash("error", error.message);
        res.redirect("/signup");
    }
};

//Login logic
module.exports.LoginUser = (req, res) => {
    if (!req.user.isVerified) {
        req.logout((err) => {
            if (err) {
                console.log('Logout error:', err);
            }
            req.flash("error", "Please verify your email before logging in.");
            return res.redirect("/login");
        });
    } else {
        req.flash("success", "Welcome back to WanderLand!");
        res.redirect(res.locals.redirectUrl || "/listings");
    }
};

//Logout logic
module.exports.LogoutUser = (req, res, next) => {
    req.logout(function(err) {
        if (err) {
            req.flash("error", "Logout failed");
            return res.redirect("/listings");
        }
        req.flash("success", "Logged you out!");
        res.redirect("/listings");
      });
}

//Forgot password logic
module.exports.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            req.flash("error", "No account with that email address exists.");
            return res.redirect("/forgot-password");
        }

        // Set session for password reset
        req.session.pendingVerificationEmail = user.email;

        req.flash("success", "Please set your new password.");
        res.redirect("/reset-password");
    } catch (error) {
        console.error('Forgot password error:', error);
        req.flash("error", "Failed to process request. Please try again.");
        res.redirect("/forgot-password");
    }
}

//Reset password logic
module.exports.resetPassword = async (req, res) => {
    try {
        const { password } = req.body;
        const email = req.session.pendingVerificationEmail;
        if (!email) {
            req.flash("error", "Session expired. Please try again.");
            return res.redirect("/forgot-password");
        }

        const user = await User.findOne({ email });
        if (!user) {
            req.flash("error", "User not found.");
            return res.redirect("/forgot-password");
        }

        // Update password
        await user.setPassword(password);
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        // Clear session
        delete req.session.pendingPasswordReset;
        delete req.session.pendingVerificationEmail;

        req.flash("success", "Password reset successfully. Please log in with your new password.");
        res.redirect("/login");
    } catch (error) {
        console.error('Reset password error:', error);
        req.flash("error", "Failed to reset password. Please try again.");
        res.redirect("/reset-password");
    }
}
