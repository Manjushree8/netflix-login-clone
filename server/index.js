const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔐 Dummy user data (no database)
const dummyUser = {
  email: "user@example.com",
  password: "netflix123"
};

// 🚪 POST /api/login
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  if (email === dummyUser.email && password === dummyUser.password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// 🌐 Start the server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
