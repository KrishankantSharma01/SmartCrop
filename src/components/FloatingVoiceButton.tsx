import { useState } from "react";
import { Button } from "./ui/button";
import { Mic, X, Volume2, Globe } from "lucide-react";
import { Card } from "./ui/card";

interface FloatingVoiceButtonProps {
  onVoiceAssistant: () => void;
}

export function FloatingVoiceButton({ onVoiceAssistant }: FloatingVoiceButtonProps) {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <>
      {/* Floating Voice Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Tooltip */}
        {showTooltip && (
          <Card className="absolute bottom-16 right-0 p-3 w-64 shadow-xl border-green-200 bg-gradient-to-r from-green-50 to-green-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowTooltip(false)}
              className="absolute top-1 right-1 h-6 w-6 p-0"
            >
              <X className="w-3 h-3" />
            </Button>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mic className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-green-700 text-sm">NEW: Voice Assistant</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Speak in your language! Supports Hindi, English, Bengali, Telugu & 8+ more languages.
              </p>
              <div className="flex items-center space-x-1 text-xs">
                <Globe className="w-3 h-3 text-blue-600" />
                <span className="text-blue-600">Try saying: "गेहूं कब बोना चाहिए?"</span>
              </div>
            </div>
          </Card>
        )}

        {/* Main Button */}
        <Button
          onClick={onVoiceAssistant}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 shadow-2xl border-4 border-white relative group"
        >
          <Mic className="w-7 h-7 text-white animate-pulse" />
          
          {/* Ripple Effect */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-30 animate-ping"></div>
          
          {/* Language Indicator */}
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white">
            <Globe className="w-3 h-3 text-white" />
          </div>
          
          {/* Voice Indicator */}
          <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center border-2 border-white">
            <Volume2 className="w-3 h-3 text-white" />
          </div>
        </Button>
      </div>
    </>
  );
}