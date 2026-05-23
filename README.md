[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit-00C7B7?style=for-the-badge&logo=vercel)](https://wanderland-indol.vercel.app/home))
Wanderland ✈️
[A one-sentence description of what your project does. e.g., "A full-stack web application for booking travel accommodations and sharing experiences."]

🚀 Live Demo
(https://wanderland-indol.vercel.app/home)

## 📸 Screenshots
<img width="1365" height="598" alt="Screenshot 2026-05-23 183207" src="https://github.com/user-attachments/assets/567ccb28-cb9a-40d2-8595-5498cb3ce106" />
<img width="1365" height="596" alt="Screenshot 2026-05-23 183241" src="https://github.com/user-attachments/assets/685b0b69-c25f-46f7-9171-6689bca4b5d1" />
<img width="391" height="589" alt="image" src="https://github.com/user-attachments/assets/7ac28df8-8a82-4e71-b869-903b9307bf0a" />

✨ Key Features
[Feature 1]: [Briefly describe the feature, e.g., "User Authentication (Sign Up / Log In)"]
[Feature 2]: [e.g., "Browse and filter listings"]
[Feature 3]: [e.g., "Create, read, update, and delete (CRUD) operations for listings"]
[Feature 4]: [e.g., "Users can post reviews and ratings"]
[Feature 5]: [e.g., "Responsive design for mobile and desktop"]
💻 Technologies Used
Frontend
[e.g., EJS templates]
[e.g., CSS / Bootstrap]
[e.g., Cloudinary for image uploads]
Backend
[e.g., Node.js]
[e.g., Express.js]
[e.g., MongoDB with Mongoose]
[e.g., Passport.js for authentication]

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
