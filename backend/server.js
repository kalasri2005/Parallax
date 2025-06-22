const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const College = require("./models/College");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Endpoint to get colleges by city
app.get("/colleges/:city", async (req, res) => {
  try {
    const city = req.params.city;
    const colleges = await College.find({ city });

    if (!colleges.length) {
      return res.status(404).json({ message: "No data found for this city." });
    }

    res.json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Endpoint to get all colleges (for testing)
app.get("/colleges", async (req, res) => {
  try {
    const colleges = await College.find({});
    res.json(colleges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
