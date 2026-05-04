

# ☀️ SunCart - Summer E-Commerce Website

A modern responsive e-commerce web application built with **Next.js App Router**, **Better Auth**, and **Tailwind CSS**.

---

## 🚀 Live Features

### 🏠 Home Page
- Hero section with animated slider
- 50% Summer sale banner
- Popular products (from JSON)
- Top brands section
- Summer care tips section

---

### 🛍️ Products Page
- Dynamic product listing from JSON API
- Responsive grid layout (mobile + desktop)
- Product card with:
  - Image
  - Name
  - Price
  - Rating
  - View Details button

---

### 📄 Product Details Page (Protected)
- Full product details view
- Large responsive product image
- Brand, price, rating, stock, category
- Redirect to login if not authenticated

---

### 🔐 Authentication System (Better Auth)
- Register page (Name, Email, Photo URL, Password)
- Login page (Email, Password)
- Social login support (Google)
- Auto redirect after login
- Logout functionality

---

### 👤 Profile Page
- Shows logged-in user info:
  - Name
  - Email
  - Profile image
- Update profile feature (bonus)

---

### 🧭 Navbar
- Responsive navigation (SM / MD / LG)
- Mobile hamburger menu
- Shows:
  - Logo
  - Links (Home, Products, Profile)
- Auth state handling:
  - Logged in → Avatar + Logout
  - Logged out → Login/Register buttons

---

### 📦 Footer
- Company info
- Quick links
- Contact details
- Social media icons

---

## 🎨 UI/UX Features
- Fully responsive design (mobile, tablet, desktop)
- Tailwind CSS styling
- Animate.css animations
- Gradient hero background
- Hover effects & transitions
- Modern card UI

---

## 🧰 Tech Stack

- ⚛️ Next.js 14+ (App Router)
- 🎨 Tailwind CSS
- 🔐 Better Auth (`authClient`)
- 🖼️ Next.js Image Optimization
- 🎭 Animate.css
- 📦 React Hook Form
- 🎯 Lucide React Icons

---

## 📁 Project Structure

---

##  Route Protection

- Product details page is protected
- If user not logged in → redirected to login page

---

##  Key Features Implemented

✔ Authentication (Login/Register)  
✔ Protected Routes  
✔ Responsive Navbar (Mobile Menu)  
✔ Product API integration (JSON)  
✔ Dynamic routing (`/product/[id]`)  
✔ Image optimization with Next.js  
✔ Modern UI with animations  

---

##  Author

Developed as a practice full-stack Next.js project for assignment submission.

---


## 🏁 Final Note

This project demonstrates:
- Authentication flow
- Protected routing
- Responsive UI design
- Dynamic data rendering