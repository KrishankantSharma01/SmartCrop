# LiveKit Voice Agent Setup Guide

This guide will help you set up the LiveKit voice agent integration in your SmartCrop application.

## Prerequisites

1. **LiveKit Cloud Account**: Sign up at [https://cloud.livekit.io](https://cloud.livekit.io)
2. **Python 3.8+**: For running the FastAPI token server
3. **Node.js 16+**: For the React frontend

## Setup Steps

### 1. Install Dependencies

#### Frontend Dependencies
```bash
cd SmartCrop
npm install
```

#### Backend Dependencies
```bash
cd SmartCrop/server
pip install -r requirements.txt
```

### 2. Configure Environment Variables

1. Copy the example environment file:
```bash
cp env.example .env
```

2. Edit `.env` with your LiveKit credentials:
```env
# Get these from your LiveKit Cloud dashboard
VITE_LIVEKIT_WS_URL=wss://your-project.livekit.cloud
VITE_TOKEN_SERVER_URL=http://localhost:8000/api/token

# LiveKit API credentials (same as above)
LIVEKIT_API_KEY=your_api_key_here
LIVEKIT_API_SECRET=your_api_secret_here
```

### 3. Get LiveKit Credentials

1. Go to [LiveKit Cloud Dashboard](https://cloud.livekit.io)
2. Create a new project or use existing one
3. Copy the WebSocket URL and API credentials
4. Update your `.env` file with these values

### 4. Start the Services

#### Terminal 1: Start FastAPI Token Server
```bash
cd SmartCrop/server
python token_server.py
```
The server will run on `http://localhost:8000`

#### Terminal 2: Start React Development Server
```bash
cd SmartCrop
npm run dev
```
The frontend will run on `http://localhost:5173` (or similar)

### 5. Test the Integration

1. Open your browser and go to the React app
2. Navigate to Dashboard
3. Click on "LiveKit Voice Agent" card
4. Click "Start Voice Call" button
5. Allow microphone permissions when prompted

## Features

- **Real-time Voice Communication**: Speak directly with AI agents
- **Multilingual Support**: Works with multiple Indian languages
- **Live Audio Streaming**: Real-time audio transmission
- **Connection Status**: Visual indicators for connection state
- **Chat Log**: See conversation history

## Troubleshooting

### Common Issues

1. **CORS Errors**: Make sure the FastAPI server is running and CORS is configured
2. **Microphone Permission**: Allow microphone access in your browser
3. **Token Generation Failed**: Check your LiveKit API credentials
4. **Connection Failed**: Verify your LiveKit WebSocket URL

### Debug Steps

1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure both servers are running
4. Test token generation at `http://localhost:8000/api/token?room=test&user=test`

## API Endpoints

- `GET /api/token?room={room}&user={user}` - Generate LiveKit access token
- `GET /health` - Health check endpoint

## Security Notes

- Never commit your `.env` file with real credentials
- Use environment variables in production
- Consider rate limiting for token generation in production
- Implement proper authentication for production use
