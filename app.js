if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./util/expresserror.js");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const User = require("./models/user.js");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// Import Routes
const listingRoutes = require("./route/listing.js");
const reviewRoutes = require("./route/review.js");
const userRoutes = require("./route/user.js");
const generalRoutes = require("./route/general.js");
const favoriteRoutes = require("./route/favorite.js");
const chatRoutes = require("./route/chat.js");

// --- 1. Database Connection (Background Process) ---
const urldb = process.env.ATLASDB_URL;

async function main() {
  try {
    await mongoose.connect(urldb);
    console.log("Connection Successful");
  } catch (err) {
    console.log("Database connection failed:", err);
  }
}
main(); // Start connection immediately but don't block the rest of the file

// --- 2. App Configuration (Must run immediately) ---
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

// --- 3. Session Store ---
const store = MongoStore.create({
  mongoUrl: urldb,
  crypto: {
    secret: process.env.SECRET,
  },
  touchAfter: 24 * 60 * 60,
});

store.on("error", function (e) {
  console.log("Session Store Error", e);
});

const sessionOption = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(session(sessionOption));
app.use(flash());

// --- 4. Authentication ---
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    proxy: true
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
        let user = await User.findOne({ googleId: profile.id });
        if (!user) {
            user = await User.findOne({ email: profile.emails[0].value });
            if (user) {
                user.googleId = profile.id;
                user.isVerified = true;
                user.isGoogleUser = true;
                await user.save();
            } else {
                // Create the user if they don't exist
                user = new User({
                    googleId: profile.id,
                    username: profile.displayName.replace(/\s+/g, '').toLowerCase() + Math.floor(Math.random() * 1000),
                    email: profile.emails[0].value,
                    isVerified: true,
                    isGoogleUser: true
                });
                await user.save();
                // Mark this as a new registration for the controller
                user._isNewUser = true;
            }
        }
        return done(null, user);
    } catch (err) {
        return done(err, null);
    }
  }
));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  res.locals.path = req.path; // Make current path available to templates
  next();
});

// --- 5. Routes (Defined Globally) ---
app.get("/", (req, res) => {
  res.redirect("/home");
});

const { HomeList } = require("./controllers/listing.js");
app.get("/home", HomeList);

app.use("/listings", listingRoutes);
app.use("/listings/:id/reviews", reviewRoutes);
app.use("/", userRoutes);
app.use("/", generalRoutes);
app.use("/favorites", favoriteRoutes);
app.use("/chat", chatRoutes);

// --- 6. Error Handling ---
app.use((req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  let { message = "Something Went Wrong!!", status = 500 } = err;
  res.status(status).render("error.ejs", { err });
});

// --- 7. Server Listener (Only for Local Development) ---
if (require.main === module) {
  app.listen(3000, () => {
    console.log("Server is running locally on port 3000");
  });
}

// --- 8. Export for Vercel ---
module.exports = app;