"use strict";

const express = require("express");
const { AccessToken, VideoGrant } = require("livekit-server-sdk");

const router = express.Router();

/**
 * GET /api/token?room=ROOMNAME&user=USERNAME
 * Returns JSON { token: "..." }
 * Accepts either "user" or "identity" as the user param for compatibility.
 */
router.get("/token", (req, res) => {
  try {
    const room = req.query.room || "farm-support-room";
    const identity = req.query.user || req.query.identity || "user-" + Math.random().toString(36).slice(2, 8);

    const apiKey = process.env.LIVEKIT_API_KEY;
    const apiSecret = process.env.LIVEKIT_API_SECRET;

    if (!apiKey || !apiSecret) {
      return res.status(500).json({ error: "Missing LiveKit API credentials on the server" });
    }

    const at = new AccessToken(apiKey, apiSecret, { identity });

    at.addGrant(
      new VideoGrant({
        roomJoin: true,
        room: room,
        canPublish: true,
        canSubscribe: true,
      })
    );

    const token = at.toJwt();

    return res.status(200).json({ token });
  } catch (err) {
    console.error("Error generating token:", err);
    return res.status(500).json({ error: "Failed to create token" });
  }
});

module.exports = router;
