require("dotenv").config();
const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const User = require("../models/user.js");

const MONGO_URL = process.env.ATLASDB_URL || "mongodb://127.0.0.1:27017/Wanderlust";

main().then(() => {
  console.log("Connection Successful");
}).catch((err) => {
  console.log(err);
});

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // Clear existing data
  await Listing.deleteMany({});
  await Review.deleteMany({});

  console.log("Cleared existing listings and reviews.");

  // Find or create a default owner
  let defaultOwner;
  try {
    const users = await User.find({}).limit(1);
    if (users.length > 0) {
      defaultOwner = users[0]._id;
      console.log(`Using existing user as owner: ${users[0].username}`);
    }
  } catch (e) {
    console.log("No existing users found, creating listings without valid owner ref.");
  }

  // If no users exist, use a placeholder ObjectId
  if (!defaultOwner) {
    defaultOwner = new mongoose.Types.ObjectId("68afe9fdeff2bddd9dae8df3");
    console.log("Using placeholder owner ID.");
  }

  for (const item of initdata.data) {
    // Extract sample reviews before creating listing
    const sampleReviews = item.sampleReviews || [];
    delete item.sampleReviews;

    // Create the listing
    const listing = new Listing({
      ...item,
      owner: defaultOwner,
    });

    // Create reviews for this listing
    for (const reviewData of sampleReviews) {
      const review = new Review({
        comment: reviewData.comment,
        rating: reviewData.rating,
        author: defaultOwner,
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000), // Random date within last 30 days
      });
      await review.save();
      listing.reviews.push(review._id);
    }

    await listing.save();
    console.log(`✅ Created: ${listing.title} (${sampleReviews.length} reviews)`);
  }

  console.log(`\n🎉 Database initialized with ${initdata.data.length} listings and reviews!`);
  process.exit(0);
};

initDB();
