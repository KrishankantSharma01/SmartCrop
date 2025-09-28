import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { ArrowLeft, TrendingUp, TrendingDown, Search, MapPin } from "lucide-react";

interface MarketPricesProps {
  onBack: () => void;
}

export function MarketPrices({ onBack }: MarketPricesProps) {
  const marketData = [
    {
      crop: 'Wheat',
      hindi: 'गेहूं',
      currentPrice: 2150,
      previousPrice: 2080,
      change: 70,
      changePercent: 3.4,
      market: 'Delhi',
      unit: 'per quintal'
    },
    {
      crop: 'Rice',
      hindi: 'चावल',
      currentPrice: 3200,
      previousPrice: 3250,
      change: -50,
      changePercent: -1.5,
      market: 'Punjab',
      unit: 'per quintal'
    },
    {
      crop: 'Sugarcane',
      hindi: 'गन्ना',
      currentPrice: 350,
      previousPrice: 340,
      change: 10,
      changePercent: 2.9,
      market: 'UP',
      unit: 'per quintal'
    },
    {
      crop: 'Cotton',
      hindi: 'कपास',
      currentPrice: 6800,
      previousPrice: 6650,
      change: 150,
      changePercent: 2.3,
      market: 'Maharashtra',
      unit: 'per quintal'
    },
    {
      crop: 'Maize',
      hindi: 'मक्का',
      currentPrice: 1850,
      previousPrice: 1900,
      change: -50,
      changePercent: -2.6,
      market: 'Bihar',
      unit: 'per quintal'
    },
    {
      crop: 'Soybean',
      hindi: 'सोयाबीन',
      currentPrice: 4200,
      previousPrice: 4150,
      change: 50,
      changePercent: 1.2,
      market: 'MP',
      unit: 'per quintal'
    }
  ];

  const topGainers = marketData.filter(item => item.change > 0).slice(0, 3);
  const topLosers = marketData.filter(item => item.change < 0).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-primary">Market Prices</h1>
            <p className="text-sm text-muted-foreground">Latest mandi rates / नवीनतम मंडी भाव</p>
          </div>
          <Badge variant="outline">Live Updates</Badge>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Search and Filter */}
        <Card className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search crop / फसल खोजें" className="pl-10" />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Markets</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="punjab">Punjab</SelectItem>
                <SelectItem value="up">UP</SelectItem>
                <SelectItem value="maharashtra">Maharashtra</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Market Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold text-green-600">Top Gainers / शीर्ष बढ़ती</h3>
            </div>
            <div className="space-y-2">
              {topGainers.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-green-50 rounded">
                  <div>
                    <p className="font-medium text-sm">{item.crop}</p>
                    <p className="text-xs text-muted-foreground">{item.hindi}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+{item.changePercent}%</p>
                    <p className="text-xs text-muted-foreground">₹{item.currentPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center space-x-2 mb-3">
              <TrendingDown className="w-5 h-5 text-red-600" />
              <h3 className="font-semibold text-red-600">Top Losers / शीर्ष गिरती</h3>
            </div>
            <div className="space-y-2">
              {topLosers.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-red-50 rounded">
                  <div>
                    <p className="font-medium text-sm">{item.crop}</p>
                    <p className="text-xs text-muted-foreground">{item.hindi}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">{item.changePercent}%</p>
                    <p className="text-xs text-muted-foreground">₹{item.currentPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Price Table */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">All Crop Prices / सभी फसल मूल्य</h3>
          <div className="overflow-x-auto">
            <div className="space-y-3">
              {marketData.map((item, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div>
                        <h4 className="font-semibold">{item.crop}</h4>
                        <p className="text-sm text-muted-foreground">{item.hindi}</p>
                      </div>
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{item.market}</span>
                      </div>
                    </div>
                    
                    <div className="text-right space-y-1">
                      <div className="flex items-center space-x-2">
                        <p className="text-xl font-bold">₹{item.currentPrice.toLocaleString()}</p>
                        <div className={`flex items-center space-x-1 ${
                          item.change > 0 ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {item.change > 0 ? 
                            <TrendingUp className="w-4 h-4" /> : 
                            <TrendingDown className="w-4 h-4" />
                          }
                          <span className="text-sm font-medium">
                            {item.change > 0 ? '+' : ''}{item.changePercent}%
                          </span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{item.unit}</p>
                      <p className="text-xs text-muted-foreground">
                        Previous: ₹{item.previousPrice}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Card>

        {/* Price Alerts */}
        <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold">Price Alerts / मूल्य अलर्ट</h3>
              <p className="text-sm text-muted-foreground">
                Get notified when prices change
              </p>
            </div>
            <Button variant="outline">
              Set Alert / अलर्ट सेट करें
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>SMS notifications</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>WhatsApp updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Weekly reports</span>
            </div>
          </div>
        </Card>

        {/* Market Tips */}
        <Card className="p-6">
          <h3 className="font-semibold mb-3">Market Tips / बाजार सुझाव</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-sm">Best Selling Time</p>
                <p className="text-xs text-muted-foreground">
                  Wheat prices expected to rise in next 15 days due to increased demand
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div>
                <p className="font-medium text-sm">Storage Advice</p>
                <p className="text-xs text-muted-foreground">
                  Hold cotton stock for better prices expected after monsoon
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}