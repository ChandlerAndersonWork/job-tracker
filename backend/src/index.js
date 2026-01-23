const express = require("express");
const cors = require("cors");
require("dotenv").config();

const applicationRoutes = require("./routes/applicationRoutes");

// init express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/applications", applicationRoutes);

// Health Check
app.get("/api/health", (req, res) => {
    res.json({ status: "OK", message: "Job Tracker API is running." });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});