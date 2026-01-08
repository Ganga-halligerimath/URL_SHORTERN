# 🔗 URL Shortener Application

A full-stack URL Shortener web application where users can shorten long URLs, manage their links, track clicks, and delete URLs from a dashboard.

---

## 🚀 Features

- 🔐 User Authentication (Login / Logout)
- ✂️ Shorten long URLs
- 📋 Copy and use shortened URLs
- 📊 Dashboard to view all created URLs
- 👆 Click tracking
- ❌ Delete shortened URLs
- 🎯 Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- CSS (Custom styling)

### Backend
- Node.js
- Express.js
- PostgreSQL
- JWT Authentication

---

## 📂 Project Structure

# 🔗 URL Shortener Application

A full-stack URL Shortener web application where users can shorten long URLs, manage their links, track clicks, and delete URLs from a dashboard.

---

## 🚀 Features

- 🔐 User Authentication (Login / Logout)
- ✂️ Shorten long URLs
- 📋 Copy and use shortened URLs
- 📊 Dashboard to view all created URLs
- 👆 Click tracking
- ❌ Delete shortened URLs
- 🎯 Clean and responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router
- Axios
- CSS (Custom styling)

### Backend
- Node.js
- Express.js
- PostgreSQL
- Sequelize ORM
- JWT Authentication

---

## 📂 Project Structure

frontend/
├── src/
│ ├── components/
│ │ ├── Main.jsx
│ │ ├── Dashboard.jsx
│ │ └── Login.jsx
│ ├── api/
│ │ └── axios.js
│ ├── styles/
│ │ ├── Shorten.css
│ │ └── Dashboard.css
│ └── App.jsx
│
backend/
├── controllers/
├── routes/
├── models/
├── middleware/
└── server.js


#Installation & setup


## 1. clone the project 
```bash
git clone https://github.com/your-username/url-shortener.git
cd url-shortener

## 2.Backend Setup
cd backend
npm install

Create .env file:

PORT=5000
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
JWT_SECRET=your_secret


Run backend:
npm start

## 3.Frontend setup
cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173


Backend runs on:

http://localhost:5000


API Endpoints
## 🔗 API Endpoints

| Method | Endpoint                         | Description                     |
|--------|----------------------------------|---------------------------------|
| POST   | `/api/url/shorten`               | Create a shortened URL          |
| GET    | `/api/url/my-urls`               | Get all URLs created by user    |
| DELETE | `/api/url/deleteUrl/:shortcode`  | Delete a shortened URL          |
| GET    | `/:shortcode`                    | Redirect to original long URL   |


##Create a database and tables in PostgreSQL

🗄️ Step 1: Create Database
CREATE DATABASE url_shortener;

##user table
🗄️ Step 2: Create User Table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

##urls table
CREATE TABLE urls (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  original_url TEXT NOT NULL,
  short_code VARCHAR(20) UNIQUE NOT NULL,
  clicks INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);