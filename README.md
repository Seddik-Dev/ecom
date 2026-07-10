# 🛍️ E-Commerce Platform

A modern full-stack e-commerce application built with **React.js**, **shadcn/ui**, and **Laravel**. This project provides a fast, responsive, and user-friendly shopping experience with a robust backend API.

## 🚀 Tech Stack

### Frontend
- ⚛️ React.js
- 🎨 Tailwind CSS
- 🧩 shadcn/ui
- 🌐 Axios
- 🛣️ React Router DOM
- 🔔 Sonner (Notifications)

### Backend
- 🐘 Laravel
- 🔐 Laravel Sanctum (Authentication)
- 🗄️ MySQL
- 📦 REST API

---

## ✨ Features

### Customer
- User Authentication
- Browse Products
- Search & Filter Products
- Product Details
- Add to Cart
- Update Cart Quantity
- Wishlist
- Checkout
- Order History
- Responsive Design

### Admin
- Dashboard
- Product Management (CRUD)
- Category Management
- Order Management
- User Management

---

## 📁 Project Structure

```
ecommerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── routes/
│   ├── database/
│   └── composer.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/Seddik-Dev/ecommerce.git

cd ecommerce
```

---

## 💻 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 🔥 Backend Setup

```bash
cd backend

composer install

cp .env.example .env

php artisan key:generate

php artisan migrate

php artisan serve
```

Runs on:

```
http://127.0.0.1:8000
```

---

## 🛠 Environment Variables

Create a `.env` file inside the Laravel project and configure:

```env
APP_NAME=Laravel

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=ecommerce
DB_USERNAME=root
DB_PASSWORD=
```

---

## 📸 Screenshots

Add screenshots of your application here.

```
Home Page

Products Page

Cart

Checkout

Admin Dashboard
```

---

## 📡 API

Laravel provides RESTful APIs for:

- Authentication
- Products
- Categories
- Cart
- Orders
- Users

---

## 📱 Responsive

✔ Desktop

✔ Tablet

✔ Mobile

---

## 🎯 Future Improvements

- Stripe Payment
- PayPal Integration
- Product Reviews
- Coupons & Discounts
- Multi-language Support
- Dark Mode
- Email Notifications

---

## 👨‍💻 Author

**Seddik Zaker**

Full Stack Web Developer

### Connect with me

- GitHub: https://github.com/yourusername
- LinkedIn: https://linkedin.com/in/yourprofile

---

## 📄 License

This project is licensed under the MIT License.
