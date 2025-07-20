# Netflix Login Clone

A Netflix-style login page built using **React (Vite)** for the frontend and **Node.js + Express** for the backend. This project demonstrates form validation, frontend-backend integration, and a successful login redirect to a mock dashboard — all styled using **Tailwind CSS**.

---

## Features

- Netflix-style login UI
- Frontend validation for empty inputs
- API integration using Axios
- Error messages for invalid login attempts
- Redirect to a simple dashboard on successful login
- Fully responsive (mobile-friendly)
- Styled with Tailwind CSS
- Static/mock credentials used for authentication (no database)

---

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Other:** Axios for HTTP requests

---

## Screenshots

### Successful Login
![Successful Login](./src/assets/screenshots/successful%20login.png)

### Invalid Login Attempt
![Invalid Login](./src/assets/screenshots/invalid%20login.png)

### Empty Field Error
![Empty Field Error](./src/assets/screenshots/empty%20field%20error.png)

### Mobile View
![Mobile View](./src/assets/screenshots/Mobile%20view.png)

### Simple Dashboard
![Simple Dashboard](./src/assets/screenshots/simple%20dashboard.png)

---

## Project Structure

client/
├── src/
│ ├── assets/screenshots/ # Screenshots for documentation
│ ├── pages/ # Login and Dashboard pages
│ ├── App.jsx, main.jsx # App entry files
│ ├── index.css # Tailwind + custom CSS
│
server/
└── index.js # Express backend handling login API
└── package.json

---

## Static Credentials

Email: user@example.com
Password: netflix123


These credentials are hardcoded on the backend for mock authentication.

---

## Purpose of the Project

As a Full Stack Web Development learner, I created this project to replicate a real-world login flow. Though no database is used, it helped me practice frontend-backend integration using mock authentication.

---

## Run Locally

### Backend

cd server
npm install
node index.js

### Frontend

cd client
npm install
npm run dev

Author
Manjushree Venkatesan
Learning Full Stack Web Development