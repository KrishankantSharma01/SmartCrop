import { useState, useEffect } from 'react';
import { Room, createLocalAudioTrack, Track } from 'livekit-client';
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Mic, MicOff, Phone, PhoneOff, Volume2, Users, Globe, MessageCircle } from "lucide-react";

interface VoiceAgentProps {
  onBack: () => void;
}

interface ChatMessage {
  sender: string;
  text: string;
  timestamp: Date;
}

export function VoiceAgent({ onBack }: VoiceAgentProps) {
  const [room, setRoom] = useState<Room | null>(null);
  const [connected, setConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!room) return;

    const handleTrackSubscribed = (track: any, publication: any, participant: any) => {
      console.log(`Track subscribed: ${track.kind}`);

      if (track.kind === Track.Kind.Audio) {
        setIsSpeaking(true);

        const audioElement = track.attach();
        document.body.appendChild(audioElement);

        // Simulate a chat message from agent
        setChatMessages(prev => [...prev, { 
          sender: participant.identity, 
          text: "🎤 Agent is responding...", 
          timestamp: new Date() 
        }]);

        audioElement.onended = () => {
          setIsSpeaking(false);
          audioElement.remove();
        };
      }
    };

    const handleTrackUnsubscribed = (track: any, publication: any, participant: any) => {
      console.log(`Track unsubscribed: ${track.kind}`);

      if (track.kind === Track.Kind.Audio) {
        track.detach().forEach((element: any) => element.remove());
        setIsSpeaking(false);
      }
    };

    const handleDataReceived = (payload: any, participant: any, kind: any) => {
      const message = new TextDecoder().decode(payload);
      console.log(`Data message received from ${participant.identity}: ${message}`);

      setChatMessages(prev => [...prev, { 
        sender: participant.identity, 
        text: message, 
        timestamp: new Date() 
      }]);
    };

    room.on('trackSubscribed', handleTrackSubscribed);
    room.on('trackUnsubscribed', handleTrackUnsubscribed);
    room.on('dataReceived', handleDataReceived);

    return () => {
      room.off('trackSubscribed', handleTrackSubscribed);
      room.off('trackUnsubscribed', handleTrackUnsubscribed);
      room.off('dataReceived', handleDataReceived);
    };
  }, [room]);

  const connectToRoom = async () => {
    try {
      setIsConnecting(true);
      setError(null);

      // Get token from your FastAPI server
      const server_url = import.meta.env.VITE_TOKEN_SERVER_URL || 'http://localhost:8000/api/token';
      console.log("Server url:", server_url);

      // Generate unique user ID and room ID
      const userId = `farmer-${Math.random().toString(36).substring(2, 8)}`;
      const roomId = `agriculture-room-${Math.random().toString(36).substring(2, 8)}`;

      const fullUrl = `${server_url}?room=${roomId}&user=${userId}`;
      console.log("Final URL:", fullUrl);

      // Fetch the token from FastAPI server
      const resp = await fetch(fullUrl);
      const data = await resp.json();
      
      if (!resp.ok) {
        throw new Error(data.error || 'Failed to get token');
      }
      
      const token = data.token;

      const newRoom = new Room();
      const livekitUrl = import.meta.env.VITE_LIVEKIT_WS_URL;
      
      if (!livekitUrl) {
        throw new Error('LiveKit WebSocket URL not configured');
      }

      await newRoom.connect(livekitUrl, token);

      setRoom(newRoom);
      setConnected(true);

      // Publish microphone track
      const micTrack = await createLocalAudioTrack();
      await newRoom.localParticipant.publishTrack(micTrack);

      // Add initial welcome message
      setChatMessages([{
        sender: 'System',
        text: '🎤 Connected to Voice Agent! You can now speak in your preferred language. The agent supports Hindi, English, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, and Assamese.',
        timestamp: new Date()
      }]);

      console.log('Connected and microphone publishing.');
    } catch (err: any) {
      console.error('Error connecting to Voice Agent:', err);
      setError(err.message || 'Failed to connect to voice agent');
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectFromRoom = async () => {
    if (room) {
      try {
        await room.disconnect();
        setConnected(false);
        setRoom(null);
        setChatMessages([]);
        setError(null);
        console.log('Disconnected from voice agent.');
      } catch (err) {
        console.error('Error disconnecting:', err);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 shadow-sm p-4 text-white">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack} className="text-white hover:bg-white/20">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-3 flex-1">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative">
              <Mic className="w-6 h-6 text-white animate-pulse" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                <Globe className="w-2 h-2 text-green-600" />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-lg font-bold">🎤 LiveKit Voice Agent</h1>
              <p className="text-green-100 text-sm">Real-time voice conversation with AI</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                <Volume2 className="w-4 h-4" />
                <span className="text-sm">Voice Enabled</span>
              </div>
              {connected && (
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-100">Connected</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 space-y-6">
        {/* Connection Status */}
        <Card className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <div className={`w-4 h-4 rounded-full ${connected ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <h3 className="text-lg font-semibold">
                {connected ? 'Connected to Voice Agent' : 'Not Connected'}
              </h3>
            </div>
            
            <p className="text-sm text-muted-foreground">
              {connected 
                ? 'You can now speak to the AI agent in real-time. The agent understands multiple languages and can help with agricultural questions.'
                : 'Click the button below to start a voice conversation with the AI agent.'
              }
            </p>

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-red-600 text-sm">{error}</p>
              </div>
            )}

            <div className="flex justify-center">
              {!connected ? (
                <Button 
                  onClick={connectToRoom} 
                  disabled={isConnecting}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                >
                  {isConnecting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Phone className="w-4 h-4 mr-2" />
                      Start Voice Call
                    </>
                  )}
                </Button>
              ) : (
                <Button 
                  onClick={disconnectFromRoom}
                  variant="destructive"
                  className="px-8 py-3"
                >
                  <PhoneOff className="w-4 h-4 mr-2" />
                  End Call
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Speaking Indicator */}
        {connected && isSpeaking && (
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <Volume2 className="w-5 h-5 text-blue-600 animate-pulse" />
              <span className="font-semibold text-blue-700">Agent is speaking...</span>
            </div>
          </Card>
        )}

        {/* Chat Messages */}
        {connected && chatMessages.length > 0 && (
          <Card className="p-4">
            <div className="flex items-center space-x-2 mb-4">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-semibold">Conversation Log</h3>
            </div>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">
                      {msg.sender === 'System' ? 'S' : msg.sender.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="font-medium text-sm">{msg.sender}</span>
                      <span className="text-xs text-muted-foreground">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700">{msg.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Features Info */}
        {!connected && (
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="text-center space-y-4">
              <h3 className="font-bold text-lg text-green-700">🎤 Voice Agent Features</h3>
              <p className="text-sm text-muted-foreground">
                Advanced AI voice assistant for agricultural guidance
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <Mic className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <h4 className="font-medium text-sm mb-1">Voice Recognition</h4>
                  <p className="text-xs text-muted-foreground">Speak naturally in your language</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <Globe className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <h4 className="font-medium text-sm mb-1">Multilingual</h4>
                  <p className="text-xs text-muted-foreground">Supports 12+ Indian languages</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <h4 className="font-medium text-sm mb-1">Real-time</h4>
                  <p className="text-xs text-muted-foreground">Instant voice responses</p>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
