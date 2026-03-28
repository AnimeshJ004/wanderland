const sampleListings = [
  {
    title: "Taj Lake Palace, Udaipur",
    description:
      "A stunning luxury palace hotel floating on Lake Pichola. Built in 1746, this iconic white marble palace offers royal suites, world-class dining at Neel Kamal restaurant, spa treatments, and breathtaking sunset views over the Aravalli mountains. Every room is adorned with intricate mosaics, silk fabrics, and crystal chandeliers.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1582719508461-905c673771eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 35000,
    location: "Udaipur",
    country: "India",
    bookingUrl: "https://www.airbnb.com/s/Udaipur--India",
    sampleReviews: [
      { comment: "An absolute dream! The floating palace is as magical as it looks in photos. The service was impeccable and the views at sunset are worth every penny.", rating: 5 },
      { comment: "One of the most unique stays in the world. The boat ride to the hotel itself is an experience. Food was exceptional, especially the Rajasthani thali.", rating: 5 },
      { comment: "Beautiful heritage property. Rooms are gorgeous with traditional decor. The pool overlooking the lake is stunning. A must-visit!", rating: 4 },
    ],
  },
  {
    title: "The Oberoi, Shimla",
    description:
      "Perched atop a hill surrounded by virgin forests of pine and cedar, The Oberoi Cecil offers colonial elegance with modern luxury. Features include spa, heated indoor pool, fine dining, and panoramic Himalayan views. Step out to explore Mall Road and the Ridge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 18000,
    location: "Shimla",
    country: "India",
    bookingUrl: "https://www.airbnb.com/s/Shimla--India",
    sampleReviews: [
      { comment: "The colonial architecture is breathtaking. Fireplace in the room was so cozy during winter. The view of snow-capped mountains from the balcony is unforgettable.", rating: 5 },
      { comment: "Perfect winter getaway! The heated pool and spa made our trip so relaxing. Staff were incredibly helpful and courteous.", rating: 4 },
    ],
  },
  {
    title: "Santorini Sunset Villa",
    description:
      "Iconic whitewashed cliff-side villa in Oia with infinity pool overlooking the caldera. Features private terrace, outdoor jacuzzi, fully equipped kitchen, and the most famous sunset view in the Mediterranean. Walking distance to blue-domed churches and artisan shops.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1555993539-1732b0258235?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 22000,
    location: "Oia, Santorini",
    country: "Greece",
    bookingUrl: "https://www.airbnb.com/s/Santorini--Greece",
    sampleReviews: [
      { comment: "The sunset from our private terrace was indescribable. Absolutely the most romantic place I've ever stayed. The infinity pool feels like you're swimming in the sky!", rating: 5 },
      { comment: "Perfect honeymoon destination. The villa is exactly as pictured - stunning white-blue beauty. The caldera view is mesmerizing at every hour.", rating: 5 },
      { comment: "Location is perfect for exploring Oia. Great local restaurants nearby. The villa itself is beautifully designed with traditional Cycladic elements.", rating: 4 },
    ],
  },
  {
    title: "Overwater Bungalow, Maldives",
    description:
      "Exclusive overwater bungalow with glass floor panels revealing the vibrant coral reef beneath. Features private infinity pool, outdoor rain shower, direct ocean access, butler service, and world-class underwater restaurant. Wake up to dolphins playing in the turquoise lagoon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1540202404-a2f29016b523?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 65000,
    location: "Malé Atoll",
    country: "Maldives",
    bookingUrl: "https://www.airbnb.com/s/Maldives",
    sampleReviews: [
      { comment: "This is paradise on Earth! Watching fish through the glass floor in our bungalow was surreal. The snorkeling right off our deck was world-class.", rating: 5 },
      { comment: "Worth every rupee! The butler service was outstanding. Sunset dolphin cruise was magical. The underwater restaurant is a once-in-a-lifetime experience.", rating: 5 },
    ],
  },
  {
    title: "Swiss Alpine Chalet, Zermatt",
    description:
      "Traditional timber chalet with panoramic Matterhorn views. Features log fireplace, sauna, heated boot room, and ski-in/ski-out access to world-class slopes. Après-ski at the hotel's fondue bar. Summer hiking trails start at your doorstep.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 28000,
    location: "Zermatt",
    country: "Switzerland",
    bookingUrl: "https://www.airbnb.com/s/Zermatt--Switzerland",
    sampleReviews: [
      { comment: "The Matterhorn view from the balcony at sunrise is life-changing. The chalet is warm and cozy with authentic Swiss charm. Ski-in/ski-out is incredibly convenient!", rating: 5 },
      { comment: "Perfect for a winter ski trip. The fondue bar is amazing. Hot chocolate by the fireplace after a day on the slopes - pure bliss!", rating: 4 },
    ],
  },
  {
    title: "Riad Yasmine, Marrakech",
    description:
      "An enchanting traditional riad in the heart of the Medina. Features a stunning mosaic-tiled courtyard with a plunge pool, rooftop terrace with Atlas Mountain views, hammam spa, and authentic Moroccan cooking classes. Steps from Jemaa el-Fnaa square.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1548018560-c7196e4604f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 8500,
    location: "Marrakech",
    country: "Morocco",
    bookingUrl: "https://www.airbnb.com/s/Marrakech--Morocco",
    sampleReviews: [
      { comment: "Stepping into this riad feels like entering another world. The mosaic tile work is extraordinary. The rooftop breakfast with mint tea and msemen was heavenly.", rating: 5 },
      { comment: "Great value for money! The cooking class was a highlight. The courtyard pool is Instagram-perfect. Staff arranged a wonderful desert excursion for us.", rating: 4 },
      { comment: "Authentic Moroccan experience in a beautifully restored riad. The hammam spa was so relaxing. Location is ideal for exploring the souk.", rating: 5 },
    ],
  },
  {
    title: "Treehouse Lodge, Costa Rica",
    description:
      "Elevated eco-luxury treehouse in the Monteverde cloud forest canopy. Features private suspension bridge walkway, outdoor rainforest shower, wraparound deck for wildlife watching, and guided night tours. Wake up to howler monkeys and toucans!",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 7500,
    location: "Monteverde",
    country: "Costa Rica",
    bookingUrl: "https://www.airbnb.com/s/Monteverde--Costa-Rica",
    sampleReviews: [
      { comment: "Living in the treetops was an unforgettable experience! Saw sloths, toucans, and hummingbirds right from our deck. The night tour was thrilling.", rating: 5 },
      { comment: "Perfect eco-adventure stay. Loved the outdoor shower surrounded by jungle sounds. Truly feels like you're part of the forest canopy!", rating: 4 },
    ],
  },
  {
    title: "Royal Suite at Burj Al Arab, Dubai",
    description:
      "The world's most luxurious hotel experience. The iconic sail-shaped tower features duplex suites with floor-to-ceiling Gulf views, private butler, Rolls-Royce transfers, helipad access, and 9 world-class restaurants including underwater Al Mahara.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1582719508461-905c673771eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 95000,
    location: "Dubai",
    country: "United Arab Emirates",
    bookingUrl: "https://www.airbnb.com/s/Dubai--UAE",
    sampleReviews: [
      { comment: "The epitome of luxury! Rolls-Royce pickup from the airport, gold-leaf interiors, and a personal butler who remembered every preference. Once in a lifetime!", rating: 5 },
      { comment: "The underwater restaurant was surreal - dining surrounded by an aquarium. Rooms are palatial. The views from the skybar are unmatched. Worth the splurge!", rating: 5 },
    ],
  },
  {
    title: "Bamboo Hut Retreat, Bali",
    description:
      "Handcrafted bamboo villa nestled in the Ubud rice terraces. Features an open-air living space, private infinity pool cascading into the jungle, yoga pavilion, organic farm-to-table dining, and traditional Balinese spa treatments.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 12000,
    location: "Ubud, Bali",
    country: "Indonesia",
    bookingUrl: "https://www.airbnb.com/s/Ubud--Bali--Indonesia",
    sampleReviews: [
      { comment: "The most peaceful place I've ever been. Waking up to rice terrace views was magical. The yoga sessions and Balinese massage were transformative.", rating: 5 },
      { comment: "Absolutely stunning bamboo architecture! The infinity pool seems to merge with the jungle. Farm-to-table dinners were delicious. Pure zen!", rating: 5 },
      { comment: "Great value for such a unique experience. The staff arranged a wonderful temple tour. Monkey Forest is just 15 minutes away. A must-visit retreat!", rating: 4 },
    ],
  },
  {
    title: "Ryokan Inn, Kyoto",
    description:
      "Traditional Japanese ryokan with tatami mat rooms, futon bedding, private onsen (hot spring bath), and kaiseki multi-course dinner. Located in the Higashiyama district near Kiyomizu-dera temple, geisha quarters, and bamboo forests of Arashiyama.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 15000,
    location: "Kyoto",
    country: "Japan",
    bookingUrl: "https://www.airbnb.com/s/Kyoto--Japan",
    sampleReviews: [
      { comment: "An authentic Japanese cultural experience. The kaiseki dinner was a work of art — 12 courses of perfection. The private onsen was incredibly relaxing.", rating: 5 },
      { comment: "Beautiful ryokan with impeccable service. Sleeping on futons in tatami rooms was surprisingly comfortable. The zen garden is so peaceful.", rating: 4 },
    ],
  },
  {
    title: "Safari Lodge, Serengeti",
    description:
      "Luxury tented camp in the heart of the Serengeti. Canvas-walled suites with four-poster beds, private viewing decks, and en-suite bathrooms. Includes guided game drives, bush breakfasts, sundowner cocktails, and front-row seats to the Great Migration.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 45000,
    location: "Serengeti",
    country: "Tanzania",
    bookingUrl: "https://www.airbnb.com/s/Serengeti--Tanzania",
    sampleReviews: [
      { comment: "Saw the Big Five in two days! The bush breakfast surrounded by zebras was surreal. Luxury camping at its finest — hot showers, gourmet food, and zero compromises.", rating: 5 },
      { comment: "The Great Migration was the most incredible natural spectacle. Our guide was phenomenal. Sundowner cocktails on the savanna watching the sunset — unforgettable.", rating: 5 },
    ],
  },
  {
    title: "Houseboat on Dal Lake, Srinagar",
    description:
      "Intricately carved cedarwood houseboat floating on the serene Dal Lake. Features hand-embroidered furnishings, shikaara rides, floating market visits, and Kashmiri wazwan feasts. Surrounded by the majestic Himalayan mountains and Mughal gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 6500,
    location: "Srinagar",
    country: "India",
    bookingUrl: "https://www.airbnb.com/s/Srinagar--India",
    sampleReviews: [
      { comment: "Kashmir is truly heaven on earth! The houseboat is beautifully decorated with traditional woodwork. The shikaara ride at dawn through the floating market was magical.", rating: 5 },
      { comment: "The wazwan dinner was the best meal of our trip — so many flavors! The views of the mountains from the houseboat deck at sunset are incredible.", rating: 4 },
      { comment: "A unique and unforgettable stay. The houseboat owners are so warm and hospitable. Must visit the Mughal gardens during tulip season!", rating: 5 },
    ],
  },
  {
    title: "Amalfi Coast Cliffside Villa",
    description:
      "Breathtaking villa carved into the cliffs of Positano with terraced gardens cascading to the Mediterranean. Features private beach access, lemon grove, rooftop infinity pool, wine cellar with local Lacryma Christi wines, and a private chef for authentic Italian cuisine.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 42000,
    location: "Positano",
    country: "Italy",
    bookingUrl: "https://www.airbnb.com/s/Positano--Italy",
    sampleReviews: [
      { comment: "Positano is already gorgeous but this villa takes it to another level. The private chef prepared the most amazing pasta and fresh seafood. The lemon grove smells divine!", rating: 5 },
      { comment: "The cliffside infinity pool overlooking the Mediterranean was our favorite spot. Impeccable Italian hospitality. The boat tour to Capri was unforgettable.", rating: 5 },
    ],
  },
  {
    title: "Ice Hotel, Swedish Lapland",
    description:
      "Sleep in a room completely sculpted from ice and snow, with temperatures at -5°C. Each suite is a unique work of art carved by international artists. Includes thermal sleeping bags, Northern Lights safari, dog sledding, and an ice bar serving drinks in ice glasses.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 32000,
    location: "Jukkasjärvi",
    country: "Sweden",
    bookingUrl: "https://www.airbnb.com/s/Jukkasjarvi--Sweden",
    sampleReviews: [
      { comment: "Truly a once-in-a-lifetime experience! Sleeping in a room made of ice with incredible art was surreal. The Northern Lights dance above was pure magic.", rating: 5 },
      { comment: "Dog sledding through the snowy forest was the highlight. The ice bar is surprisingly fun. Bring warm layers for the ice room night — it's cold but exhilarating!", rating: 4 },
    ],
  },
  {
    title: "Luxury Tent at Jaisalmer Desert",
    description:
      "Golden city desert glamping at its finest. Luxurious Swiss tents in the Thar Desert with en-suite bathrooms, traditional Rajasthani furnishings, camel safaris, folk dance performances under the stars, and bonfire dinners with live music.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 5500,
    location: "Jaisalmer",
    country: "India",
    bookingUrl: "https://www.airbnb.com/s/Jaisalmer--India",
    sampleReviews: [
      { comment: "Magical night under a billion stars! The camel safari into the sunset was incredible. The folk dance and music performance was so vibrant and authentic.", rating: 5 },
      { comment: "Great budget luxury option. Tents are surprisingly comfortable. The bonfire dinner with dal baati churma was delicious. Staff was warm and welcoming.", rating: 4 },
      { comment: "Perfect desert experience without roughing it. Saw the most magnificent sunrise over the golden sand dunes. Kids loved the camel ride!", rating: 5 },
    ],
  },
  {
    title: "Manhattan Penthouse, New York",
    description:
      "Ultra-luxury penthouse on the 60th floor overlooking Central Park and the Manhattan skyline. Floor-to-ceiling windows, smart home technology, private elevator access, rooftop terrace with hot tub, and 24/7 concierge service. Steps from Broadway and Fifth Avenue.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1534430480872-3498386e7856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 55000,
    location: "New York City",
    country: "United States",
    bookingUrl: "https://www.airbnb.com/s/Manhattan--New-York",
    sampleReviews: [
      { comment: "The Central Park views are absolutely breathtaking day and night. Watching the city lights from the rooftop hot tub is surreal. Concierge got us impossible Broadway tickets!", rating: 5 },
      { comment: "Best location in NYC. Everything is walkable — Times Square, Central Park, museums. The apartment itself is ultra-modern and spotless. Worth the premium price.", rating: 4 },
    ],
  },
  {
    title: "Cave Hotel, Cappadocia",
    description:
      "Boutique cave hotel carved into ancient volcanic rock formations. Features fairy-chimney views, hot air balloon ride packages, underground tunnels, Turkish bath, and rooftop terrace for watching the sunrise balloon festival. Each room uniquely shaped by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1570939274717-7eda259b50ed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1565689157206-0fddef7589a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
      { url: "https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img4" },
    ],
    price: 11000,
    location: "Göreme",
    country: "Turkey",
    bookingUrl: "https://www.airbnb.com/s/Cappadocia--Turkey",
    sampleReviews: [
      { comment: "Watching hundreds of hot air balloons from our cave hotel terrace at sunrise was the most magical moment of my life! The room is cozy and uniquely beautiful.", rating: 5 },
      { comment: "Cappadocia is otherworldly and this cave hotel is the perfect base. The Turkish bath was divine. Room carved from rock has natural temperature regulation!", rating: 5 },
      { comment: "Great value for such a unique experience. Staff helped arrange our balloon ride. The underground city tour was fascinating. A must-visit destination!", rating: 4 },
    ],
  },
  {
    title: "Tea Estate Bungalow, Munnar",
    description:
      "Colonial-era planter's bungalow nestled in the emerald tea gardens of Munnar, Kerala. Features panoramic views of rolling hills, guided tea plantation walks, tea-tasting sessions, Ayurvedic spa, and home-cooked Kerala cuisine with spices from the estate garden.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    images: [
      { url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img1" },
      { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img2" },
      { url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60", filename: "img3" },
    ],
    price: 4500,
    location: "Munnar",
    country: "India",
    bookingUrl: "https://www.airbnb.com/s/Munnar--India",
    sampleReviews: [
      { comment: "Waking up to misty tea plantations was a dream. The fresh tea picked right from the estate tastes completely different — so aromatic! Ayurvedic massage was deeply relaxing.", rating: 5 },
      { comment: "Kerala food here is outstanding — the fish curry and appam were heavenly. The sunset view from the bungalow veranda is something I'll never forget.", rating: 4 },
    ],
  },
];

module.exports = { data: sampleListings };
