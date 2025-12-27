# 🍽️ Local Food Reviews

![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-teal)
![DaisyUI](https://img.shields.io/badge/DaisyUI-4-orange)
![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-darkgreen)
![License](https://img.shields.io/badge/License-MIT-black)

---

## 📌 Project Overview

**Local Food Reviews** is a full-stack MERN web application that allows users to discover, review, and rate local food items and restaurants. The platform promotes local food culture by enabling users to share real experiences through ratings and reviews in a clean, responsive interface.

This project is built as a **portfolio-ready application** demonstrating real-world features such as authentication, CRUD operations, protected routes, and modern UI design.

---

## 🌐 Live Demo

* **Frontend:** [https://local-food-reviews.netlify.app](https://local-food-reviews.netlify.app)
* **Backend API:** [https://local-food-reviews-server.vercel.app](https://local-food-reviews-server.vercel.app)

---

## ✨ Key Features

### 👤 User Features

* User authentication (Login / Register)
* Browse local food & restaurant listings
* Add ratings and written reviews
* Edit & delete own reviews
* View recent and top-rated foods
* Responsive design for mobile, tablet & desktop

### 🛠️ Admin / Advanced Features

* Protected routes using JWT
* Secure API with role-based access
* Centralized error handling
* Reusable React components

---

## 🧑‍💻 Tech Stack

### Frontend

* **React**
* **Vite**
* **Tailwind CSS**
* **DaisyUI**
* **React Router DOM**
* **Axios**
* **React Hook Form**
* **SweetAlert2**

### Backend

* **Node.js**
* **Express.js**
* **MongoDB**
* **JWT Authentication**
* **CORS & dotenv**

---

## 📁 Project Structure

### Frontend

```bash
src/
├── assets/
├── components/
├── hooks/
├── layouts/
├── pages/
├── routes/
├── App.jsx
└── main.jsx
```

### Backend

```bash
server/
├── routes/
├── controllers/
├── middleware/
├── config/
├── index.js
└── package.json
```

---

## ⚙️ Installation Guide

### 🔹 Frontend Setup

```bash
git clone https://github.com/your-username/local-food-reviews.git
cd local-food-reviews
npm install
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

### 🔹 Backend Setup

```bash
git clone https://github.com/your-username/local-food-reviews-server.git
cd local-food-reviews-server
npm install
npm run start
```

Backend will run at:

```
http://localhost:4000
```

---

## 🔐 Environment Variables

### Frontend (`.env`)

```env
VITE_API_URL=http://localhost:4000
VITE_FIREBASE_API_KEY=your_firebase_key
```

### Backend (`.env`)

```env
PORT=4000
DB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

---

## 🔄 API Endpoints (Sample)

```http
GET    /foods
POST   /reviews
GET    /reviews/:id
PATCH  /reviews/:id
DELETE /reviews/:id
```

---

## 📸 Screenshots

> Add screenshots here for better portfolio presentation

---

## 🚀 Future Enhancements

* Advanced food search & filters
* User profile dashboard
* Like & comment system
* Admin moderation panel
* Image upload for food items

---

## 👨‍💻 Author

**md. al amin**
Frontend & MERN Stack Developer

* GitHub: [https://github.com/your-username](https://github.com/galive007)
* LinkedIn: [https://linkedin.com/in/your-profile](https://linkedin.com/in/galive007)

---

## 📄 License

This project is licensed under the **MIT License**.

---

⭐ *If you like this project, consider giving it a star on GitHub!*
