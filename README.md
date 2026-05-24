<div align="center">
# ✈️ Wanderland
 
**A full-stack travel and hotel discovery platform where users can explore destinations, list accommodations, share reviews, and book stays — all in one place.**
 
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-00C7B7?style=for-the-badge&logo=vercel)](https://wanderland-indol.vercel.app/home)
[![Node.js](https://img.shields.io/badge/Node.js-22.x-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
 
</div>
---
 
## 📸 Screenshots
 
<!-- Replace the URLs below with your actual screenshot paths after uploading to the repo -->
| Home Page | AI Chat | User Dashboard |
|-----------|---------------|----------------|
| ![Home](<img width="1363" height="602" alt="Screenshot 2026-05-24 085305" src="https://github.com/user-attachments/assets/c57175ae-94a0-409b-a15c-393d64ca0980" />
) | ![Ai Chat](<img width="305" height="467" alt="Screenshot 2026-05-24 085315" src="https://github.com/user-attachments/assets/37b3f10c-8dad-43ae-bbb1-99210c6bd25d" />
) | ![Dashboard](<img width="1365" height="598" alt="Screenshot 2026-05-24 085325" src="https://github.com/user-attachments/assets/f99dd080-57da-45ed-a7fa-b661d2d1b0a9" />
) |
 
> **Live demo →** [wanderland-indol.vercel.app](https://wanderland-indol.vercel.app/home)
 
---
 
## ✨ Features
 
- **User Authentication** — Secure sign-up / login with Passport.js local strategy, plus one-click **Google OAuth2** sign-in.
- **OTP Email Verification** — Account registration is protected by a one-time password sent via the Brevo (Sendinblue) email API.
- **Hotel Listings (Full CRUD)** — Any authenticated user can create, view, edit, and delete their own accommodation listings.
- **Image Uploads** — Listing images are stored on **Cloudinary** via Multer middleware, keeping the server stateless.
- **Reviews & Ratings** — Guests can leave star ratings and written reviews on any listing, with ownership-based edit/delete controls.
- **Joi Schema Validation** — All incoming form data is validated server-side with Joi before hitting the database.
- **Session Management** — Sessions are persisted in MongoDB via `connect-mongo`, surviving server restarts.
- **Flash Messages** — User-friendly success/error notifications on every action using `connect-flash`.
- **Responsive UI** — Built with Bootstrap 5 and EJS templates, works seamlessly on mobile and desktop.
- **Deployed on Vercel** — Live and accessible via a public URL with `vercel.json` configuration included.
---

## 🛠️ Tech Stack
 
| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js 22.x |
| **Framework** | Express.js 5.x |
| **Templating** | EJS + ejs-mate (layout engine) |
| **Database** | MongoDB Atlas + Mongoose 8.x |
| **Authentication** | Passport.js (Local + Google OAuth2) |
| **Image Storage** | Cloudinary + Multer |
| **Email / OTP** | Brevo (Sendinblue) API (`@getbrevo/brevo`) |
| **Session Store** | connect-mongo |
| **Validation** | Joi |
| **Styling** | Bootstrap 5 |
| **Deployment** | Vercel |

## 📁 Project Structure
 
```
wanderland/
├── controllers/        # Route handler logic (listings, reviews, users)
├── init/               # Database seed data
├── models/             # Mongoose schemas (User, Listing, Review)
├── public/             # Static assets (CSS, JS, images)
├── route/              # Express routers (listings, reviews, auth)
├── util/               # Utility helpers (async error wrapper, etc.)
├── views/              # EJS templates and layouts
├── app.js              # Express app entry point
├── cloudconfig.js      # Cloudinary configuration
├── middleware.js        # Custom middleware (isLoggedIn, isOwner, etc.)
├── schema.js           # Joi validation schemas
└── vercel.json         # Vercel deployment config
```
 
---

## Environment Variables

- `ATLASDB_URL`: MongoDB connection string (e.g., MongoDB Atlas URL or local MongoDB URL)
- `SECRET`: Session secret key
- `BREVO_API_KEY`: Brevo (Sendinblue) API key for email
- `BREVO_SENDER_EMAIL`: Email address for sending OTP emails

🛠️ How to Run Locally
To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js installed
MongoDB installed or a MongoDB Atlas connection string
An API key for [Any service you used, e.g., Mapbox, Cloudinary]
Installation
Clone the repository:

git clone [https://github.com/your-username/wanderland.git](https://github.com/your-username/wanderland.git)
Navigate to the project directory:

cd wanderland
Install server-side dependencies:

npm install
(If you have a separate frontend folder, e.g., "client" or "frontend"):

cd client
npm install
cd ..
Set up environment variables: Create a .env file in the root (or backend) directory and add the following:

DB_URL=your_mongodb_connection_string
API_KEY=your_api_key
SECRET=your_session_secret
Run the application:

npm start
(This might be npm run dev or require running the frontend and backend separately)

## 🤝 Contributing
 
Contributions, issues, and feature requests are welcome! Feel free to open an [issue](https://github.com/AnimeshJ004/wanderland/issues) or submit a pull request.
 
---
 
## 👨‍💻 Author
 
**Animesh Jain**
- GitHub: [@AnimeshJ004](https://github.com/AnimeshJ004)
- LinkedIn: [animesh-jain06](https://www.linkedin.com/in/animesh-jain06)
---
 
<div align="center">
Made with ❤️ by Animesh Jain
</div>
 
