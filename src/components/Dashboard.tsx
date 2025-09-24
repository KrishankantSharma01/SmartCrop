import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloatingVoiceButton } from "./FloatingVoiceButton";
import { useNavigate } from "react-router-dom";
import { 
  Sprout, 
  FileText, 
  Droplets, 
  TrendingUp, 
  MessageCircle, 
  Users,
  Sun,
  // Cloud,
  Thermometer,
  Eye,
  Mic,
  Camera,
  Globe
} from "lucide-react";

export function Dashboard() {
  const navigate = useNavigate();
  const features = [
    {
      id: 'crop-advisory',
      title: 'Crop Advisory',
      titleHindi: 'फसल सलाह',
      icon: Sprout,
      color: 'bg-primary',
      description: 'Get AI-powered crop recommendations'
    },
    {
      id: 'soil-report',
      title: 'Soil Report',
      titleHindi: 'मिट्टी रिपोर्ट',
      icon: FileText,
      color: 'bg-accent',
      description: 'Analyze your soil health'
    },
    {
      id: 'crop-disease',
      title: 'Disease Detection',
      titleHindi: 'रोग पहचान',
      icon: Camera,
      color: 'bg-red-600',
      description: 'AI-powered disease identification'
    },
    {
      id: 'irrigation',
      title: 'Irrigation Tips',
      titleHindi: 'सिंचाई सुझाव',
      icon: Droplets,
      color: 'bg-blue-600',
      description: 'Smart watering guidance'
    },
    {
      id: 'market-prices',
      title: 'Market Prices',
      titleHindi: 'बाज़ार भाव',
      icon: TrendingUp,
      color: 'bg-secondary',
      description: 'Latest mandi rates'
    },
    {
      id: 'chatbot',
      title: 'Voice Assistant',
      titleHindi: 'आवाज़ सहायक',
      icon: Mic,
      color: 'bg-green-600',
      description: 'Speak in your language',
      isVoiceAgent: true
    },
    {
      id: 'community',
      title: 'Community',
      titleHindi: 'समुदाय',
      icon: Users,
      color: 'bg-purple-600',
      description: 'Connect with other farmers'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-primary">Smart Crop Advisory</h1>
              <p className="text-sm text-muted-foreground">Welcome back, Farmer!</p>
            </div>
            <Button variant="outline" size="sm">
              Profile / प्रोफ़ाइल
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Weather Widget */}
        <Card className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <Sun className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold">Today's Weather / आज का मौसम</span>
              </div>
              <p className="text-2xl font-bold">28°C</p>
              <p className="text-sm text-muted-foreground">Sunny, Light breeze</p>
            </div>
            <div className="text-right space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Thermometer className="w-4 h-4" />
                <span>22°C - 32°C</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Eye className="w-4 h-4" />
                <span>Good for spraying</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Voice Agent USP Hero */}
        <Card className="relative overflow-hidden p-6 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mic className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div>
                <h2 className="text-xl font-bold">🎤 Multilingual Voice Assistant</h2>
                <p className="text-green-100">बहुभाषी आवाज सहायक</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-green-100 mb-3">
                  Speak in your language - Hindi, English, Bengali, Telugu, and 8+ more languages supported!
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
                    <Globe className="w-3 h-3" />
                    <span className="text-xs">12 Languages</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
                    <Mic className="w-3 h-3" />
                    <span className="text-xs">Voice Recognition</span>
                  </div>
                  <div className="flex items-center space-x-1 bg-white/20 rounded-full px-2 py-1">
                    <MessageCircle className="w-3 h-3" />
                    <span className="text-xs">Real-time Response</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-green-100">Try asking:</p>
                <div className="space-y-1 text-xs">
                  <p className="bg-white/10 rounded px-2 py-1">"गेहूं कब बोना चाहिए?" (Hindi)</p>
                  <p className="bg-white/10 rounded px-2 py-1">"ধানের জন্য সার কী?" (Bengali)</p>
                  <p className="bg-white/10 rounded px-2 py-1">"Cotton diseases treatment?"</p>
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/chatbot')}
              className="mt-4 bg-white text-green-700 hover:bg-white/90"
            >
              <Mic className="w-4 h-4 mr-2" />
              Try Voice Assistant / आवाज़ सहायक आज़माएं
            </Button>
          </div>
        </Card>

        {/* Hero Section */}
        <Card className="relative overflow-hidden p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="relative z-10 space-y-3">
            <h2 className="text-2xl font-bold">Better Decisions for Better Harvests</h2>
            <p className="text-primary-foreground/90">
              Get personalized crop recommendations, soil analysis, and market insights
            </p>
            <Button 
              variant="secondary" 
              onClick={() => navigate('/crop-advisory')}
              className="mt-4"
            >
              Start Advisory / सलाह शुरू करें
            </Button>
          </div>
          <div className="absolute right-4 top-4 opacity-20">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695566372177-e1e53ed814d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGNyb3BzfGVufDF8fHx8MTc1NzQwODQzNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Farmer"
              className="w-20 h-20 rounded-full object-cover"
            />
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={feature.id}
                className={`p-4 hover:shadow-lg transition-all cursor-pointer relative ${
                  feature.isVoiceAgent ? 'ring-2 ring-green-500 bg-green-50' : ''
                }`}
                onClick={() => navigate(`/${feature.id}`)}
              >
                {feature.isVoiceAgent && (
                  <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full px-2 py-1 font-bold animate-pulse">
                    NEW
                  </div>
                )}
                <div className="space-y-3">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center relative`}>
                    <IconComponent className="w-6 h-6 text-white" />
                    {feature.isVoiceAgent && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-white rounded-full flex items-center justify-center">
                        <Globe className="w-2 h-2 text-green-600" />
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className={`font-semibold text-sm ${feature.isVoiceAgent ? 'text-green-700' : ''}`}>
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{feature.titleHindi}</p>
                  </div>
                  <p className={`text-xs ${feature.isVoiceAgent ? 'text-green-600 font-medium' : 'text-muted-foreground'}`}>
                    {feature.description}
                  </p>
                  {feature.isVoiceAgent && (
                    <div className="flex items-center space-x-1 text-xs text-green-600">
                      <Mic className="w-3 h-3" />
                      <span>12+ Languages</span>
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-primary">12</p>
            <p className="text-xs text-muted-foreground">Crops Tracked</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-secondary">₹2,40,000</p>
            <p className="text-xs text-muted-foreground">Season Revenue</p>
          </Card>
          <Card className="p-4 text-center">
            <p className="text-2xl font-bold text-accent">5 acres</p>
            <p className="text-xs text-muted-foreground">Farm Size</p>
          </Card>
        </div>
      </div>

      {/* Floating Voice Assistant Button */}
      <FloatingVoiceButton onVoiceAssistant={() => navigate('/chatbot')} />
    </div>
  );
}