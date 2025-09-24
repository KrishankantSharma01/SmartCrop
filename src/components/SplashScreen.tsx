import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Leaf, Sprout, Mic, Globe } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export function SplashScreen() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto p-8 text-center space-y-6 shadow-lg">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
            <Leaf className="w-7 h-7 text-white" />
          </div>
          <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
            <Sprout className="w-6 h-6 text-accent" />
          </div>
        </div>

        {/* Title */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-primary">Smart Crop Advisory</h1>
          <p className="text-muted-foreground">Better Decisions for Better Harvests</p>
        </div>

        {/* Language Selection */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Choose Language / भाषा चुनें</label>
          <Select defaultValue="en">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Get Started Button */}
        <Button 
          onClick={() => navigate('/login')}
          className="w-full h-12 bg-primary hover:bg-primary/90 text-white"
        >
          Get Started / शुरू करें
        </Button>

        {/* Voice Agent USP */}
        <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Mic className="w-5 h-5 text-green-600 animate-pulse" />
            <Globe className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-green-700">Multilingual Voice Assistant</span>
          </div>
          <p className="text-xs text-center text-muted-foreground mb-2">
            Speak in Hindi, English, Bengali, Telugu & 8+ more languages!
          </p>
          <div className="flex justify-center space-x-2">
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">🎤 Voice Recognition</span>
            <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">🌐 12+ Languages</span>
          </div>
        </div>

        {/* Features Preview */}
        <div className="flex justify-center space-x-4 pt-4 text-xs text-muted-foreground">
          <span>🌱 Crop Advisory</span>
          <span>🌾 Soil Report</span>
          <span>💰 Market Prices</span>
        </div>
      </Card>
    </div>
  );
}