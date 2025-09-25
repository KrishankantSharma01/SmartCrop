import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowLeft,
  Camera,
  Upload,
  Scan,
  AlertTriangle,
  CheckCircle,
  Info,
  Mic,
  Volume2,
  Globe,
  Brain,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FloatingVoiceButton } from "./FloatingVoiceButton";
import { useLanguage } from "./LanguageContext";
import CropDiseasePredictor from "./CropDiseasePredictor"; // Import the predictor component

interface CropDiseaseProps {
  onBack: () => void;
}

export function CropDisease({ onBack }: CropDiseaseProps) {
  const [step, setStep] = useState<"upload" | "analysis" | "results">("upload");
  const [selectedMethod, setSelectedMethod] = useState<
    "camera" | "upload" | null
  >(null);
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [showVoiceGuide, setShowVoiceGuide] = useState(false);
  const { currentLanguage, t } = useLanguage();

  const diseaseAnalysis = {
    disease: "Leaf Blight",
    diseaseHindi: "पत्ती झुलसा रोग",
    diseaseBengali: "পাতা পোড়া রোগ",
    diseaseTelugu: "ఆకు మండుట వ్యాధి",
    confidence: 92,
    severity: "moderate",
    crop: "Wheat",
    cropHindi: "गेहूं",
    cropBengali: "গম",
    cropTelugu: "గోధుమ",
    aiPrediction: {
      modelVersion: "v2.1",
      processingTime: "2.3s",
      imageQuality: "Excellent",
      detectedAreas: 3,
    },
  };

  const symptoms = [
    "Brown spots on leaves",
    "Yellowing of leaf edges",
    "Wilting in affected areas",
    "Reduced plant vigor",
  ];

  const treatment = [
    {
      step: 1,
      title: "Immediate Action",
      titleHindi: "तत्काल कार्य",
      action: "Remove affected leaves and burn them",
      actionHindi: "प्रभावित पत्तियों को हटाकर जलाएं",
    },
    {
      step: 2,
      title: "Spray Treatment",
      titleHindi: "छिड़काव उपचार",
      action: "Use copper-based fungicide spray",
      actionHindi: "कॉपर आधारित फंगीसाइड का छिड़काव करें",
    },
    {
      step: 3,
      title: "Prevention",
      titleHindi: "रोकथाम",
      action: "Ensure proper drainage and air circulation",
      actionHindi: "उचित जल निकासी और हवा का संचार सुनिश्चित करें",
    },
  ];

  const preventiveMeasures = [
    "Crop rotation with non-host plants",
    "Use disease-resistant varieties",
    "Maintain proper plant spacing",
    "Avoid overhead irrigation",
    "Regular field monitoring",
  ];

  const handleVoiceAssistant = () => {
    setIsVoiceActive(!isVoiceActive);
    if (!isVoiceActive) {
      setShowVoiceGuide(true);
      setTimeout(() => {
        setIsVoiceActive(false);
        setShowVoiceGuide(false);
      }, 3000);
    }
  };

  const getMultilingualText = (key: string) => {
    const texts: Record<string, Record<string, string>> = {
      diseaseDetection: {
        en: "Crop Disease Detection",
        hi: "फसल रोग की पहचान",
        bn: "ফসলের রোগ সনাক্তকরণ",
        te: "పంట వ్యాధి గుర్తింపు",
      },
      aiPowered: {
        en: "AI-Powered Analysis",
        hi: "AI संचालित विश्लेषण",
        bn: "AI চালিত বিশ্লেষণ",
        te: "AI శక్తితో విశ్లేషణ",
      },
      voiceGuided: {
        en: "Voice-Guided Detection",
        hi: "आवाज गाइडेड पहचान",
        bn: "কণ্ঠস্বর গাইডেড সনাক্তকরণ",
        te: "వాయిస్ గైడెడ్ గుర్తింపు",
      },
    };
    return texts[key]?.[currentLanguage] || texts[key]?.en || "";
  };

  if (step === "results") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="bg-white shadow-sm p-4">
          <div className="max-w-4xl mx-auto flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={() => setStep("upload")}>
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <div>
              <h1 className="text-lg font-bold text-primary">
                Disease Analysis Results
              </h1>
              <p className="text-sm text-muted-foreground">
                रोग विश्लेषण परिणाम
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto p-4 space-y-6">
          <CropDiseasePredictor />{" "}
          {/* Integrate the predictor component here */}
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              Save Report / रिपोर्ट सेव करें
            </Button>
            <Button variant="outline" className="flex-1">
              Consult Expert / विशेषज्ञ से सलाह लें
            </Button>
            <Button variant="outline" className="flex-1">
              Share Report / रिपोर्ट साझा करें
            </Button>
          </div>
          <FloatingVoiceButton onVoiceAssistant={handleVoiceAssistant} />
        </div>
      </div>
    );
  }

  if (step === "analysis") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center">
        <Card className="w-full max-w-lg mx-4 p-8 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 opacity-50"></div>

          <div className="relative z-10 space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto relative">
              <Brain className="w-10 h-10 text-white animate-pulse" />
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary">
                AI Analysis in Progress
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {currentLanguage === "hi" && "AI विश्लेषण प्रगति में है..."}
                {currentLanguage === "bn" && "AI বিশ্লেষণ চলছে..."}
                {currentLanguage === "te" && "AI విశ్లేషణ జరుగుతోంది..."}
                {currentLanguage === "en" &&
                  "Advanced disease pattern recognition..."}
              </p>
            </div>

            <Card className="p-4 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Volume2 className="w-4 h-4 text-green-600 animate-pulse" />
                <span className="text-sm font-medium text-green-700">
                  Voice Analysis Active
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                {currentLanguage === "hi" &&
                  "आपकी भाषा में परिणाम तैयार किए जा रहे हैं..."}
                {currentLanguage === "bn" &&
                  "আপনার ভাষায় ফলাফল প্রস্তুত করা হচ্ছে..."}
                {currentLanguage === "te" &&
                  "మీ భాషలో ఫలితాలు సిద్ధం చేయబడుతున్నాయి..."}
                {currentLanguage === "en" &&
                  "Preparing results in your preferred language..."}
              </p>
            </Card>

            <div className="space-y-3">
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary to-blue-600 h-3 rounded-full animate-pulse"
                  style={{ width: "85%" }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Image processed</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  <span>Disease patterns detected</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Scan className="w-3 h-3 text-yellow-500 animate-spin" />
                  <span>Confidence calculation</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Globe className="w-3 h-3 text-blue-500 animate-pulse" />
                  <span>Multilingual output</span>
                </div>
              </div>
            </div>

            <Button
              onClick={() => setStep("results")}
              className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
              disabled
            >
              <Brain className="w-4 h-4 mr-2" />
              Processing AI Analysis...
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="bg-white shadow-sm p-4">
        <div className="max-w-4xl mx-auto flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-primary">
              Crop Disease Detection
            </h1>
            <p className="text-sm text-muted-foreground">फसल रोग की पहचान</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        <Card className="p-6 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Mic className="w-8 h-8 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  🎤 Voice-Guided Disease Detection
                </h3>
                <p className="text-sm text-green-100">
                  {currentLanguage === "hi" &&
                    "अपनी भाषा में बोलें - हिंदी, अंग्रेजी, बंगाली और 8+ भाषाएं समर्थित"}
                  {currentLanguage === "bn" &&
                    "আপনার ভাষায় কথা বলুন - বাংলা, হিন্দি, ইংরেজি এবং 8+ ভাষা সমর্থিত"}
                  {currentLanguage === "te" &&
                    "మీ భాషలో మాట్లాడండి - తెలుగు, హిందీ, ఇంగ్లీష్ మరియు 8+ భాషలు మద్దతు"}
                  {currentLanguage === "en" &&
                    "Speak in your language - Hindi, English, Bengali & 8+ languages supported"}
                </p>
              </div>
            </div>
            <Button
              onClick={handleVoiceAssistant}
              className="bg-white/20 hover:bg-white/30 border-white/30 flex items-center space-x-2"
              variant="outline"
            >
              <Mic className="w-4 h-4" />
              <span>Start Voice Guide</span>
            </Button>
          </div>
        </Card>

        {showVoiceGuide && (
          <Card className="fixed inset-4 z-50 p-6 bg-white shadow-2xl border-2 border-primary max-w-md mx-auto my-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <Mic className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold">Voice Assistant Active</h3>
              <p className="text-sm text-muted-foreground">
                {currentLanguage === "hi" &&
                  '"मेरी फसल में कौन सा रोग है?" या "पत्तों पर भूरे धब्बे हैं" कहें'}
                {currentLanguage === "bn" &&
                  '"আমার ফসলে কী রোগ আছে?" বা "পাতায় বাদামী দাগ আছে" বলুন'}
                {currentLanguage === "te" &&
                  '"నా పంటలో ఏ వ్యాధి ఉంది?" లేదా "ఆకులపై గోధుమ రంగు మచ్చలు ఉన్నాయి" అని చెప్పండి'}
                {currentLanguage === "en" &&
                  'Say "What disease is in my crop?" or "There are brown spots on leaves"'}
              </p>
              <div className="flex items-center justify-center space-x-2 text-sm text-green-600">
                <Globe className="w-4 h-4" />
                <span>12 languages supported</span>
              </div>
              <Button
                onClick={() => setShowVoiceGuide(false)}
                variant="outline"
                className="w-full"
              >
                Close
              </Button>
            </div>
          </Card>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            className={`p-6 text-center space-y-4 cursor-pointer transition-all ${
              selectedMethod === "camera"
                ? "ring-2 ring-primary bg-primary/5"
                : "hover:shadow-lg"
            }`}
            onClick={() => setSelectedMethod("camera")}
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Camera className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold">Take Photo</h3>
              <p className="text-sm text-muted-foreground">फोटो खींचें</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Capture affected leaves or plants directly
            </p>
          </Card>

          <Card
            className={`p-6 text-center space-y-4 cursor-pointer transition-all ${
              selectedMethod === "upload"
                ? "ring-2 ring-primary bg-primary/5"
                : "hover:shadow-lg"
            }`}
            onClick={() => setSelectedMethod("upload")}
          >
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto">
              <Upload className="w-8 h-8 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold">Upload Image</h3>
              <p className="text-sm text-muted-foreground">छवि अपलोड करें</p>
            </div>
            <p className="text-xs text-muted-foreground">
              Select image from your gallery
            </p>
          </Card>
        </div>

        {selectedMethod && (
          <Card className="p-6">
            <div className="space-y-4">
              <div className="text-center">
                <h3 className="font-semibold mb-2">
                  {selectedMethod === "camera"
                    ? "Camera Ready"
                    : "Select Image"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {selectedMethod === "camera"
                    ? `${
                        currentLanguage === "hi"
                          ? "कैमरा तैयार"
                          : currentLanguage === "bn"
                          ? "ক্যামেরা প্রস্তুত"
                          : currentLanguage === "te"
                          ? "కెమెరా సిద్ధం"
                          : "Camera Ready"
                      } - Make sure the affected area is clearly visible`
                    : `${
                        currentLanguage === "hi"
                          ? "छवि चुनें"
                          : currentLanguage === "bn"
                          ? "ছবি নির্বাচন করুন"
                          : currentLanguage === "te"
                          ? "చిత్రాన్ని ఎంచుకోండి"
                          : "Select Image"
                      } - Choose a clear image of the affected plant`}
                </p>
              </div>

              <Card className="p-3 bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Mic className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-green-700">
                      Voice Assistant Tip
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {currentLanguage === "hi" &&
                        'फोटो लेने के बाद, आवाज़ से पूछें: "यह कौन सा रोग है?"'}
                      {currentLanguage === "bn" &&
                        'ছবি তোলার পর, কণ্ঠস্বরে জিজ্ঞাসা করুন: "এটি কোন রোগ?"'}
                      {currentLanguage === "te" &&
                        'ఫోటో తీసిన తర్వాత, వాయిస్‌తో అడగండి: "ఇది ఏ వ్యాధి?"'}
                      {currentLanguage === "en" &&
                        'After taking photo, ask with voice: "What disease is this?"'}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleVoiceAssistant}
                    className="border-green-300 text-green-600 hover:bg-green-50"
                  >
                    <Mic className="w-3 h-3" />
                  </Button>
                </div>
              </Card>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => {
                    setStep("analysis");
                    setTimeout(() => setStep("results"), 3000);
                  }}
                  className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700"
                >
                  <Brain className="w-4 h-4 mr-2" />
                  {selectedMethod === "camera"
                    ? "Capture & AI Analyze"
                    : "Upload & AI Analyze"}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => setSelectedMethod(null)}
                  className="flex-1"
                >
                  Change Method /{currentLanguage === "hi" && " विधि बदलें"}
                  {currentLanguage === "bn" && " পদ্ধতি পরিবর্তন করুন"}
                  {currentLanguage === "te" && " పద్ధతిని మార్చండి"}
                  {currentLanguage === "en" && " Change Method"}
                </Button>
              </div>
            </div>
          </Card>
        )}

        <Card className="p-6 bg-gradient-to-r from-green-50 via-blue-50 to-purple-50 border-2 border-primary/20">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-lg text-primary">
              🤖 AI Disease Detection Features
            </h3>
            <Badge className="bg-green-600 text-white">12 Languages</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            {currentLanguage === "hi" &&
              "बहुभाषी AI रोग पहचान सुविधाएं - आपकी भाषा में स्मार्ट समाधान"}
            {currentLanguage === "bn" &&
              "বহুভাষিক AI রোগ সনাক্তকরণ বৈশিষ্ট্য - আপনার ভাষায় স্মার্ট সমাধান"}
            {currentLanguage === "te" &&
              "బహుభాషా AI వ్యాధి గుర్తింపు లక్షణాలు - మీ భాషలో స్మార్ట్ పరిష్కారాలు"}
            {currentLanguage === "en" &&
              "Multilingual AI disease detection features - Smart solutions in your language"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-green-200">
              <div className="w-12 h-12 bg-gradient-to-r from-primary to-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-sm text-primary">AI Powered</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Advanced neural networks
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-sm text-blue-600">Multilingual</h4>
              <p className="text-xs text-muted-foreground mt-1">
                12+ languages supported
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-green-200">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-sm text-green-600">Voice Guided</h4>
              <p className="text-xs text-muted-foreground mt-1">
                Speak in any language
              </p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-orange-200">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="font-bold text-sm text-orange-600">
                98% Accurate
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Proven reliability
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg border border-green-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mic className="w-5 h-5 text-green-600 animate-pulse" />
                <span className="font-medium text-sm">
                  {currentLanguage === "hi" && "अभी अपनी भाषा में बोलकर पूछें!"}
                  {currentLanguage === "bn" &&
                    "এখনই আপনার ভাষায় বলে জিজ্ঞাসা করুন!"}
                  {currentLanguage === "te" &&
                    "ఇప్పుడే మీ భాషలో మాట్లాడి అడగండి!"}
                  {currentLanguage === "en" &&
                    "Ask now by speaking in your language!"}
                </span>
              </div>
              <Button
                size="sm"
                onClick={handleVoiceAssistant}
                className="bg-green-600 hover:bg-green-700"
              >
                <Mic className="w-4 h-4 mr-1" />
                Try Voice
              </Button>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">
            Common Crop Diseases / सामान्य फसल रोग
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { name: "Leaf Blight", hindi: "पत्ती झुलसा" },
              { name: "Rust", hindi: "किट्ट रोग" },
              { name: "Powdery Mildew", hindi: "चूर्णिल आसिता" },
              { name: "Bacterial Wilt", hindi: "जीवाणु म्लानि" },
              { name: "Root Rot", hindi: "जड़ सड़न" },
              { name: "Mosaic Virus", hindi: "मोज़ेक वायरस" },
              { name: "Anthracnose", hindi: "एंथ्रेक्नोज" },
              { name: "Canker", hindi: "कैंकर रोग" },
            ].map((disease, index) => (
              <div key={index} className="p-2 bg-gray-50 rounded text-center">
                <p className="text-xs font-medium">{disease.name}</p>
                <p className="text-xs text-muted-foreground">{disease.hindi}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-3">
            Photography Tips / फोटोग्राफी टिप्स
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
              <span>
                Take clear, close-up photos of affected leaves or areas
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
              <span>
                Ensure good lighting - avoid shadows and blurry images
              </span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
              <span>Include multiple angles if disease is widespread</span>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
              <span>
                Capture both affected and healthy parts for comparison
              </span>
            </div>
          </div>
        </Card>

        <FloatingVoiceButton onVoiceAssistant={handleVoiceAssistant} />
      </div>
    </div>
  );
}
