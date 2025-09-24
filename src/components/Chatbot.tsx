import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowLeft, Send, MessageCircle, Mic, MicOff, Bot, User, Globe, Volume2, Languages } from "lucide-react";

interface ChatbotProps {
  onBack: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export function Chatbot({ onBack }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '🎤 Hello! I\'m your multilingual agricultural expert. You can speak to me in Hindi, English, Bengali, Telugu, Marathi, Tamil, Gujarati, Kannada, Malayalam, Punjabi, Odia, or Assamese. How can I help you today? / नमस्ते! मैं आपका बहुभाषी कृषि विशेषज्ञ हूँ। आप मुझसे अपनी भाषा में बात कर सकते हैं।',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);

  const quickQuestions = [
    { text: 'Best time to sow wheat?', hindi: 'गेहूं बोने का सबसे अच्छा समय?', lang: 'en' },
    { text: 'गेहूं के लिए कौन सा उर्वरक?', hindi: 'Which fertilizer for wheat?', lang: 'hi' },
    { text: 'ধানের রোগ কীভাবে নিয়ন্ত্রণ করবো?', hindi: 'How to control rice diseases?', lang: 'bn' },
    { text: 'పత్తిలో కీటకాలను ఎలా నియంత్రించాలి?', hindi: 'How to control pests in cotton?', lang: 'te' },
    { text: 'मका बागायतीसाठी पाणी कधी द्यावे?', hindi: 'When to water maize crop?', lang: 'mr' },
    { text: 'தக்காளிக்கு எந்த உரம் சிறந்தது?', hindi: 'Which fertilizer is best for tomato?', lang: 'ta' }
  ];

  const botResponses = {
    'wheat': 'The best time to sow wheat is from mid-November to mid-December. Ensure soil temperature is 18-25°C for optimal germination. / गेहूं बोने का सबसे अच्छा समय नवंबर के मध्य से दिसंबर के मध्य तक होता है।',
    'rice': 'For rice cultivation, use NPK fertilizer 120:60:40 kg per hectare. Apply nitrogen in 3 splits - basal, tillering, and panicle initiation stages. / धान की खेती के लिए NPK उर्वरक 120:60:40 किलो प्रति हेक्टेयर का उपयोग करें।',
    'cotton': 'For cotton pest control, monitor for bollworms and aphids. Use IPM practices including neem oil spray and beneficial insects. / कपास में कीट नियंत्रण के लिए बॉलवर्म और एफिड्स की निगरानी करें।',
    'irrigation': 'Irrigate based on soil moisture and crop stage. Generally, water when soil moisture drops to 50-60% of field capacity. / मिट्टी की नमी और फसल की अवस्था के आधार पर सिंचाई करें।'
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      let botResponse = "I understand your question. Let me help you with that. For detailed advice, please consult with our agricultural experts. / मैं आपका प्रश्न समझ गया हूँ। इसमें आपकी मदद करता हूँ।";
      
      const lowerInput = inputMessage.toLowerCase();
      if (lowerInput.includes('wheat') || lowerInput.includes('गेहूं')) {
        botResponse = botResponses.wheat;
      } else if (lowerInput.includes('rice') || lowerInput.includes('धान') || lowerInput.includes('चावल')) {
        botResponse = botResponses.rice;
      } else if (lowerInput.includes('cotton') || lowerInput.includes('कपास')) {
        botResponse = botResponses.cotton;
      } else if (lowerInput.includes('irrigation') || lowerInput.includes('सिंचाई')) {
        botResponse = botResponses.irrigation;
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop voice recording
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
              <h1 className="text-lg font-bold">🎤 Multilingual Voice Assistant</h1>
              <p className="text-green-100 text-sm">Speak in your language - 12+ languages supported</p>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                <Languages className="w-4 h-4" />
                <span className="text-sm">12 Languages</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-100">Live Voice Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-4 space-y-4 overflow-y-auto">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
              <div className={`flex items-start space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  message.sender === 'user' ? 'bg-primary' : 'bg-secondary'
                }`}>
                  {message.sender === 'user' ? 
                    <User className="w-4 h-4 text-white" /> : 
                    <Bot className="w-4 h-4 text-accent" />
                  }
                </div>
                <div className={`p-3 rounded-lg max-w-full ${
                  message.sender === 'user' 
                    ? 'bg-primary text-white rounded-br-sm' 
                    : 'bg-white shadow-sm rounded-bl-sm'
                }`}>
                  <p className="text-sm break-words">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-primary-foreground/70' : 'text-muted-foreground'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Voice Features & Quick Questions */}
      {messages.length <= 1 && (
        <div className="max-w-4xl mx-auto w-full p-4 space-y-4">
          {/* Voice Features Highlight */}
          <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center space-x-2">
                <Volume2 className="w-6 h-6 text-green-600" />
                <h3 className="font-bold text-lg text-green-700">Revolutionary Voice Technology</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                First-ever agricultural assistant that understands and responds in your native language
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Mic className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-xs font-medium">Voice Recognition</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Languages className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-xs font-medium">12+ Languages</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Globe className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-xs font-medium">Real-time Translation</p>
                </div>
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Volume2 className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <p className="text-xs font-medium">Voice Response</p>
                </div>
              </div>
              
              <Button 
                onClick={toggleRecording}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
              >
                <Mic className="w-4 h-4 mr-2" />
                Try Voice Now / अभी आवाज़ आज़माएं
              </Button>
            </div>
          </Card>

          {/* Quick Questions in Multiple Languages */}
          <Card className="p-4">
            <h3 className="font-semibold mb-3 text-sm flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span>Quick Questions in Multiple Languages / विभिन्न भाषाओं में त्वरित प्रश्न</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickQuestion(question.text)}
                  className="h-auto p-3 text-left justify-start hover:bg-green-50"
                >
                  <div className="w-full">
                    <div className="flex items-center space-x-2 mb-1">
                      <Globe className="w-3 h-3 text-muted-foreground" />
                      <span className="text-xs font-medium text-muted-foreground uppercase">{question.lang}</span>
                    </div>
                    <p className="text-sm">{question.text}</p>
                    <p className="text-xs text-muted-foreground">{question.hindi}</p>
                  </div>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white border-t p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="flex-1 relative">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your question... / अपना प्रश्न टाइप करें..."
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                className="pr-12"
              />
              <Button
                size="sm"
                variant="ghost"
                onClick={toggleRecording}
                className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                  isRecording ? 'text-red-500' : 'text-muted-foreground'
                }`}
              >
                {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </Button>
            </div>
            <Button onClick={handleSendMessage} className="bg-primary hover:bg-primary/90">
              <Send className="w-4 h-4" />
            </Button>
          </div>
          
          {/* Voice Recording Status */}
          {isRecording && (
            <div className="flex items-center justify-center space-x-2 mt-2 p-3 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="text-center">
                <p className="text-sm font-medium text-red-600">🎤 Recording Active</p>
                <p className="text-xs text-red-500">Speak in any of 12+ supported languages</p>
              </div>
            </div>
          )}
          
          {/* Supported Languages */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2 text-xs">
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Mic className="w-3 h-3" />
              <span>Voice Support</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Languages className="w-3 h-3" />
              <span>12+ Languages</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Globe className="w-3 h-3" />
              <span>Real-time Translation</span>
            </div>
            <div className="flex items-center space-x-1 text-muted-foreground">
              <Volume2 className="w-3 h-3" />
              <span>Voice Response</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}