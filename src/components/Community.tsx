import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowLeft, Users, BookOpen, Award, HelpCircle, ExternalLink, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CommunityProps {
  onBack: () => void;
}

export function Community({ onBack }: CommunityProps) {
  const govSchemes = [
    {
      title: 'PM-KISAN Scheme',
      titleHindi: 'प्रधानमंत्री किसान सम्मान निधि',
      description: '₹6000 annual income support',
      descriptionHindi: '₹6000 वार्षिक आय सहायता',
      status: 'Active',
      deadline: 'Ongoing'
    },
    {
      title: 'Crop Insurance Scheme',
      titleHindi: 'फसल बीमा योजना',
      description: 'Protection against crop loss',
      descriptionHindi: 'फसल नुकसान से सुरक्षा',
      status: 'Apply Now',
      deadline: 'Dec 31, 2024'
    },
    {
      title: 'Soil Health Card',
      titleHindi: 'मृदा स्वास्थ्य कार्ड',
      description: 'Free soil testing facility',
      descriptionHindi: 'निःशुल्क मिट्टी परीक्षण सुविधा',
      status: 'Available',
      deadline: 'Anytime'
    }
  ];

  const farmingTips = [
    {
      category: 'Organic Farming',
      categoryHindi: 'जैविक खेती',
      tips: [
        'Use vermicompost for better soil health',
        'Crop rotation reduces pest problems',
        'Natural pesticides are safer and effective'
      ]
    },
    {
      category: 'Water Management',
      categoryHindi: 'जल प्रबंधन',
      tips: [
        'Drip irrigation saves 40% water',
        'Mulching reduces water evaporation',
        'Rainwater harvesting for dry seasons'
      ]
    },
    {
      category: 'Modern Techniques',
      categoryHindi: 'आधुनिक तकनीक',
      tips: [
        'Use weather apps for better planning',
        'GPS-guided tractors for precision farming',
        'Drone technology for crop monitoring'
      ]
    }
  ];

  const experts = [
    {
      name: 'Dr. Rajesh Kumar',
      specialty: 'Crop Scientist',
      specialtyHindi: 'फसल वैज्ञानिक',
      experience: '15 years',
      rating: 4.8,
      contact: '+91-98765-43210'
    },
    {
      name: 'Dr. Priya Sharma',
      specialty: 'Soil Expert',
      specialtyHindi: 'मृदा विशेषज्ञ',
      experience: '12 years',
      rating: 4.9,
      contact: '+91-98765-43211'
    },
    {
      name: 'Dr. Anil Verma',
      specialty: 'Plant Protection',
      specialtyHindi: 'पौधा संरक्षण',
      experience: '18 years',
      rating: 4.7,
      contact: '+91-98765-43212'
    }
  ];

  const faqs = [
    {
      question: 'How to apply for crop insurance?',
      questionHindi: 'फसल बीमा के लिए आवेदन कैसे करें?',
      answer: 'Visit your nearest bank or CSC center with land documents and Aadhaar card.'
    },
    {
      question: 'When is the best time to apply fertilizer?',
      questionHindi: 'उर्वरक डालने का सबसे अच्छा समय क्या है?',
      answer: 'Apply fertilizer during sowing and top-dress during active growth periods.'
    },
    {
      question: 'How to get soil health card?',
      questionHindi: 'मृदा स्वास्थ्य कार्ड कैसे प्राप्त करें?',
      answer: 'Contact your local agricultural extension officer or visit district collectorate.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      {/* Header */}
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-primary">Community & Support</h1>
            <p className="text-sm text-muted-foreground">समुदाय और सहायता</p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-4 space-y-6">
        {/* Welcome Banner */}
        <Card className="p-6 bg-gradient-to-r from-primary to-primary/80 text-white">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">Welcome to Farmer Community</h2>
              <p className="text-primary-foreground/90">
                Connect, Learn, and Grow Together / जुड़ें, सीखें, और साथ बढ़ें
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-8 h-8" />
              <div className="text-right">
                <p className="text-2xl font-bold">50K+</p>
                <p className="text-sm">Active Farmers</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Government Schemes */}
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Government Schemes / सरकारी योजनाएं</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {govSchemes.map((scheme, index) => (
              <Card key={index} className="p-4 border-l-4 border-l-primary">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">{scheme.title}</h4>
                    <p className="text-sm text-muted-foreground">{scheme.titleHindi}</p>
                  </div>
                  <div>
                    <p className="text-sm">{scheme.description}</p>
                    <p className="text-xs text-muted-foreground">{scheme.descriptionHindi}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant={scheme.status === 'Apply Now' ? 'default' : 'secondary'}>
                      {scheme.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{scheme.deadline}</span>
                  </div>
                  <Button size="sm" variant="outline" className="w-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Learn More
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Farming Tips */}
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <BookOpen className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Farming Tips & Guides / कृषि सुझाव और गाइड</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {farmingTips.map((category, index) => (
              <Card key={index} className="p-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-primary">{category.category}</h4>
                    <p className="text-sm text-muted-foreground">{category.categoryHindi}</p>
                  </div>
                  <ul className="space-y-2">
                    {category.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                        <p className="text-sm">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* Expert Consultants */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Connect with Experts / विशेषज्ञों से जुड़ें</h3>
            </div>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {experts.map((expert, index) => (
              <Card key={index} className="p-4 text-center">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{expert.name}</h4>
                    <p className="text-sm text-muted-foreground">{expert.specialty}</p>
                    <p className="text-xs text-muted-foreground">{expert.specialtyHindi}</p>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm font-medium">{expert.rating}</span>
                    <span className="text-xs text-muted-foreground">({expert.experience})</span>
                  </div>
                  <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                    <Phone className="w-3 h-3 mr-1" />
                    Contact / संपर्क करें
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>

        {/* FAQ Section */}
        <Card className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <HelpCircle className="w-5 h-5 text-primary" />
            <h3 className="text-lg font-semibold">Frequently Asked Questions / पूछे जाने वाले प्रश्न</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-4">
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground">{faq.questionHindi}</p>
                  </div>
                  <p className="text-sm">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-4">
            <Button variant="outline">
              View All FAQs / सभी प्रश्न देखें
            </Button>
          </div>
        </Card>

        {/* Contact Support */}
        <Card className="p-6 bg-gradient-to-r from-secondary/10 to-primary/10">
          <div className="text-center space-y-4">
            <div>
              <h3 className="font-semibold">Need More Help? / और मदद चाहिए?</h3>
              <p className="text-sm text-muted-foreground">
                Our support team is available 24/7 to assist you
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button className="bg-primary hover:bg-primary/90">
                <Phone className="w-4 h-4 mr-2" />
                Call Support / सहायता कॉल करें
              </Button>
              <Button variant="outline">
                WhatsApp Chat / व्हाट्सऐप चैट
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">
              Toll-free: 1800-XXX-XXXX | Available in Hindi & English
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}