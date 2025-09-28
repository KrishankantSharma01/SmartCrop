import { useState, useEffect } from "react";
import { Room, createLocalAudioTrack, Track } from "livekit-client";
import { Card, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { Button } from "./ui/button";
import { PhoneCall, PhoneOff } from "lucide-react";

export default function VoiceAgent() {
  const [room, setRoom] = useState<Room | null>(null);
  const [connected, setConnected] = useState(false);
  const [loading, setLoading] = useState(false);

  const TOKEN_SERVER_BASE = (import.meta.env.VITE_TOKEN_SERVER_URL as string) || "/api/token?";
  const LIVEKIT_WS = (import.meta.env.VITE_LIVEKIT_WS_URL as string) || "ws://localhost:7880";

  useEffect(() => {
    if (!room) return;

    const handleTrackSubscribed = (track: Track) => {
      if (track.kind === Track.Kind.Audio) {
        const el = track.attach();
        document.body.appendChild(el);
      }
    };

    const handleTrackUnsubscribed = (track: Track) => {
      if (track.kind === Track.Kind.Audio) {
        track.detach().forEach((el: HTMLElement) => el.remove());
      }
    };

    room.on("trackSubscribed", handleTrackSubscribed);
    room.on("trackUnsubscribed", handleTrackUnsubscribed);

    return () => {
      room.off("trackSubscribed", handleTrackSubscribed);
      room.off("trackUnsubscribed", handleTrackUnsubscribed);
    };
  }, [room]);

  const getToken = async (roomName: string, userId: string) => {
    const base = TOKEN_SERVER_BASE.endsWith("?") ? TOKEN_SERVER_BASE : TOKEN_SERVER_BASE + "?";
    const url = `${base}room=${encodeURIComponent(roomName)}&user=${encodeURIComponent(userId)}`;
    const resp = await fetch(url);
    if (!resp.ok) throw new Error(`Token fetch failed ${resp.status}`);
    const data = await resp.json();
    return data.token as string;
  };

  const connectToRoom = async () => {
    try {
      setLoading(true);
      const userId = `farmer-${Math.random().toString(36).substring(2, 8)}`;
      const roomName = "farm-support-room";

      const token = await getToken(roomName, userId);

      const newRoom = new Room();
      await newRoom.connect(LIVEKIT_WS, token);

      setRoom(newRoom);
      setConnected(true);

      const micTrack = await createLocalAudioTrack();
      await newRoom.localParticipant.publishTrack(micTrack);
    } catch (err) {
      console.error("Error connecting to Agent:", err);
    } finally {
      setLoading(false);
    }
  };

  const disconnectFromRoom = async () => {
    if (room) {
      setLoading(true);
      try {
        await room.disconnect();
        setRoom(null);
        setConnected(false);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto p-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Farmer's Voice Assistant</CardTitle>
        <CardDescription className="text-lg">
          Connect with our AI-powered Krishi Sahayak for personalized voice assistance
        </CardDescription>
      </CardHeader>
      
      <div className="flex flex-col items-center gap-6 p-6">
        <div className="text-center space-y-4">
          {connected ? (
            <div className="text-green-600 dark:text-green-500">
              Connected to voice support
            </div>
          ) : (
            <div className="text-muted-foreground">
              Click to start your voice session
            </div>
          )}
        </div>

        <Button
          size="lg"
          variant={connected ? "destructive" : "default"}
          onClick={connected ? disconnectFromRoom : connectToRoom}
          disabled={loading}
          className="w-full max-w-sm"
        >
          {loading ? (
            "Please wait..."
          ) : connected ? (
            <>
              <PhoneOff className="w-5 h-5" />
              End Call
            </>
          ) : (
            <>
              <PhoneCall className="w-5 h-5" />
              Start Call
            </>
          )}
        </Button>
      </div>
    </Card>
  );
}
