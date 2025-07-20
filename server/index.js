const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS configuration — allow only frontend domain
app.use(cors({
  origin: "https://netflix-login-clone-client.onrender.com",
  credentials: true
}));

// ✅ Parse incoming JSON
app.use(express.json());

// ✅ Dummy user (replace later with real DB)
const dummyUser = {
  email: "user@example.com",
  password: "netflix123"
};

// ✅ Root route — fixes "Cannot GET /"
app.get("/", (req, res) => {
  res.send("✅ Netflix Backend is Running!");
});

// ✅ Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === dummyUser.email && password === dummyUser.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
