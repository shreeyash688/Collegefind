require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

// Import Routes
const collegeRoutes = require("./collegeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug (optional)
console.log("Current directory:", __dirname);
console.log("Frontend path:", path.join(__dirname, "../frontend"));

// ==================================
// Serve Frontend Files
// ==================================
app.use(express.static(path.join(__dirname, "../frontend")));

// ==================================
// API Routes
// ==================================
app.use("/api", collegeRoutes);

// ==================================
// Pages
// ==================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

app.get("/colleges", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "colleges.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "about.html"));
});

app.get("/details", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "details.html"));
});

// ==================================
// Test Route
// ==================================
app.get("/test", (req, res) => {
    res.send("Express is working!");
});

// ==================================
// 404 Handler
// ==================================
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// ==================================
// Start Server
// ==================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
});