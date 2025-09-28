"use strict";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const tokenRoutes = require("./routes/token");
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/smartcrop";
const PORT = process.env.PORT || 5000;
const ORIGIN = process.env.ORIGIN || "http://localhost:3000";

async function start() {
  await mongoose.connect(MONGO_URI);

  try {
    const usersColl = mongoose.connection.db.collection("users");
    const indexes = await usersColl.indexes();
    const hasPhoneIdx = indexes.find((idx) => idx.name === "phoneNumber_1");
    if (hasPhoneIdx) {
      await usersColl.dropIndex("phoneNumber_1");
      console.log("Dropped legacy index phoneNumber_1 from users collection");
    }
  } catch (err) {
    console.warn("Index check/drop skipped:", err?.message || err);
  }

  const app = express();

  // Important: middleware first
  app.use(express.json());
  app.use(cookieParser());
  app.use(
    cors({
      origin: ORIGIN,
      credentials: true,
    })
  );

  // Health
  app.get("/api/health", (_req, res) => res.json({ ok: true }));

  // Mount API routes after CORS + JSON middleware
  app.use("/api", tokenRoutes); // token route provides /api/token
  app.use("/api/auth", authRoutes);

  // Generic error handler
  app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(err.status || 500).json({ message: err.message || "Server error" });
  });

  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server", err);
  process.exit(1);
});

module.exports = start;