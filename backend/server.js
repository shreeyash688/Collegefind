
const express = require("express");
const cors = require("cors");
const path = require("path");

// Import Routes
const collegeRoutes = require("./collegeRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Debug (remove later if you want)
console.log("Current directory:", __dirname);
console.log("Frontend path:", path.join(__dirname, "../frontend"));

// ================================
// Serve Frontend Files
// ================================
app.use(express.static(path.join(__dirname, "../frontend")));

// ================================
// API Routes
// ================================
app.use("/api", collegeRoutes);

// ================================
// Home Page
// ================================
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "index.html"));
});

// ================================
// Colleges Page
// ================================
app.get("/colleges", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "colleges.html"));
});

// ================================
// About Page
// ================================
app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "about.html"));
});

// ================================
// Details Page
// ================================
app.get("/details", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "details.html"));
});

// ================================
// Test Route
// ================================
app.get("/test", (req, res) => {
    res.send("Express is working!");
});

// ================================
// 404 Handler
// ================================
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});

// ================================
// Start Server
// ================================
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});