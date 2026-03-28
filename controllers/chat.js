const Listing = require("../models/listing");
const Review = require("../models/review");

// Travel knowledge base for general queries
const travelKnowledge = {
  greetings: [
    "Hey there, fellow traveler! 🌍 How can I help you today?",
    "Hello! Welcome to WanderLand! ✈️ Ask me about places, hotels, or travel tips!",
    "Hi! I'm your WanderLand travel buddy! 🗺️ What would you like to explore?",
  ],
  farewell: [
    "Happy travels! 🌟 Come back anytime you need help!",
    "Bon voyage! ✈️ Hope to see you again soon!",
    "Safe travels! 🌍 Don't forget to leave reviews on places you visit!",
  ],
  thanks: [
    "You're welcome! 😊 Let me know if there's anything else!",
    "Glad I could help! ✨ Happy exploring!",
    "Anytime! 🎉 Enjoy your adventures!",
  ],
  tips: [
    "💡 **Travel Tip:** Always book accommodations in advance during peak season to get the best deals!",
    "💡 **Travel Tip:** Try local street food — it's often the most authentic and affordable way to experience a culture!",
    "💡 **Travel Tip:** Pack light and leave room for souvenirs. A carry-on is often enough for a week!",
    "💡 **Travel Tip:** Always keep digital copies of your important documents in cloud storage.",
    "💡 **Travel Tip:** Learn a few basic phrases in the local language — locals really appreciate the effort!",
    "💡 **Travel Tip:** Visit popular tourist spots early in the morning to avoid crowds.",
  ],
  budget: [
    "💰 **Budget Travel:** Look for hostels, homestays, and Airbnbs for affordable stays. Cooking your own meals can save a lot!",
    "💰 **Budget Travel:** Travel during the shoulder season (just before/after peak) for lower prices and fewer crowds.",
    "💰 **Budget Travel:** Use public transport instead of taxis — it's cheaper and gives you a more authentic experience!",
  ],
  safety: [
    "🛡️ **Safety Tip:** Always share your itinerary with someone you trust and keep emergency contacts handy.",
    "🛡️ **Safety Tip:** Keep your valuables in a hotel safe and carry only what you need for the day.",
    "🛡️ **Safety Tip:** Research local customs and dress codes before visiting religious or cultural sites.",
  ],
  packing: [
    "🎒 **Packing Tip:** Roll your clothes instead of folding — it saves space and reduces wrinkles!",
    "🎒 **Packing Tip:** Always pack a universal power adapter, portable charger, and reusable water bottle.",
    "🎒 **Packing Tip:** Bring a small first-aid kit with basic medicines, band-aids, and sunscreen.",
  ],
};

// AI's OWN curated recommendations — hotels NOT necessarily in the database
const ownRecommendations = {
  luxury: [
    { name: "The Ritz Paris", location: "Paris, France", price: "₹85,000/night", why: "Iconic palace hotel on Place Vendôme. Coco Chanel lived here for 34 years. Michelin-starred dining and legendary bar.", url: "https://www.airbnb.com/s/Paris--France" },
    { name: "Aman Tokyo", location: "Tokyo, Japan", price: "₹72,000/night", why: "Minimalist Japanese luxury in the sky. Zen gardens, onsen spa, and panoramic city views from the 33rd floor.", url: "https://www.airbnb.com/s/Tokyo--Japan" },
    { name: "Claridge's", location: "London, UK", price: "₹65,000/night", why: "Art Deco masterpiece in Mayfair. Legendary afternoon tea and the most glamorous lobby in London.", url: "https://www.airbnb.com/s/London--UK" },
    { name: "Four Seasons Bora Bora", location: "Bora Bora, Polynesia", price: "₹1,10,000/night", why: "Overwater bungalows with glass floors, private beach, and Mount Otemanu views. The ultimate tropical escape.", url: "https://www.airbnb.com/s/Bora-Bora" },
  ],
  budget: [
    { name: "Zostel Hostels", location: "Various cities, India", price: "₹500-1500/night", why: "India's largest hostel chain. Clean dorms, great common areas, and perfect for meeting fellow travelers.", url: "https://www.airbnb.com/s/India" },
    { name: "Generator Hostels", location: "Europe (multiple cities)", price: "₹2,500-4,000/night", why: "Stylish hostels across Europe with bars, social events, and prime locations in Berlin, Amsterdam, Paris.", url: "https://www.airbnb.com/s/Europe" },
    { name: "Selina Hostels", location: "Latin America & Asia", price: "₹1,200-3,000/night", why: "Coworking-meets-hostel concept. Surf lessons, yoga, and community vibes in beautiful locations.", url: "https://www.airbnb.com/s/Costa-Rica" },
  ],
  romantic: [
    { name: "Hotel & Spa des Pêcheurs", location: "Corsica, France", price: "₹30,000/night", why: "Private island hotel accessible only by boat. Secluded beaches, Mediterranean cuisine, and total privacy.", url: "https://www.airbnb.com/s/Corsica--France" },
    { name: "Belmond Hotel Caruso", location: "Ravello, Italy", price: "₹48,000/night", why: "11th-century palace on the Amalfi Coast with an infinity pool seemingly floating over the Mediterranean.", url: "https://www.airbnb.com/s/Ravello--Italy" },
    { name: "Jade Mountain", location: "St. Lucia, Caribbean", price: "₹55,000/night", why: "Open-wall suites with private infinity pools and jaw-dropping Piton mountain views. Pure romance.", url: "https://www.airbnb.com/s/St-Lucia" },
  ],
  adventure: [
    { name: "Longitude 131°", location: "Uluru, Australia", price: "₹90,000/night", why: "Luxury tented camp with views of Ayers Rock. Indigenous cultural experiences and outback stargazing.", url: "https://www.airbnb.com/s/Uluru--Australia" },
    { name: "Pacuare Lodge", location: "Costa Rica", price: "₹35,000/night", why: "Accessible only by white-water rafting! Canopy suite in the jungle with zip-line access. Truly wild luxury.", url: "https://www.airbnb.com/s/Pacuare--Costa-Rica" },
    { name: "Shipwreck Lodge", location: "Skeleton Coast, Namibia", price: "₹28,000/night", why: "Cabins shaped like shipwrecks on the remote Skeleton Coast. Desert-adapted wildlife and ethereal landscapes.", url: "https://www.airbnb.com/s/Namibia" },
  ],
  india: [
    { name: "Wildflower Hall, Shimla", location: "Shimla, India", price: "₹25,000/night", why: "Former residence of Lord Kitchener at 8,250ft. Cedar forests, mountain views, and world-class spa.", url: "https://www.airbnb.com/s/Shimla--India" },
    { name: "Kumarakom Lake Resort", location: "Kerala, India", price: "₹18,000/night", why: "Heritage bungalows on Vembanad Lake. Houseboat rides, Ayurvedic spa, infinity pool, and Kerala backwater cuisine.", url: "https://www.airbnb.com/s/Kumarakom--India" },
    { name: "The Leela Palace Jaipur", location: "Jaipur, India", price: "₹22,000/night", why: "Royal Rajasthani grandeur. Stunning architecture inspired by Jaipur's palaces. Near Amer Fort and Jantar Mantar.", url: "https://www.airbnb.com/s/Jaipur--India" },
    { name: "Evolve Back Coorg", location: "Coorg, Karnataka", price: "₹28,000/night", why: "Private pool villas in coffee plantations. Misty hills, spice garden walks, and authentic Kodava cuisine.", url: "https://www.airbnb.com/s/Coorg--India" },
    { name: "Rambagh Palace Jaipur", location: "Jaipur, India", price: "₹35,000/night", why: "Former residence of the Maharaja of Jaipur. Mughal gardens, peacock-filled grounds, and royal dining.", url: "https://www.airbnb.com/s/Jaipur--India" },
  ],
};

// Keyword patterns for intent detection
const intentPatterns = {
  recommend: /recommend|suggest|best|top|popular|where\s+should|what\s+place|good\s+place|must\s+visit|worth\s+visiting/i,
  feedback: /feedback|review|rating|what\s+people\s+say|how\s+is|opinions?\s+on|experience\s+at/i,
  hotel: /hotel|stay|accommodation|lodge|resort|hostel|room|book|where\s+to\s+stay|place\s+to\s+stay/i,
  price: /price|cost|budget|cheap|expensive|affordable|how\s+much|rate|per\s+night/i,
  location: /location|where|address|area|near|nearby|in\s+\w+|country|city|destination/i,
  greeting: /^(hi|hello|hey|howdy|greetings|hola|namaste|sup|yo|good\s+(morning|afternoon|evening))/i,
  farewell: /^(bye|goodbye|see\s+you|take\s+care|ciao|later|gotta\s+go|thanks?\s+bye)/i,
  thanks: /^(thanks?|thank\s+you|thx|appreciate|grateful)/i,
  tips: /tip|advice|guide|help\s+me|what\s+should|how\s+to\s+travel|travel\s+hack/i,
  budget: /budget|save\s+money|cheap\s+travel|low\s+cost|backpack/i,
  safety: /safe|safety|danger|secure|precaution|careful/i,
  packing: /pack|luggage|bag|suitcase|carry|bring|what\s+to\s+take/i,
  explore: /explore|discover|visit|see|tour|trip|travel|wander|adventure/i,
  list: /list|show\s+all|all\s+places|all\s+listings|everything|what\s+do\s+you\s+have/i,
  luxury: /luxury|luxurious|premium|5\s*star|five\s*star|high\s*end|splurge|royal|palace/i,
  romantic: /romantic|honeymoon|couple|anniversary|valentine|love|date\s+night/i,
  adventure: /adventure|thrill|extreme|trek|hike|safari|wild|jungle|dive|surf/i,
  booking: /book|reserve|reservation|airbnb|how\s+to\s+book|booking/i,
};

// Extract location/place keywords from user message
function extractKeywords(message) {
  // Remove common words
  const stopWords = new Set([
    "the", "a", "an", "is", "are", "was", "were", "be", "been", "being",
    "have", "has", "had", "do", "does", "did", "will", "would", "could",
    "should", "may", "might", "can", "shall", "must", "need", "dare",
    "i", "me", "my", "we", "our", "you", "your", "he", "she", "it",
    "they", "them", "their", "this", "that", "these", "those", "what",
    "which", "who", "whom", "where", "when", "why", "how", "any", "some",
    "about", "for", "with", "from", "into", "to", "in", "on", "at", "by",
    "of", "and", "or", "but", "not", "no", "so", "if", "than", "too",
    "very", "just", "also", "more", "most", "much", "many", "all",
    "recommend", "suggest", "tell", "show", "find", "give", "get",
    "want", "like", "love", "best", "good", "great", "nice", "top",
    "place", "places", "hotel", "hotels", "stay", "review", "reviews",
    "feedback", "rating", "price", "cost", "cheap", "expensive",
    "please", "thanks", "thank", "help", "me", "know",
  ]);

  const words = message
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, "")
    .split(/\s+/)
    .filter(w => w.length > 2 && !stopWords.has(w));

  return words;
}

// Calculate relevance score for a listing against keywords
function scoreListing(listing, keywords) {
  let score = 0;
  const title = (listing.title || "").toLowerCase();
  const description = (listing.description || "").toLowerCase();
  const location = (listing.location || "").toLowerCase();
  const country = (listing.country || "").toLowerCase();

  for (const keyword of keywords) {
    if (title.includes(keyword)) score += 10;
    if (location.includes(keyword)) score += 8;
    if (country.includes(keyword)) score += 8;
    if (description.includes(keyword)) score += 3;
  }

  return score;
}

// Format price in INR
function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

// Generate star rating display
function starRating(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return "★".repeat(full) + (half ? "½" : "") + "☆".repeat(empty);
}

// Random pick from array
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Format listing as a card-like response
function formatListingCard(listing) {
  const bookLink = listing.bookingUrl
    ? `\n🔗 [View Details](/listings/${listing._id}) | [Book on Airbnb](${listing.bookingUrl})`
    : `\n🔗 [View Details](/listings/${listing._id})`;
  return `🏠 **${listing.title}**\n📍 ${listing.location}, ${listing.country}\n💰 ${formatPrice(listing.price)}/night\n📝 ${listing.description ? listing.description.substring(0, 100) + '...' : 'No description'}${bookLink}`;
}

// Format AI's own recommendation (not from DB)
function formatOwnRec(rec) {
  return `🌟 **${rec.name}**\n📍 ${rec.location}\n💰 ${rec.price}\n💎 ${rec.why}\n🔗 [Search on Airbnb](${rec.url})`;
}

// Main chat handler
module.exports.handleChat = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message || message.trim().length === 0) {
      return res.json({ response: "Please type a message! 😊", type: "text" });
    }

    const userMessage = message.trim();
    const keywords = extractKeywords(userMessage);

    // Check for greetings
    if (intentPatterns.greeting.test(userMessage)) {
      return res.json({
        response: randomPick(travelKnowledge.greetings),
        type: "text",
        suggestions: ["Recommend places", "Show hotels", "Travel tips", "Budget travel"],
      });
    }

    // Check for farewell
    if (intentPatterns.farewell.test(userMessage)) {
      return res.json({ response: randomPick(travelKnowledge.farewell), type: "text" });
    }

    // Check for thanks
    if (intentPatterns.thanks.test(userMessage)) {
      return res.json({
        response: randomPick(travelKnowledge.thanks),
        type: "text",
        suggestions: ["Recommend places", "Travel tips", "Show hotels"],
      });
    }

    // Safety tips
    if (intentPatterns.safety.test(userMessage) && !intentPatterns.recommend.test(userMessage)) {
      return res.json({
        response: randomPick(travelKnowledge.safety),
        type: "text",
        suggestions: ["More safety tips", "Packing tips", "Budget travel"],
      });
    }

    // Packing tips
    if (intentPatterns.packing.test(userMessage)) {
      return res.json({
        response: randomPick(travelKnowledge.packing),
        type: "text",
        suggestions: ["Travel tips", "Budget travel", "Recommend places"],
      });
    }

    // Budget travel
    if (intentPatterns.budget.test(userMessage) && !intentPatterns.recommend.test(userMessage) && !intentPatterns.hotel.test(userMessage)) {
      return res.json({
        response: randomPick(travelKnowledge.budget),
        type: "text",
        suggestions: ["Cheap places to stay", "Travel tips", "Recommend places"],
      });
    }

    // General travel tips
    if (intentPatterns.tips.test(userMessage) && !intentPatterns.recommend.test(userMessage) && !intentPatterns.hotel.test(userMessage)) {
      return res.json({
        response: randomPick(travelKnowledge.tips),
        type: "text",
        suggestions: ["More tips", "Safety tips", "Packing tips", "Recommend places"],
      });
    }

    // Database-driven queries: recommendations, feedback, hotels, prices
    // Try to find relevant listings
    let listings = [];
    let searchQuery = {};

    if (keywords.length > 0) {
      // Build OR query across multiple fields
      const orConditions = keywords.flatMap(kw => [
        { title: { $regex: kw, $options: "i" } },
        { description: { $regex: kw, $options: "i" } },
        { location: { $regex: kw, $options: "i" } },
        { country: { $regex: kw, $options: "i" } },
      ]);
      searchQuery = { $or: orConditions };
    }

    listings = await Listing.find(searchQuery)
      .populate({
        path: "reviews",
        populate: { path: "author" },
      })
      .populate("owner")
      .limit(20);

    // If no keyword matches, get all listings
    if (listings.length === 0 && keywords.length > 0) {
      listings = await Listing.find({})
        .populate({
          path: "reviews",
          populate: { path: "author" },
        })
        .populate("owner")
        .limit(20);
    }

    // Score and sort listings by relevance
    if (keywords.length > 0) {
      listings = listings
        .map(l => ({ listing: l, score: scoreListing(l, keywords) }))
        .sort((a, b) => b.score - a.score)
        .map(item => item.listing);
    }

    // Feedback/Review intent
    if (intentPatterns.feedback.test(userMessage)) {
      const relevantListings = listings.filter(l => l.reviews && l.reviews.length > 0).slice(0, 3);

      if (relevantListings.length === 0) {
        return res.json({
          response: "I couldn't find reviews for that specific place. 😕 Try searching for a different location, or check out our [all listings](/listings) page to browse available places!",
          type: "text",
          suggestions: ["Show all places", "Recommend places", "Travel tips"],
        });
      }

      let response = "📊 **Reviews & Feedback:**\n\n";
      for (const listing of relevantListings) {
        const avgRating = listing.reviews.reduce((sum, r) => sum + r.rating, 0) / listing.reviews.length;
        response += `🏠 **${listing.title}** — ${listing.location}, ${listing.country}\n`;
        response += `⭐ Average: ${avgRating.toFixed(1)}/5 ${starRating(avgRating)} (${listing.reviews.length} reviews)\n`;

        // Show top 2 reviews
        const topReviews = listing.reviews.slice(0, 2);
        for (const rev of topReviews) {
          const authorName = rev.author ? rev.author.username : "Anonymous";
          response += `   💬 *"${rev.comment}"* — @${authorName} (${starRating(rev.rating)})\n`;
        }
        response += `🔗 [See all reviews](/listings/${listing._id})\n\n`;
      }

      return res.json({
        response,
        type: "reviews",
        suggestions: ["Recommend places", "Show hotels", "Travel tips"],
      });
    }

    // Hotel/accommodation intent
    if (intentPatterns.hotel.test(userMessage)) {
      const hotelListings = listings.slice(0, 5);

      if (hotelListings.length === 0) {
        return res.json({
          response: "I couldn't find accommodations matching your criteria. 🏨 Try broader search terms like a city or country name!\n\n🔗 [Browse all listings](/listings)",
          type: "text",
          suggestions: ["Show all places", "Budget travel", "Travel tips"],
        });
      }

      let response = "🏨 **Accommodations for you:**\n\n";
      for (const listing of hotelListings) {
        const avgRating = listing.reviews && listing.reviews.length > 0
          ? (listing.reviews.reduce((sum, r) => sum + r.rating, 0) / listing.reviews.length).toFixed(1)
          : "No ratings yet";
        const ratingDisplay = typeof avgRating === "string" ? avgRating : `${avgRating}/5 ${starRating(parseFloat(avgRating))}`;

        response += formatListingCard(listing) + `\n⭐ ${ratingDisplay}\n\n`;
      }

      return res.json({
        response,
        type: "listings",
        suggestions: ["Reviews for these", "Budget options", "Travel tips"],
      });
    }

    // Price/budget intent with listings
    if (intentPatterns.price.test(userMessage)) {
      // Sort by price
      const sortedListings = [...listings].sort((a, b) => a.price - b.price);

      if (intentPatterns.recommend.test(userMessage) || userMessage.toLowerCase().includes("cheap")) {
        // Show cheapest
        const cheapListings = sortedListings.slice(0, 5);
        if (cheapListings.length === 0) {
          return res.json({
            response: "No listings found matching your budget criteria. 💰 Try browsing all our [listings](/listings)!",
            type: "text",
            suggestions: ["Show all places", "Travel tips", "Budget travel"],
          });
        }

        let response = "💰 **Most Affordable Stays:**\n\n";
        for (const listing of cheapListings) {
          response += formatListingCard(listing) + "\n\n";
        }
        return res.json({
          response,
          type: "listings",
          suggestions: ["Show expensive options", "Reviews", "Travel tips"],
        });
      }

      // General price info
      if (sortedListings.length > 0) {
        const cheapest = sortedListings[0];
        const mostExpensive = sortedListings[sortedListings.length - 1];
        const avgPrice = Math.round(sortedListings.reduce((sum, l) => sum + l.price, 0) / sortedListings.length);

        let response = `💰 **Price Overview:**\n\n`;
        response += `📉 Cheapest: **${cheapest.title}** at ${formatPrice(cheapest.price)}/night\n`;
        response += `📈 Most Premium: **${mostExpensive.title}** at ${formatPrice(mostExpensive.price)}/night\n`;
        response += `📊 Average: ${formatPrice(avgPrice)}/night\n\n`;
        response += `🔗 [Browse all listings](/listings)`;

        return res.json({
          response,
          type: "text",
          suggestions: ["Show cheapest", "Show premium", "Recommend places"],
        });
      }
    }

    // Recommend / explore intent
    if (intentPatterns.recommend.test(userMessage) || intentPatterns.explore.test(userMessage)) {
      const topListings = listings.slice(0, 3);
      let response = "🌟 **Recommended for you:**\n\n";

      // Show DB listings first
      if (topListings.length > 0) {
        response += "**📌 From our listings:**\n\n";
        for (const listing of topListings) {
          const avgRating = listing.reviews && listing.reviews.length > 0
            ? `⭐ ${(listing.reviews.reduce((sum, r) => sum + r.rating, 0) / listing.reviews.length).toFixed(1)}/5`
            : "✨ New listing";
          response += formatListingCard(listing) + `\n${avgRating}\n\n`;
        }
      }

      // Add AI's own picks
      const categories = Object.keys(ownRecommendations);
      const matchedCategory = categories.find(cat => userMessage.toLowerCase().includes(cat));
      const picks = matchedCategory
        ? ownRecommendations[matchedCategory]
        : ownRecommendations[categories[Math.floor(Math.random() * categories.length)]];
      const selectedPicks = picks.slice(0, 2);

      response += "\n**💎 My Personal Picks (curated by WanderLand AI):**\n\n";
      for (const rec of selectedPicks) {
        response += formatOwnRec(rec) + "\n\n";
      }

      return res.json({
        response,
        type: "listings",
        suggestions: ["Luxury picks", "Romantic getaways", "Adventure stays", "India hotels"],
      });
    }

    // Luxury intent
    if (intentPatterns.luxury.test(userMessage)) {
      let response = "👑 **Luxury Hotel Picks:**\n\n";

      // DB luxury listings (high price)
      const luxuryListings = listings.filter(l => l.price >= 20000).slice(0, 2);
      if (luxuryListings.length > 0) {
        response += "**📌 On WanderLand:**\n\n";
        for (const listing of luxuryListings) {
          response += formatListingCard(listing) + "\n\n";
        }
      }

      response += "**💎 My Top Luxury Picks:**\n\n";
      for (const rec of ownRecommendations.luxury.slice(0, 3)) {
        response += formatOwnRec(rec) + "\n\n";
      }

      return res.json({
        response,
        type: "listings",
        suggestions: ["Romantic hotels", "Adventure stays", "Budget options", "India hotels"],
      });
    }

    // Romantic intent
    if (intentPatterns.romantic.test(userMessage)) {
      let response = "💕 **Romantic Getaway Picks:**\n\n";

      response += "**💎 Perfect for couples:**\n\n";
      for (const rec of ownRecommendations.romantic) {
        response += formatOwnRec(rec) + "\n\n";
      }

      // Also suggest relevant DB listings
      const romanticListings = listings.filter(l =>
        /villa|palace|retreat|bungalow|suite/i.test(l.title + " " + l.description)
      ).slice(0, 2);

      if (romanticListings.length > 0) {
        response += "**📌 Also on WanderLand:**\n\n";
        for (const listing of romanticListings) {
          response += formatListingCard(listing) + "\n\n";
        }
      }

      return res.json({
        response,
        type: "listings",
        suggestions: ["Luxury hotels", "Maldives stays", "Italy villas", "Santorini"],
      });
    }

    // Adventure intent
    if (intentPatterns.adventure.test(userMessage)) {
      let response = "🏔️ **Adventure & Wild Stays:**\n\n";

      response += "**💎 For thrill seekers:**\n\n";
      for (const rec of ownRecommendations.adventure) {
        response += formatOwnRec(rec) + "\n\n";
      }

      // DB adventure listings
      const adventureListings = listings.filter(l =>
        /safari|treehouse|cabin|lodge|jungle|desert|mountain/i.test(l.title + " " + l.description)
      ).slice(0, 2);

      if (adventureListings.length > 0) {
        response += "**📌 Adventure stays on WanderLand:**\n\n";
        for (const listing of adventureListings) {
          response += formatListingCard(listing) + "\n\n";
        }
      }

      return res.json({
        response,
        type: "listings",
        suggestions: ["Safari lodges", "Treehouse stays", "Luxury hotels", "Budget options"],
      });
    }

    // Booking intent
    if (intentPatterns.booking.test(userMessage)) {
      let response = "🔖 **How to Book:**\n\n";
      response += "You can book any listing on WanderLand through **Airbnb**! Here's how:\n\n";
      response += "1️⃣ Browse our [listings](/listings) and find your dream stay\n";
      response += "2️⃣ Click **\"Book on Airbnb\"** on the listing page\n";
      response += "3️⃣ You'll be redirected to Airbnb to complete your reservation\n\n";
      response += "💡 **Tip:** Compare prices across dates on Airbnb for the best deals!\n\n";
      response += "🔗 [Explore all listings](/listings)";

      return res.json({
        response,
        type: "text",
        suggestions: ["Show hotels", "Recommend places", "Budget options", "Travel tips"],
      });
    }

    // List all intent
    if (intentPatterns.list.test(userMessage)) {
      const allListings = await Listing.find({}).limit(10);
      if (allListings.length === 0) {
        return res.json({
          response: "No listings available yet. Be the first to [create one](/listings/new)! 🎉",
          type: "text",
          suggestions: ["Travel tips", "How to create listing"],
        });
      }

      let response = `📋 **All Available Places (${allListings.length}):**\n\n`;
      for (const listing of allListings) {
        response += `• **${listing.title}** — ${listing.location}, ${listing.country} (${formatPrice(listing.price)}/night)\n`;
      }
      response += `\n🔗 [View all on Explore page](/listings)`;

      return res.json({
        response,
        type: "listings",
        suggestions: ["Recommend best", "Cheapest stays", "Reviews"],
      });
    }

    // Fallback — try to find something relevant or give general help
    if (listings.length > 0 && keywords.length > 0) {
      const topMatch = listings[0];
      const score = scoreListing(topMatch, keywords);

      if (score > 0) {
        let response = `I found something that might interest you! 🔍\n\n`;
        response += formatListingCard(topMatch);
        if (topMatch.reviews && topMatch.reviews.length > 0) {
          const avgRating = (topMatch.reviews.reduce((sum, r) => sum + r.rating, 0) / topMatch.reviews.length).toFixed(1);
          response += `\n⭐ ${avgRating}/5 (${topMatch.reviews.length} reviews)`;
        }

        return res.json({
          response,
          type: "listing",
          suggestions: ["More like this", "Reviews", "Other places", "Travel tips"],
        });
      }
    }

    // Generic fallback
    return res.json({
      response: `I'm not sure I understood that completely! 🤔 Here's what I can help with:\n\n🏠 **Place Recommendations** — "Recommend places in India"\n📊 **Reviews & Feedback** — "Reviews for beach stays"\n🏨 **Hotels & Stays** — "Hotels in Malibu"\n💰 **Budget Info** — "Cheapest places to stay"\n💡 **Travel Tips** — "Give me travel tips"\n🛡️ **Safety** — "Safety tips for solo travel"\n🎒 **Packing** — "What should I pack?"\n\nTry asking something specific! 😊`,
      type: "help",
      suggestions: ["Recommend places", "Show hotels", "Travel tips", "Budget travel"],
    });

  } catch (error) {
    console.error("Chat error:", error);
    return res.json({
      response: "Oops! Something went wrong on my end. 😅 Please try again!",
      type: "error",
      suggestions: ["Try again", "Show hotels", "Travel tips"],
    });
  }
};

// Suggestions endpoint
module.exports.getSuggestions = async (req, res) => {
  try {
    // Get some stats
    const listingCount = await Listing.countDocuments();
    const reviewCount = await Review.countDocuments();

    res.json({
      suggestions: [
        "Recommend places",
        "Show hotels",
        "Travel tips",
        "Budget travel",
        "Safety tips",
        "Packing tips",
      ],
      stats: {
        listings: listingCount,
        reviews: reviewCount,
      },
    });
  } catch (error) {
    res.json({
      suggestions: ["Recommend places", "Show hotels", "Travel tips", "Budget travel"],
      stats: { listings: 0, reviews: 0 },
    });
  }
};
