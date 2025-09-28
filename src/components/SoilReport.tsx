import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { ArrowLeft, Upload, FileText, TrendingUp, TrendingDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface SoilReportProps {
  onBack: () => void;
}

export function SoilReport({ onBack }: SoilReportProps) {
  const [step, setStep] = useState<'upload' | 'results'>('upload');

  const soilData = {
    pH: { value: 6.8, status: 'good', recommendation: 'Optimal for most crops' },
    nitrogen: { value: 68, status: 'medium', recommendation: 'Add organic matter' },
    phosphorus: { value: 45, status: 'low', recommendation: 'Apply phosphate fertilizer' },
    potassium: { value: 82, status: 'good', recommendation: 'Maintain current levels' },
    organicMatter: { value: 3.2, status: 'good', recommendation: 'Good organic content' }
  };

  const recommendedCrops = [
    { name: 'Wheat', hindi: 'गेहूं', suitability: 95, season: 'Rabi' },
    { name: 'Mustard', hindi: 'सरसों', suitability: 88, season: 'Rabi' },
    { name: 'Chickpea', hindi: 'चना', suitability: 92, season: 'Rabi' },
    { name: 'Barley', hindi: 'जौ', suitability: 85, season: 'Rabi' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'text-green-600 bg-green-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <TrendingUp className="w-4 h-4" />;
      case 'low': return <TrendingDown className="w-4 h-4" />;
      default: return <TrendingUp className="w-4 h-4" />;
    }
  };

  if (step === 'results') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <div className="max-w-4xl mx-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setStep('upload')}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary">Soil Analysis Report</h1>
              <p className="text-sm text-muted-foreground">Detailed soil health assessment</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 space-y-6">
          {/* Overall Health Score */}
          <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold">Soil Health Score</h2>
                <p className="text-primary-foreground/90">मिट्टी स्वास्थ्य स्कोर</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold">78/100</p>
                <Badge variant="secondary">Good</Badge>
              </div>
            </div>
          </Card>

          {/* Nutrient Analysis */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Nutrient Analysis / पोषक तत्व विश्लेषण</h3>
            <div className="space-y-4">
              {Object.entries(soilData).map(([key, data]) => (
                <div key={key} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(data.status)}
                      <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    </div>
                    <Badge className={getStatusColor(data.status)}>
                      {data.status.toUpperCase()}
                    </Badge>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1">
                      <Progress value={typeof data.value === 'number' ? data.value : 50} className="h-2" />
                    </div>
                    <span className="text-sm font-medium min-w-12">{data.value}{key === 'pH' ? '' : '%'}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{data.recommendation}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Recommended Crops */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recommended Crops / सुझावित फसलें</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendedCrops.map((crop, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-primary">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold">{crop.name}</h4>
                      <p className="text-sm text-muted-foreground">{crop.hindi}</p>
                    </div>
                    <Badge variant="outline">{crop.season}</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span>Suitability</span>
                      <span className="font-medium">{crop.suitability}%</span>
                    </div>
                    <Progress value={crop.suitability} className="h-2" />
                  </div>
                </Card>
              ))}
            </div>
          </Card>

          {/* Improvement Suggestions */}
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Improvement Suggestions / सुधार सुझाव</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Increase Phosphorus</p>
                  <p className="text-xs text-muted-foreground">Apply DAP fertilizer at 50kg per acre</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Add Organic Matter</p>
                  <p className="text-xs text-muted-foreground">Use compost or farmyard manure</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <p className="font-medium text-sm">Maintain pH Balance</p>
                  <p className="text-xs text-muted-foreground">Current pH is optimal for most crops</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Download Report / रिपोर्ट डाउनलोड करें
            </Button>
            <Button variant="outline" className="flex-1">
              Schedule Soil Test / मिट्टी परीक्षण बुक करें
            </Button>
          </div>
        </div>
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
            <h1 className="text-lg font-bold text-primary">Soil Report</h1>
            <p className="text-sm text-muted-foreground">Upload soil test or analyze your soil type</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Upload Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Upload Soil Test */}
          <Card className="p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Upload Soil Test Report</h3>
              <p className="text-sm text-muted-foreground">
                मिट्टी परीक्षण रिपोर्ट अपलोड करें
              </p>
            </div>
            <Button 
              onClick={() => setStep('results')}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Upload Report / रिपोर्ट अपलोड करें
            </Button>
          </Card>

          {/* Quick Analysis */}
          <Card className="p-6 text-center space-y-4">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <FileText className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Quick Soil Analysis</h3>
              <p className="text-sm text-muted-foreground">
                तुरंत मिट्टी विश्लेषण
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => setStep('results')}
              className="w-full"
            >
              Start Analysis / विश्लेषण शुरू करें
            </Button>
          </Card>
        </div>

        {/* Sample Report Preview */}
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1667224695106-fbe939c69f6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2lsJTIwZmFybWluZ3xlbnwxfHx8fDE3NTc1MTQ4OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Soil Sample"
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold">What You'll Get</h3>
              <p className="text-sm text-muted-foreground">Comprehensive soil health analysis</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-3 bg-primary/5 rounded-lg">
              <p className="font-semibold text-primary">pH Level</p>
              <p className="text-xs text-muted-foreground">Acidity measure</p>
            </div>
            <div className="text-center p-3 bg-secondary/10 rounded-lg">
              <p className="font-semibold text-accent">NPK Values</p>
              <p className="text-xs text-muted-foreground">Nutrient content</p>
            </div>
            <div className="text-center p-3 bg-green-50 rounded-lg">
              <p className="font-semibold text-green-600">Organic Matter</p>
              <p className="text-xs text-muted-foreground">Soil fertility</p>
            </div>
            <div className="text-center p-3 bg-blue-50 rounded-lg">
              <p className="font-semibold text-blue-600">Crop Recommendations</p>
              <p className="text-xs text-muted-foreground">Best suited crops</p>
            </div>
          </div>
        </Card>

        {/* Benefits */}
        <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
          <h3 className="font-semibold mb-3">Why Test Your Soil? / मिट्टी का परीक्षण क्यों करें?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Optimize Fertilizer Use</p>
                <p className="text-muted-foreground">Save money on unnecessary fertilizers</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Increase Crop Yield</p>
                <p className="text-muted-foreground">Choose the right crops for your soil</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
              <div>
                <p className="font-medium">Improve Soil Health</p>
                <p className="text-muted-foreground">Long-term sustainability</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}