import os
import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from livekit.api import AccessToken, VideoGrants

# Load environment variables from a .env file
load_dotenv()

LIVEKIT_API_KEY = os.getenv("LIVEKIT_API_KEY")
LIVEKIT_API_SECRET = os.getenv("LIVEKIT_API_SECRET")

# Basic Logging Setup
logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(levelname)s - %(message)s")

app = FastAPI(title="LiveKit Token Service")

# CORS Middleware to allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/token")
async def get_token(room: str, user: str):
    """
    Generates a LiveKit access token.
    """
    logging.info(f"Request received: Generating token for user '{user}' in room '{room}'")
    
    if not LIVEKIT_API_KEY or not LIVEKIT_API_SECRET:
        logging.error("LIVEKIT_API_KEY or LIVEKIT_API_SECRET is not set in environment variables.")
        return {"error": "Server configuration error."}, 500

    at = AccessToken(LIVEKIT_API_KEY, LIVEKIT_API_SECRET)
    at.identity = user

    grant = VideoGrants(
        room_join=True,
        room=room,
        can_publish=True,
        can_subscribe=True,
    )
    
    # Use with_grants method as per the provided code
    at.with_grants(grants=grant)

    token = at.to_jwt()
    
    logging.info(f"Successfully generated token for '{user}'.")
    return {"token": token}

@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy", "service": "LiveKit Token Service"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
