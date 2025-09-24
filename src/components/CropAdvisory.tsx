import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { ArrowLeft, Calendar, Droplets, Bug, Zap } from "lucide-react";
import { FloatingVoiceButton } from "./FloatingVoiceButton";

interface CropAdvisoryProps {
  onBack: () => void;
  onVoiceAssistant?: () => void;
}

export function CropAdvisory({ onBack, onVoiceAssistant }: CropAdvisoryProps) {
  const [step, setStep] = useState<'input' | 'results'>('input');
  const [formData, setFormData] = useState({
    crop: '',
    location: '',
    soilType: '',
    farmSize: ''
  });

  const handleSubmit = () => {
    if (formData.crop && formData.location && formData.soilType) {
      setStep('results');
    }
  };

  const recommendations = [
    {
      id: 'sowing',
      title: 'Sowing Time',
      titleHindi: 'बुआई का समय',
      icon: Calendar,
      content: 'Best sowing period: March 15 - April 10',
      details: 'Temperature should be 25-30°C with good soil moisture',
      priority: 'high'
    },
    {
      id: 'fertilizer',
      title: 'Fertilizer Schedule',
      titleHindi: 'उर्वरक कार्यक्रम',
      icon: Zap,
      content: 'NPK 10:26:26 - 50kg per acre',
      details: 'Apply at sowing, then after 20-25 days',
      priority: 'high'
    },
    {
      id: 'irrigation',
      title: 'Irrigation Schedule',
      titleHindi: 'सिंचाई कार्यक्रम',
      icon: Droplets,
      content: 'Water every 7-10 days',
      details: 'Critical stages: flowering and pod filling',
      priority: 'medium'
    },
    {
      id: 'pest',
      title: 'Pest Management',
      titleHindi: 'कीट प्रबंधन',
      icon: Bug,
      content: 'Watch for aphids and pod borers',
      details: 'Use neem oil spray as preventive measure',
      priority: 'medium'
    }
  ];

  if (step === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="max-w-4xl mx-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setStep('input')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary">Crop Advisory Results</h1>
              <p className="text-sm text-muted-foreground">
                Recommendations for {formData.crop} in {formData.location}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 space-y-6">
          {/* Summary Card */}
          <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">🌾 {formData.crop} Advisory</h2>
              <p className="text-primary-foreground/90">
                Based on {formData.soilType} soil in {formData.location}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="secondary">Optimal Season</Badge>
                <Badge variant="secondary">Good Soil Match</Badge>
                <Badge variant="secondary">Market Demand High</Badge>
              </div>
            </div>
          </Card>

          {/* Recommendations */}
          <div className="space-y-4">
            {recommendations.map((rec) => {
              const IconComponent = rec.icon;
              return (
                <Card key={rec.id} className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      rec.priority === 'high' ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold">{rec.title}</h3>
                          <p className="text-sm text-muted-foreground">{rec.titleHindi}</p>
                        </div>
                        <Badge variant={rec.priority === 'high' ? 'destructive' : 'secondary'}>
                          {rec.priority === 'high' ? 'High Priority' : 'Medium Priority'}
                        </Badge>
                      </div>
                      <p className="font-medium text-primary">{rec.content}</p>
                      <p className="text-sm text-muted-foreground">{rec.details}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Save Advisory / सलाह सेव करें
            </Button>
            <Button variant="outline" className="flex-1">
              Share with Expert / विशेषज्ञ के साथ साझा करें
            </Button>
          </div>
        </div>
        
        {/* Floating Voice Assistant Button */}
        {onVoiceAssistant && <FloatingVoiceButton onVoiceAssistant={onVoiceAssistant} />}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-primary">Crop Advisory</h1>
            <p className="text-sm text-muted-foreground">Get personalized crop recommendations</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <Card className="p-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold mb-2">Tell us about your farm</h2>
              <p className="text-sm text-muted-foreground">
                हमें अपने खेत के बारे में बताएं ताकि हम बेहतर सलाह दे सकें
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="crop">Crop Name / फसल का नाम</Label>
                <Select value={formData.crop} onValueChange={(value) => setFormData({...formData, crop: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select crop / फसल चुनें" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wheat">Wheat / गेहूं</SelectItem>
                    <SelectItem value="rice">Rice / चावल</SelectItem>
                    <SelectItem value="maize">Maize / मक्का</SelectItem>
                    <SelectItem value="sugarcane">Sugarcane / गन्ना</SelectItem>
                    <SelectItem value="cotton">Cotton / कपास</SelectItem>
                    <SelectItem value="soybean">Soybean / सोयाबीन</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / स्थान</Label>
                <Input
                  id="location"
                  placeholder="Enter your district / जिला दर्ज करें"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="soilType">Soil Type / मिट्टी का प्रकार</Label>
                <Select value={formData.soilType} onValueChange={(value) => setFormData({...formData, soilType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select soil type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clay">Clay / चिकनी मिट्टी</SelectItem>
                    <SelectItem value="sandy">Sandy / रेतीली मिट्टी</SelectItem>
                    <SelectItem value="loamy">Loamy / दोमट मिट्टी</SelectItem>
                    <SelectItem value="black">Black / काली मिट्टी</SelectItem>
                    <SelectItem value="red">Red / लाल मिट्टी</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="farmSize">Farm Size / खेत का आकार</Label>
                <Input
                  id="farmSize"
                  placeholder="Enter in acres / एकड़ में दर्ज करें"
                  value={formData.farmSize}
                  onChange={(e) => setFormData({...formData, farmSize: e.target.value})}
                />
              </div>
            </div>

            <Button 
              onClick={handleSubmit}
              className="w-full h-12 bg-primary hover:bg-primary/90"
              disabled={!formData.crop || !formData.location || !formData.soilType}
            >
              Get Advisory / सलाह प्राप्त करें
            </Button>
          </div>
        </Card>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Sowing Calendar</h3>
            <p className="text-xs text-muted-foreground">Optimal planting times</p>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Fertilizer Guide</h3>
            <p className="text-xs text-muted-foreground">Nutrition recommendations</p>
          </Card>
          
          <Card className="p-4 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bug className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-sm mb-1">Pest Control</h3>
            <p className="text-xs text-muted-foreground">Disease prevention tips</p>
          </Card>
        </div>
      </div>
    </div>
  );
}