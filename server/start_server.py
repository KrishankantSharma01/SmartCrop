#!/usr/bin/env python3
"""
Start script for the LiveKit Token Server
"""
import os
import sys
import uvicorn
from pathlib import Path

# Add the server directory to Python path
server_dir = Path(__file__).parent
sys.path.insert(0, str(server_dir))

# Import the FastAPI app
from token_server import app

if __name__ == "__main__":
    # Check if environment variables are set
    required_vars = ["LIVEKIT_API_KEY", "LIVEKIT_API_SECRET"]
    missing_vars = [var for var in required_vars if not os.getenv(var)]
    
    if missing_vars:
        print(f"❌ Missing required environment variables: {', '.join(missing_vars)}")
        print("Please set these in your .env file or environment")
        sys.exit(1)
    
    print("🚀 Starting LiveKit Token Server...")
    print("📍 Server will be available at: http://localhost:8000")
    print("🔗 Health check: http://localhost:8000/health")
    print("🎤 Token endpoint: http://localhost:8000/api/token")
    
    uvicorn.run(
        app, 
        host="0.0.0.0", 
        port=8000,
        reload=True,  # Enable auto-reload for development
        log_level="info"
    )
