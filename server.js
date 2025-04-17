require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/", require("./routes/auth"));               // Handles /register and /login
app.use("/accounts", require("./routes/accounts"));   // Handles /accounts routes

// Server listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));