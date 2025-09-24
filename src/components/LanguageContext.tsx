import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'hi' | 'bn' | 'te' | 'mr' | 'ta' | 'gu' | 'kn' | 'ml' | 'pa' | 'or' | 'as';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<Language, Record<string, string>> = {
  // English
  en: {
    // Common
    'common.welcome': 'Welcome',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.submit': 'Submit',
    'common.search': 'Search',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    
    // App Title
    'app.title': 'Smart Crop Advisory',
    'app.tagline': 'Better Decisions for Better Harvests',
    
    // Language Selection
    'language.choose': 'Choose Language',
    'language.english': 'English',
    'language.hindi': 'हिंदी (Hindi)',
    'language.bengali': 'বাংলা (Bengali)',
    'language.telugu': 'తెలుగు (Telugu)',
    'language.marathi': 'मराठी (Marathi)',
    'language.tamil': 'தமிழ் (Tamil)',
    'language.gujarati': 'ગુજરાતી (Gujarati)',
    'language.kannada': 'ಕನ್ನಡ (Kannada)',
    'language.malayalam': 'മലയാളം (Malayalam)',
    'language.punjabi': 'ਪੰਜਾਬੀ (Punjabi)',
    'language.odia': 'ଓଡ଼ିଆ (Odia)',
    'language.assamese': 'অসমীয়া (Assamese)',
    
    // Splash Screen
    'splash.getStarted': 'Get Started',
    'splash.features': '🌱 Crop Advisory  🌾 Soil Report  💰 Market Prices',
    
    // Login
    'login.welcomeBack': 'Welcome Back',
    'login.mobileNumber': 'Mobile Number',
    'login.enterOtp': 'Enter OTP',
    'login.sendOtp': 'Send OTP',
    'login.verifyAndContinue': 'Verify & Continue',
    'login.changeNumber': 'Change Number',
    'login.secureLogin': 'Secure login with OTP verification',
    
    // Dashboard
    'dashboard.welcomeBack': 'Welcome back, Farmer!',
    'dashboard.profile': 'Profile',
    'dashboard.todayWeather': "Today's Weather",
    'dashboard.goodForSpraying': 'Good for spraying',
    'dashboard.startAdvisory': 'Start Advisory',
    'dashboard.cropsTracked': 'Crops Tracked',
    'dashboard.seasonRevenue': 'Season Revenue',
    'dashboard.farmSize': 'Farm Size',
    
    // Features
    'features.cropAdvisory': 'Crop Advisory',
    'features.cropAdvisoryDesc': 'Get AI-powered crop recommendations',
    'features.soilReport': 'Soil Report',
    'features.soilReportDesc': 'Analyze your soil health',
    'features.irrigationTips': 'Irrigation Tips',
    'features.irrigationTipsDesc': 'Smart watering guidance',
    'features.marketPrices': 'Market Prices',
    'features.marketPricesDesc': 'Latest mandi rates',
    'features.askExpert': 'Ask Expert',
    'features.askExpertDesc': 'Chat with agricultural experts',
    'features.community': 'Community',
    'features.communityDesc': 'Connect with other farmers',
    
    // Crop Advisory
    'cropAdvisory.title': 'Crop Advisory',
    'cropAdvisory.subtitle': 'Get personalized crop recommendations',
    'cropAdvisory.tellAboutFarm': 'Tell us about your farm',
    'cropAdvisory.cropName': 'Crop Name',
    'cropAdvisory.location': 'Location',
    'cropAdvisory.soilType': 'Soil Type',
    'cropAdvisory.farmSize': 'Farm Size',
    'cropAdvisory.getAdvisory': 'Get Advisory',
    'cropAdvisory.results': 'Crop Advisory Results',
    'cropAdvisory.saveAdvisory': 'Save Advisory',
    'cropAdvisory.shareWithExpert': 'Share with Expert',
    
    // Soil Report
    'soilReport.title': 'Soil Report',
    'soilReport.subtitle': 'Upload soil test or analyze your soil type',
    'soilReport.uploadReport': 'Upload Soil Test Report',
    'soilReport.quickAnalysis': 'Quick Soil Analysis',
    'soilReport.startAnalysis': 'Start Analysis',
    'soilReport.downloadReport': 'Download Report',
    'soilReport.scheduleTest': 'Schedule Soil Test',
    
    // Market Prices
    'marketPrices.title': 'Market Prices',
    'marketPrices.subtitle': 'Latest mandi rates',
    'marketPrices.topGainers': 'Top Gainers',
    'marketPrices.topLosers': 'Top Losers',
    'marketPrices.allCropPrices': 'All Crop Prices',
    'marketPrices.priceAlerts': 'Price Alerts',
    'marketPrices.setAlert': 'Set Alert',
    
    // Chatbot
    'chatbot.title': 'Agricultural Expert',
    'chatbot.subtitle': 'AI Assistant',
    'chatbot.placeholder': 'Type your question...',
    'chatbot.quickQuestions': 'Quick Questions',
    'chatbot.recording': 'Recording... Speak in any language',
    
    // Community
    'community.title': 'Community & Support',
    'community.welcomeMessage': 'Welcome to Farmer Community',
    'community.connectGrow': 'Connect, Learn, and Grow Together',
    'community.activeFarmers': 'Active Farmers',
    'community.govSchemes': 'Government Schemes',
    'community.farmingTips': 'Farming Tips & Guides',
    'community.connectExperts': 'Connect with Experts',
    'community.faq': 'Frequently Asked Questions',
    'community.needHelp': 'Need More Help?',
    'community.callSupport': 'Call Support',
    'community.whatsappChat': 'WhatsApp Chat',
  },

  // Hindi
  hi: {
    // Common
    'common.welcome': 'स्वागत',
    'common.back': 'वापस',
    'common.next': 'आगे',
    'common.save': 'सेव करें',
    'common.cancel': 'रद्द करें',
    'common.submit': 'जमा करें',
    'common.search': 'खोजें',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    
    // App Title
    'app.title': 'स्मार्ट फसल सलाह',
    'app.tagline': 'बेहतर फैसले, बेहतर फसल',
    
    // Language Selection
    'language.choose': 'भाषा चुनें',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.bengali': 'বাংলা (बंगाली)',
    'language.telugu': 'తెలుగు (तेलुगु)',
    'language.marathi': 'मराठी',
    'language.tamil': 'தமிழ் (तमिल)',
    'language.gujarati': 'ગુજરાતી (गुजराती)',
    'language.kannada': 'ಕನ್ನಡ (कन्नड़)',
    'language.malayalam': 'മലയാളം (मलयालम)',
    'language.punjabi': 'ਪੰਜਾਬੀ (पंजाबी)',
    'language.odia': 'ଓଡ଼ିଆ (उड़िया)',
    'language.assamese': 'অসমীয়া (असमिया)',
    
    // Splash Screen
    'splash.getStarted': 'शुरू करें',
    'splash.features': '🌱 फसल सलाह  🌾 मिट्टी रिपोर्ट  💰 बाज़ार भाव',
    
    // Login
    'login.welcomeBack': 'वापस स्वागत',
    'login.mobileNumber': 'मोबाइल नंबर',
    'login.enterOtp': 'OTP दर्ज करें',
    'login.sendOtp': 'OTP भेजें',
    'login.verifyAndContinue': 'सत्यापित करें',
    'login.changeNumber': 'नंबर बदलें',
    'login.secureLogin': 'OTP सत्यापन के साथ सुरक्षित लॉगिन',
    
    // Dashboard
    'dashboard.welcomeBack': 'वापस स्वागत, किसान!',
    'dashboard.profile': 'प्रोफ़ाइल',
    'dashboard.todayWeather': 'आज का मौसम',
    'dashboard.goodForSpraying': 'छिड़काव के लिए अच्छा',
    'dashboard.startAdvisory': 'सलाह शुरू करें',
    'dashboard.cropsTracked': 'ट्रैक की गई फसलें',
    'dashboard.seasonRevenue': 'सीज़न आय',
    'dashboard.farmSize': 'खेत का आकार',
    
    // Features
    'features.cropAdvisory': 'फसल सलाह',
    'features.cropAdvisoryDesc': 'AI द्वारा फसल सुझाव प्राप्त करें',
    'features.soilReport': 'मिट्टी रिपोर्ट',
    'features.soilReportDesc': 'अपनी मिट्टी के स्वास्थ्य का विश्लेषण करें',
    'features.irrigationTips': 'सिंचाई सुझाव',
    'features.irrigationTipsDesc': 'स्मार्ट पानी देने की मार्गदर्शिका',
    'features.marketPrices': 'बाज़ार भाव',
    'features.marketPricesDesc': 'नवीनतम मंडी दरें',
    'features.askExpert': 'विशेषज्ञ से पूछें',
    'features.askExpertDesc': 'कृषि विशेषज्ञों से बात करें',
    'features.community': 'समुदाय',
    'features.communityDesc': 'अन्य किसानों से जुड़ें',
    
    'cropAdvisory.title': 'फसल सलाह',
    'cropAdvisory.subtitle': 'व्यक्तिगत फसल सुझाव प्राप्त करें',
    'cropAdvisory.tellAboutFarm': 'हमें अपने खेत के बारे में बताएं',
    'cropAdvisory.cropName': 'फसल का नाम',
    'cropAdvisory.location': 'स्थान',
    'cropAdvisory.soilType': 'मिट्टी का प्रकार',
    'cropAdvisory.farmSize': 'खेत का आकार',
    'cropAdvisory.getAdvisory': 'सलाह प्राप्त करें',
    'cropAdvisory.results': 'फसल सलाह परिणाम',
    'cropAdvisory.saveAdvisory': 'सलाह सेव करें',
    'cropAdvisory.shareWithExpert': 'विशेषज्ञ के साथ साझा करें',
    
    'soilReport.title': 'मिट्टी रिपोर्ट',
    'soilReport.subtitle': 'मिट्टी परीक्षण अपलोड करें या अपनी मिट्टी का विश्लेषण करें',
    'soilReport.uploadReport': 'मिट्टी परीक्षण रिपोर्ट अपलोड करें',
    'soilReport.quickAnalysis': 'तुरंत मिट्टी विश्लेषण',
    'soilReport.startAnalysis': 'विश्लेषण शुरू करें',
    'soilReport.downloadReport': 'रिपोर्ट डाउनलोड करें',
    'soilReport.scheduleTest': 'मिट्टी परीक्षण बुक करें',
    
    'marketPrices.title': 'बाज़ार भाव',
    'marketPrices.subtitle': 'नवीनतम मंडी भाव',
    'marketPrices.topGainers': 'शीर्ष बढ़ती',
    'marketPrices.topLosers': 'शीर्ष गिरती',
    'marketPrices.allCropPrices': 'सभी फसल मूल्य',
    'marketPrices.priceAlerts': 'मूल्य अलर्ट',
    'marketPrices.setAlert': 'अलर्ट सेट करें',
    
    'chatbot.title': 'कृषि विशेषज्ञ',
    'chatbot.subtitle': 'AI सहायक',
    'chatbot.placeholder': 'अपना प्रश्न टाइप करें...',
    'chatbot.quickQuestions': 'त्वरित प्रश्न',
    'chatbot.recording': 'रिकॉर्डिंग... किसी भी भाषा में बोलें',
    
    'community.title': 'समुदाय और सहायता',
    'community.welcomeMessage': 'किसान समुदाय में आपका स्वागत',
    'community.connectGrow': 'जुड़ें, सीखें, और साथ बढ़ें',
    'community.activeFarmers': 'सक्रिय किसान',
    'community.govSchemes': 'सरकारी योजनाएं',
    'community.farmingTips': 'कृषि सुझाव और गाइड',
    'community.connectExperts': 'विशेषज्ञों से जुड़ें',
    'community.faq': 'पूछे जाने वाले प्रश्न',
    'community.needHelp': 'और मदद चाहिए?',
    'community.callSupport': 'सहायता कॉल करें',
    'community.whatsappChat': 'व्हाट्सऐप चैट',
  },

  // Bengali
  bn: {
    'common.welcome': 'স্বাগতম',
    'common.back': 'পিছনে',
    'common.next': 'পরবর্তী',
    'common.save': 'সংরক্ষণ করুন',
    'common.cancel': 'বাতিল',
    'common.submit': 'জমা দিন',
    'common.search': 'অনুসন্ধান',
    'common.loading': 'লোড হচ্ছে...',
    'common.error': 'ত্রুটি',
    'common.success': 'সফল',
    
    'app.title': 'স্মার্ট ফসল পরামর্শ',
    'app.tagline': 'ভাল সিদ্ধান্ত, ভাল ফসল',
    
    'language.choose': 'ভাষা নির্বাচন করুন',
    'language.english': 'English',
    'language.hindi': 'हिंदी (হিন্দি)',
    'language.bengali': 'বাংলা',
    'language.telugu': 'తెలుగు (তেলুগু)',
    'language.marathi': 'मराठी (মারাঠি)',
    'language.tamil': 'தமிழ் (তামিল)',
    'language.gujarati': 'ગુજરાતી (গুজরাটি)',
    'language.kannada': 'ಕನ್ನಡ (কন্নড়)',
    'language.malayalam': 'മലയാളം (মালয়ালাম)',
    'language.punjabi': 'ਪੰਜਾਬੀ (পাঞ্জাবি)',
    'language.odia': 'ଓଡ଼ିଆ (ওড়িয়া)',
    'language.assamese': 'অসমীয়া',
    
    'splash.getStarted': 'শুরু করুন',
    'splash.features': '🌱 ফসল পরামর্শ  🌾 মাটি রিপোর্ট  💰 বাজার দাম',
    
    'login.welcomeBack': 'স্বাগত ফিরে',
    'login.mobileNumber': 'মোবাইল নম্বর',
    'login.enterOtp': 'OTP প্রবেশ করুন',
    'login.sendOtp': 'OTP পাঠান',
    'login.verifyAndContinue': 'যাচাই করুন এবং চালিয়ে যান',
    'login.changeNumber': 'নম্বর পরিবর্তন করুন',
    'login.secureLogin': 'OTP যাচাইকরণ সহ নিরাপদ লগইন',
    
    'dashboard.welcomeBack': 'স্বাগত ফিরে, কৃষক!',
    'dashboard.profile': 'প্রোফাইল',
    'dashboard.todayWeather': 'আজকের আবহাওয়া',
    'dashboard.goodForSpraying': 'স্প্রে করার জন্য ভাল',
    'dashboard.startAdvisory': 'পরামর্শ শুরু করুন',
    'dashboard.cropsTracked': 'ট্র্যাক করা ফসল',
    'dashboard.seasonRevenue': 'মৌসুমী আয়',
    'dashboard.farmSize': 'খামারের আকার',
    
    'features.cropAdvisory': 'ফসল পরামর্শ',
    'features.cropAdvisoryDesc': 'AI চালিত ফসল সুপারিশ পান',
    'features.soilReport': 'মাটি রিপোর্ট',
    'features.soilReportDesc': 'আপনার মাটির স্বাস্থ্য বিশ্লেষণ করুন',
    'features.irrigationTips': 'সেচের টিপস',
    'features.irrigationTipsDesc': 'স্মার��ট পানি দেওয়ার নির্দেশনা',
    'features.marketPrices': 'বাজার দাম',
    'features.marketPricesDesc': 'সর্বশেষ মান্ডি দর',
    'features.askExpert': 'বিশেষজ্ঞকে জিজ্ঞাসা করুন',
    'features.askExpertDesc': 'কৃষি বিশেষজ্ঞদের সাথে চ্যাট করুন',
    'features.community': 'সম্প্রদায়',
    'features.communityDesc': 'অন্যান্য কৃষকদের সাথে সংযোগ করুন',
    
    'cropAdvisory.title': 'ফসল পরামর্শ',
    'cropAdvisory.subtitle': 'ব্যক্তিগত ফসল সুপারিশ পান',
    'cropAdvisory.tellAboutFarm': 'আপনার খামার সম্পর্কে আমাদের বলুন',
    'cropAdvisory.cropName': 'ফসলের নাম',
    'cropAdvisory.location': 'অবস্থান',
    'cropAdvisory.soilType': 'মাটির ধরন',
    'cropAdvisory.farmSize': 'খামারের আকার',
    'cropAdvisory.getAdvisory': 'পরামর্শ পান',
    'cropAdvisory.results': 'ফসল পরামর্শ ফলাফল',
    'cropAdvisory.saveAdvisory': 'পরামর্শ সংরক্ষণ করুন',
    'cropAdvisory.shareWithExpert': 'বিশেষজ্ঞের সাথে শেয়ার করুন',
    
    'soilReport.title': 'মাটি রিপোর্ট',
    'soilReport.subtitle': 'মাটি পরীক্ষা আপলোড করুন বা আপনার মাটির ধরন বিশ্লেষণ করুন',
    'soilReport.uploadReport': 'মাটি পরীক্ষা রিপোর্ট আপলোড করুন',
    'soilReport.quickAnalysis': 'দ্রুত মাটি বিশ্লেষণ',
    'soilReport.startAnalysis': 'বিশ্লেষণ শুরু করুন',
    'soilReport.downloadReport': 'রিপোর্ট ডাউনলোড করুন',
    'soilReport.scheduleTest': 'মাটি পরীক্ষা বুক করুন',
    
    'marketPrices.title': 'বাজার দাম',
    'marketPrices.subtitle': 'সর্বশেষ মান্ডি দর',
    'marketPrices.topGainers': 'শীর্ষ বৃদ্ধিকারী',
    'marketPrices.topLosers': 'শীর্ষ হ্রাসকারী',
    'marketPrices.allCropPrices': 'সব ফসলের দাম',
    'marketPrices.priceAlerts': 'দাম সতর্কতা',
    'marketPrices.setAlert': 'সতর্কতা সেট করুন',
    
    'chatbot.title': 'কৃষি বিশেষজ্ঞ',
    'chatbot.subtitle': 'AI সহায়ক',
    'chatbot.placeholder': 'আপনার প্রশ্ন টাইপ করুন...',
    'chatbot.quickQuestions': 'দ্রুত প্রশ্ন',
    'chatbot.recording': 'রেকর্ডিং... যেকোনো ভাষায় কথা বলুন',
    
    'community.title': 'সম্প্রদায় ও সহায়তা',
    'community.welcomeMessage': 'কৃষক সম্প্রদায়ে স্বাগতম',
    'community.connectGrow': 'সংযোগ করুন, শিখুন এবং একসাথে বেড়ে উঠুন',
    'community.activeFarmers': 'সক্রিয় কৃষক',
    'community.govSchemes': 'সরকারি পরিকল্পনা',
    'community.farmingTips': 'কৃষি টিপস ও গাইড',
    'community.connectExperts': 'বিশেষজ্ঞদের সাথে সংযোগ করুন',
    'community.faq': 'প্রায়শই জিজ্ঞাসিত প্রশ্ন',
    'community.needHelp': 'আরো সাহায্য প্রয়োজন?',
    'community.callSupport': 'সহায়তা কল করুন',
    'community.whatsappChat': 'হোয়াটসঅ্যাপ চ্যাট',
  },

  // Telugu
  te: {
    'common.welcome': 'స్వాగతం',
    'common.back': 'వెనుకకు',
    'common.next': 'తదుపరి',
    'common.save': 'సేవ్ చేయండి',
    'common.cancel': 'రద్దు చేయండి',
    'common.submit': 'సమర్పించండి',
    'common.search': 'వెతకండి',
    'common.loading': 'లోడ్ అవుతోంది...',
    'common.error': 'దోషం',
    'common.success': 'విజయం',
    
    'app.title': 'స్మార్ట్ పంట సలహా',
    'app.tagline': 'మంచి నిర్ణయాలు, మంచి పంటలు',
    
    'language.choose': 'భాష ఎంచుకోండి',
    'language.english': 'English',
    'language.hindi': 'हिंदी (హిందీ)',
    'language.bengali': 'বাংলা (బెంగాలీ)',
    'language.telugu': 'తెలుగు',
    'language.marathi': 'मराठी (మరాఠీ)',
    'language.tamil': 'தமிழ் (తమిళ్)',
    'language.gujarati': 'ગુજરાતી (గుజరాతీ)',
    'language.kannada': 'ಕನ್ನಡ (కన్నడ)',
    'language.malayalam': 'മലയാളം (మలయాళం)',
    'language.punjabi': 'ਪੰਜਾਬੀ (పంజాబీ)',
    'language.odia': 'ଓଡ଼ିଆ (ఒడియా)',
    'language.assamese': 'অসমীয়া (అస్సామీ)',
    
    'splash.getStarted': 'ప్రారంభించండి',
    'splash.features': '🌱 పంట సలహా  🌾 మట్టి రిపోర్ట్  💰 మార్కెట్ ధరలు',
    
    'login.welcomeBack': 'తిరిగి స్వాగతం',
    'login.mobileNumber': 'మొబైల్ నంబర్',
    'login.enterOtp': 'OTP నమోదు చేయండి',
    'login.sendOtp': 'OTP పంపండి',
    'login.verifyAndContinue': 'ధృవీకరించండి మరియు కొనసాగండి',
    'login.changeNumber': 'నంబర్ మార్చండి',
    'login.secureLogin': 'OTP ధృవీకరణతో సురక్షిత లాగిన్',
    
    'dashboard.welcomeBack': 'తిరిగి స్వాగతం, రైతు!',
    'dashboard.profile': 'ప్రొఫైల్',
    'dashboard.todayWeather': 'నేటి వాతావరణం',
    'dashboard.goodForSpraying': 'పిచికారీకి మంచిది',
    'dashboard.startAdvisory': 'సలహా ప్రారంభించండి',
    'dashboard.cropsTracked': 'ట్రాక్ చేసిన పంటలు',
    'dashboard.seasonRevenue': 'సీజన్ ఆదాయం',
    'dashboard.farmSize': 'వ్యవసాయ భూమి పరిమాణం',
    
    'features.cropAdvisory': 'పంట సలహా',
    'features.cropAdvisoryDesc': 'AI శక్తితో పంట సిఫార్సులు పొందండి',
    'features.soilReport': 'మట్టి రిపోర్ట్',
    'features.soilReportDesc': 'మీ మట్టి ఆరోగ్యాన్ని విశ్లేషించండి',
    'features.irrigationTips': 'నీటిపారుదల చిట్కాలు',
    'features.irrigationTipsDesc': 'స్మార్ట్ నీరు ఇచ్చే మార్గదర్శకత్వం',
    'features.marketPrices': 'మార్కెట్ ధరలు',
    'features.marketPricesDesc': 'తాజా మండి రేట్లు',
    'features.askExpert': 'నిపుణుడిని అడగండి',
    'features.askExpertDesc': 'వ్యవసాయ నిపుణులతో చాట్ చేయండి',
    'features.community': 'కమ్యూనిటీ',
    'features.communityDesc': 'ఇతర రైతులతో కనెక్ట్ అవ్వండి',
    
    'cropAdvisory.title': 'పంట సలహా',
    'cropAdvisory.subtitle': 'వ్యక్తిగత పంట సిఫార్సులు పొందండి',
    'cropAdvisory.tellAboutFarm': 'మీ వ్యవసాయ భూమి గురించి మాకు చెప్పండి',
    'cropAdvisory.cropName': 'పంట పేరు',
    'cropAdvisory.location': 'స్థానం',
    'cropAdvisory.soilType': 'మట్టి రకం',
    'cropAdvisory.farmSize': 'వ్యవసాయ భూమి పరిమాణం',
    'cropAdvisory.getAdvisory': 'సలహా పొందండి',
    'cropAdvisory.results': 'పంట సలహా ఫలితాలు',
    'cropAdvisory.saveAdvisory': 'సలహా సేవ్ చేయండి',
    'cropAdvisory.shareWithExpert': 'నిపుణుడితో పంచుకోండి',
    
    'soilReport.title': 'మట్టి రిపోర్ట్',
    'soilReport.subtitle': 'మట్టి పరీక్ష అప్‌లోడ్ చేయండి లేదా మీ మట్టి రకాన్ని విశ్లేషించండి',
    'soilReport.uploadReport': 'మట్టి పరీక్ష రిపోర్ట్ అప్‌లోడ్ చేయండి',
    'soilReport.quickAnalysis': 'త్వరిత మట్టి విశ్లేషణ',
    'soilReport.startAnalysis': 'విశ్లేషణ ప్రారంభించండి',
    'soilReport.downloadReport': 'రిపోర్ట్ డౌన్‌లోడ్ చేయండి',
    'soilReport.scheduleTest': 'మట్టి పరీక్ష బుక్ చేయండి',
    
    'marketPrices.title': 'మార్కెట్ ధరలు',
    'marketPrices.subtitle': 'తాజా మండి ధరలు',
    'marketPrices.topGainers': 'అధిక లాభదాయకులు',
    'marketPrices.topLosers': 'అధిక నష్టదాయకులు',
    'marketPrices.allCropPrices': 'అన్ని పంట ధరలు',
    'marketPrices.priceAlerts': 'ధర హెచ్చరికలు',
    'marketPrices.setAlert': 'హెచ్చరిక సెట్ చేయండి',
    
    'chatbot.title': 'వ్యవసాయ నిపుణుడు',
    'chatbot.subtitle': 'AI సహాయకుడు',
    'chatbot.placeholder': 'మీ ప్రశ్నను టైప్ చేయండి...',
    'chatbot.quickQuestions': 'త్వరిత ప్రశ్నలు',
    'chatbot.recording': 'రికార్డింగ్... ఏదైనా భాషలో మాట్లాడండి',
    
    'community.title': 'కమ్యూనిటీ & సపోర్ట్',
    'community.welcomeMessage': 'రైతు కమ్యూనిటీకి స్వాగతం',
    'community.connectGrow': 'కనెక్ట్ అవ్వండి, నేర్చుకోండి మరియు కలిసి ఎదగండి',
    'community.activeFarmers': 'చురుకైన రైతులు',
    'community.govSchemes': 'ప్రభుత్వ పథకాలు',
    'community.farmingTips': 'వ్యవసాయ చిట్కాలు & గైడ్‌లు',
    'community.connectExperts': 'నిపుణులతో కనెక్ట్ అవ్వండి',
    'community.faq': 'తరచుగా అడిగే ప్రశ్నలు',
    'community.needHelp': 'మరింత సహాయం కావాలా?',
    'community.callSupport': 'సపోర్ట్‌కు కాల్ చేయండి',
    'community.whatsappChat': 'వాట్సాప్ చాట్',
  },

  // Marathi
  mr: {
    'common.welcome': 'स्वागत',
    'common.back': 'मागे',
    'common.next': 'पुढे',
    'common.save': 'जतन करा',
    'common.cancel': 'रद्द करा',
    'common.submit': 'सबमिट करा',
    'common.search': 'शोधा',
    'common.loading': 'लोड होत आहे...',
    'common.error': 'त्रुटी',
    'common.success': 'यश',
    
    'app.title': 'स्मार्ट पीक सल्ला',
    'app.tagline': 'चांगले निर्णय, चांगली पिके',
    
    'language.choose': 'भाषा निवडा',
    'language.english': 'English',
    'language.hindi': 'हिंदी',
    'language.bengali': 'বাংলা (बंगाली)',
    'language.telugu': 'తెలుగు (तेलुगू)',
    'language.marathi': 'मराठी',
    'language.tamil': 'தமிழ் (तमिळ)',
    'language.gujarati': 'ગુજરાતી (गुजराती)',
    'language.kannada': 'ಕನ್ನಡ (कन्नड)',
    'language.malayalam': 'മലയാളം (मल्याळम)',
    'language.punjabi': 'ਪੰਜਾਬੀ (पंजाबी)',
    'language.odia': 'ଓଡ଼ିଆ (उडिया)',
    'language.assamese': 'অসমীয়া (आसामी)',
    
    'features.cropAdvisory': 'पीक सल्ला',
    'features.soilReport': 'माती अहवाल',
    'features.irrigationTips': 'सिंचन टिप्स',
    'features.marketPrices': 'बाजार भाव',
    'features.askExpert': 'तज्ञांना विचारा',
    'features.community': 'समुदाय',
    
    'dashboard.welcomeBack': 'परत स्वागत, शेतकरी!',
    'dashboard.profile': 'प्रोफाइल',
    'dashboard.todayWeather': 'आजचे हवामान',
    'dashboard.startAdvisory': 'सल्ला सुरू करा',
    
    'login.welcomeBack': 'परत स्वागत',
    'login.mobileNumber': 'मोबाईल नंबर',
    'login.sendOtp': 'OTP पाठवा',
    
    'splash.getStarted': 'सुरुवात करा',
    
    'cropAdvisory.title': 'पीक सल्ला',
    'cropAdvisory.cropName': 'पिकाचे नाव',
    'cropAdvisory.location': 'स्थान',
    'cropAdvisory.soilType': 'मातीचा प्रकार',
    'cropAdvisory.farmSize': 'शेताचा आकार',
    'cropAdvisory.getAdvisory': 'सल्ला मिळवा',
    
    'soilReport.title': 'माती अहवाल',
    'soilReport.uploadReport': 'माती चाचणी अहवाल अपलोड करा',
    'soilReport.quickAnalysis': 'त्वरित माती विश्लेषण',
    
    'marketPrices.title': 'बाजार भाव',
    'marketPrices.topGainers': 'सर्वाधिक वाढ',
    'marketPrices.topLosers': 'सर्वाधिक घट',
    
    'chatbot.title': 'कृषी तज्ञ',
    'chatbot.subtitle': 'AI सहाय्यक',
    
    'community.title': 'समुदाय आणि सहाय्य',
    'community.govSchemes': 'सरकारी योजना',
  },

  // Tamil
  ta: {
    'common.welcome': 'வரவேற்கிறோம்',
    'common.back': 'பின்',
    'common.next': 'அடுத்தது',
    'common.save': 'சேமிக்க',
    'common.cancel': 'ரத்து செய்',
    'common.submit': 'சமர்ப்பிக்க',
    'common.search': 'தேடு',
    'common.loading': 'ஏற்றுகிறது...',
    'common.error': 'பிழை',
    'common.success': 'வெற்றி',
    
    'app.title': 'ஸ்மார்ட் பயிர் ஆலோசனை',
    'app.tagline': 'சிறந்த முடிவுகள், சிறந்த அறுவடை',
    
    'language.choose': 'மொழியைத் தேர்வு செய்க',
    'language.english': 'English',
    'language.hindi': 'हिंदी (ஹிந்தி)',
    'language.bengali': 'বাংলা (பெங்காலி)',
    'language.telugu': 'తెలుగు (தெலுங்கு)',
    'language.marathi': 'मराठी (மராத்தி)',
    'language.tamil': 'தமிழ்',
    'language.gujarati': 'ગુજરાતી (குஜராத்தி)',
    'language.kannada': 'ಕನ್ನಡ (கன்னடம்)',
    'language.malayalam': 'മലയാളം (மலையாளம்)',
    'language.punjabi': 'ਪੰਜਾਬੀ (பஞ்சாபி)',
    'language.odia': 'ଓଡ଼ିଆ (ஒடியா)',
    'language.assamese': 'অসমীয়া (அசாமீஸ்)',
    
    'features.cropAdvisory': 'பயிர் ஆலோசனை',
    'features.soilReport': 'மண் அறிக்கை',
    'features.irrigationTips': 'நீர்ப்பாசன குறிப்புகள்',
    'features.marketPrices': 'சந்தை விலைகள்',
    'features.askExpert': 'நிபுணரிடம் கேளுங்கள்',
    'features.community': 'சமூகம்',
    
    'dashboard.welcomeBack': 'மீண்டும் வரவேற்கிறோம், விவசாயி!',
    'dashboard.profile': 'சுயவிவரம்',
    'dashboard.todayWeather': 'இன்றைய வானிலை',
    'dashboard.startAdvisory': 'ஆலோசனையைத் தொடங்கு',
    
    'login.welcomeBack': 'மீண்டும் வரவேற்கிறோம்',
    'login.mobileNumber': 'மொபைல் எண்',
    'login.sendOtp': 'OTP அனுப்பு',
    
    'splash.getStarted': 'தொடங்கு',
    
    'cropAdvisory.title': 'பயிர் ஆலோசனை',
    'cropAdvisory.cropName': 'பயிரின் பெயர்',
    'cropAdvisory.location': 'இடம்',
    'cropAdvisory.soilType': 'மண் வகை',
    'cropAdvisory.farmSize': 'பண்ணையின் அளவு',
    'cropAdvisory.getAdvisory': 'ஆலோசனை பெறு',
    
    'soilReport.title': 'மண் அறிக்கை',
    'soilReport.uploadReport': 'மண் சோதனை அறிக்கையை பதிவேற்று',
    'soilReport.quickAnalysis': 'விரைவு மண் பகுப்பாய்வு',
    
    'marketPrices.title': 'சந்தை விலைகள்',
    'marketPrices.topGainers': 'முதல் லாபம்',
    'marketPrices.topLosers': 'முதல் இழப்பு',
    
    'chatbot.title': 'வேளாண் நிபுணர்',
    'chatbot.subtitle': 'AI உதவியாளர்',
    
    'community.title': 'சமூகம் & ஆதரவு',
    'community.govSchemes': 'அரசு திட்டங்கள்',
  },

  // Gujarati
  gu: {
    'common.welcome': 'સ્વાગત',
    'common.back': 'પાછા',
    'common.next': 'આગળ',
    'common.save': 'સેવ કરો',
    'common.cancel': 'રદ કરો',
    'common.submit': 'સબમિટ કરો',
    'common.search': 'શોધો',
    'common.loading': 'લોડ થઈ રહ્યું છે...',
    'common.error': 'ભૂલ',
    'common.success': 'સફળતા',
    
    'app.title': 'સ્માર્ટ પાક સલાહ',
    'app.tagline': 'સારા નિર્ણયો, સારી પાક',
    
    'language.choose': 'ભાષા પસંદ કરો',
    'language.english': 'English',
    'language.hindi': 'हिंदी (હિંદી)',
    'language.bengali': 'বাংলা (બંગાળી)',
    'language.telugu': 'తెలుగు (તેલુગુ)',
    'language.marathi': 'मराठी (મરાઠી)',
    'language.tamil': 'தமிழ் (તમિલ)',
    'language.gujarati': 'ગુજરાતી',
    'language.kannada': 'ಕನ್ನಡ (કન્નડ)',
    'language.malayalam': 'മലയാളം (મલયાલમ)',
    'language.punjabi': 'ਪੰਜਾਬੀ (પંજાબી)',
    'language.odia': 'ଓଡ଼ିଆ (ઓડિયા)',
    'language.assamese': 'অসমীয়া (આસામી)',
    
    'features.cropAdvisory': 'પાક સલાહ',
    'features.soilReport': 'માટી રિપોર્ટ',
    'features.irrigationTips': 'સિંચાઈ ટિપ્સ',
    'features.marketPrices': 'બજાર ભાવ',
    'features.askExpert': 'નિષ્ણાતને પૂછો',
    'features.community': 'સમુદાય',
    
    'dashboard.welcomeBack': 'પાછા સ્વાગત, ખેડૂત!',
    'dashboard.profile': 'પ્રોફાઇલ',
    'dashboard.todayWeather': 'આજનું હવામાન',
    'dashboard.startAdvisory': 'સલાહ શરૂ કરો',
    
    'login.welcomeBack': 'પાછા સ્વાગત',
    'login.mobileNumber': 'મોબાઇલ નંબર',
    'login.sendOtp': 'OTP મોકલો',
    
    'splash.getStarted': 'શરૂઆત કરો',
    
    'cropAdvisory.title': 'પાક સલાહ',
    'cropAdvisory.cropName': 'પાકનું નામ',
    'cropAdvisory.location': 'સ્થળ',
    'cropAdvisory.soilType': 'માટીનો પ્રકાર',
    'cropAdvisory.farmSize': 'ખેતરનું કદ',
    'cropAdvisory.getAdvisory': 'સલાહ મેળવો',
    
    'soilReport.title': 'માટી રિપોર્ટ',
    'soilReport.uploadReport': 'માટી પરીક્ષણ રિપોર્ટ અપલોડ કરો',
    'soilReport.quickAnalysis': 'ઝડપી માટી વિશ્લેષણ',
    
    'marketPrices.title': 'બજાર ભાવ',
    'marketPrices.topGainers': 'ટોચના વધારો',
    'marketPrices.topLosers': 'ટોચના નુકસાન',
    
    'chatbot.title': 'કૃષિ નિષ્ણાત',
    'chatbot.subtitle': 'AI સહાયક',
    
    'community.title': 'સમુદાય અને સહાય',
    'community.govSchemes': 'સરકારી યોજનાઓ',
  },

  // Kannada
  kn: {
    'common.welcome': 'ಸ್ವಾಗತ',
    'common.back': 'ಹಿಂದೆ',
    'common.next': 'ಮುಂದೆ',
    'common.save': 'ಉಳಿಸಿ',
    'common.cancel': 'ರದ್ದುಮಾಡಿ',
    'common.submit': 'ಸಲ್ಲಿಸಿ',
    'common.search': 'ಹುಡುಕಿ',
    'common.loading': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    'common.error': 'ದೋಷ',
    'common.success': 'ಯಶಸ್ಸು',
    
    'app.title': 'ಸ್ಮಾರ್ಟ್ ಬೆಳೆ ಸಲಹೆ',
    'app.tagline': 'ಉತ್ತಮ ನಿರ್ಧಾರಗಳು, ಉತ್ತಮ ಸುಗ್ಗಿ',
    
    'language.choose': 'ಭಾಷೆ ಆಯ್ಕೆಮಾಡಿ',
    'language.english': 'English',
    'language.hindi': 'हिंदी (ಹಿಂದಿ)',
    'language.bengali': 'বাংলা (ಬಂಗಾಳಿ)',
    'language.telugu': 'తెలుగు (ತೆಲುಗು)',
    'language.marathi': 'मराठी (ಮರಾಠಿ)',
    'language.tamil': 'தமிழ் (ತಮಿಳು)',
    'language.gujarati': 'ગુજરાતી (ಗುಜರಾತಿ)',
    'language.kannada': 'ಕನ್ನಡ',
    'language.malayalam': 'മലയാളം (ಮಲಯಾಳಂ)',
    'language.punjabi': 'ਪੰਜਾਬੀ (ಪಂಜಾಬಿ)',
    'language.odia': 'ଓଡ଼ିଆ (ಒಡಿಯಾ)',
    'language.assamese': 'অসমীয়া (ಅಸ್ಸಾಮೀಸ್)',
    
    'features.cropAdvisory': 'ಬೆಳೆ ಸಲಹೆ',
    'features.soilReport': 'ಮಣ್ಣಿನ ವರದಿ',
    'features.irrigationTips': 'ನೀರಾವರಿ ಸಲಹೆಗಳು',
    'features.marketPrices': 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
    'features.askExpert': 'ತಜ್ಞರನ್ನು ಕೇಳಿ',
    'features.community': 'ಸಮುದಾಯ',
    
    'dashboard.welcomeBack': 'ಪುನಃ ಸ್ವಾಗತ, ರೈತ!',
    'dashboard.profile': 'ಪ್ರೊಫೈಲ್',
    'dashboard.todayWeather': 'ಇಂದಿನ ಹವಾಮಾನ',
    'dashboard.startAdvisory': 'ಸಲಹೆ ಪ್ರಾರಂಭಿಸಿ',
    
    'login.welcomeBack': 'ಪುನಃ ಸ್ವಾಗತ',
    'login.mobileNumber': 'ಮೊಬೈಲ್ ಸಂಖ್ಯೆ',
    'login.sendOtp': 'OTP ಕಳುಹಿಸಿ',
    
    'splash.getStarted': 'ಪ್ರಾರಂಭಿಸಿ',
    
    'cropAdvisory.title': 'ಬೆಳೆ ಸಲಹೆ',
    'cropAdvisory.cropName': 'ಬೆಳೆಯ ಹೆಸರು',
    'cropAdvisory.location': 'ಸ್ಥಳ',
    'cropAdvisory.soilType': 'ಮಣ್ಣಿನ ಪ್ರಕಾರ',
    'cropAdvisory.farmSize': 'ಕೃಷಿ ಭೂಮಿಯ ಗಾತ್ರ',
    'cropAdvisory.getAdvisory': 'ಸಲಹೆ ಪಡೆಯಿರಿ',
    
    'soilReport.title': 'ಮಣ್ಣಿನ ವರದಿ',
    'soilReport.uploadReport': 'ಮಣ್ಣಿನ ಪರೀಕ್ಷೆಯ ವರದಿ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ',
    'soilReport.quickAnalysis': 'ಕ್ಷಿಪ್ರ ಮಣ್ಣಿನ ವಿಶ್ಲೇಷಣೆ',
    
    'marketPrices.title': 'ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು',
    'marketPrices.topGainers': 'ಉನ್ನತ ಲಾಭ',
    'marketPrices.topLosers': 'ಉನ್ನತ ನಷ್ಟ',
    
    'chatbot.title': 'ಕೃಷಿ ತಜ್ಞ',
    'chatbot.subtitle': 'AI ಸಹಾಯಕ',
    
    'community.title': 'ಸಮುದಾಯ ಮತ್ತು ಬೆಂಬಲ',
    'community.govSchemes': 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು',
  },

  // Malayalam
  ml: {
    'common.welcome': 'സ്വാഗതം',
    'common.back': 'പിന്നോട്ട്',
    'common.next': 'അടുത്തത്',
    'common.save': 'സേവ് ചെയ്യുക',
    'common.cancel': 'റദ്ദാക്കുക',
    'common.submit': 'സമർപ്പിക്കുക',
    'common.search': 'തിരയുക',
    'common.loading': 'ലോഡ് ചെയ്യുന്നു...',
    'common.error': 'പിശക്',
    'common.success': 'വിജയം',
    
    'app.title': 'സ്മാർട്ട് വിള ഉപദേശം',
    'app.tagline': 'മികച്ച തീരുമാനങ്ങൾ, മികച്ച വിളവുകൾ',
    
    'language.choose': 'ഭാഷ തിരഞ്ഞെടുക്കുക',
    'language.english': 'English',
    'language.hindi': 'हिंदी (ഹിന്ദി)',
    'language.bengali': 'বাংলা (ബംഗാളി)',
    'language.telugu': 'తెలుగు (തെലുങ്ക്)',
    'language.marathi': 'मराठी (മറാത്തി)',
    'language.tamil': 'தமிழ் (തമിഴ്)',
    'language.gujarati': 'ગુજરાતી (ഗുജറാത്തി)',
    'language.kannada': 'ಕನ್ನಡ (കന്നഡ)',
    'language.malayalam': 'മലയാളം',
    'language.punjabi': 'ਪੰਜਾਬੀ (പഞ്ചാബി)',
    'language.odia': 'ଓଡ଼ିଆ (ഒഡിയ)',
    'language.assamese': 'অসমীয়া (അസ്സാമീസ്)',
    
    'features.cropAdvisory': 'വിള ഉപദേശം',
    'features.soilReport': 'മണ്ണ് റിപ്പോർട്ട്',
    'features.irrigationTips': 'ജലസേചന നുറുങ്ങുകൾ',
    'features.marketPrices': 'വിപണി വിലകൾ',
    'features.askExpert': 'വിദഗ്ധനോട് ചോദിക്കുക',
    'features.community': 'കമ്മ്യൂണിറ്റി',
    
    'dashboard.welcomeBack': 'തിരികെ സ്വാഗതം, കർഷകൻ!',
    'dashboard.profile': 'പ്രൊഫൈൽ',
    'dashboard.todayWeather': 'ഇന്നത്തെ കാലാവസ്ഥ',
    'dashboard.startAdvisory': 'ഉപദേശം ആരംഭിക്കുക',
    
    'login.welcomeBack': 'തിരികെ സ്വാഗതം',
    'login.mobileNumber': 'മൊബൈൽ നമ്പർ',
    'login.sendOtp': 'OTP അയയ്ക്കുക',
    
    'splash.getStarted': 'ആരംഭിക്കുക',
    
    'cropAdvisory.title': 'വിള ഉപദേശം',
    'cropAdvisory.cropName': 'വിളയുടെ പേര്',
    'cropAdvisory.location': 'സ്ഥലം',
    'cropAdvisory.soilType': 'മണ്ണിന്റെ തരം',
    'cropAdvisory.farmSize': 'കൃഷിയിടത്തിന്റെ വലുപ്പം',
    'cropAdvisory.getAdvisory': 'ഉപദേശം നേടുക',
    
    'soilReport.title': 'മണ്ണ് റിപ്പോർട്ട്',
    'soilReport.uploadReport': 'മണ്ണ് പരിശോധനാ റിപ്പോർട്ട് അപ്‌ലോഡ് ചെയ്യുക',
    'soilReport.quickAnalysis': 'പെട്ടെന്നുള്ള മണ്ണ് വിശകലനം',
    
    'marketPrices.title': 'വിപണി വിലകൾ',
    'marketPrices.topGainers': 'മുൻനിര ലാഭം',
    'marketPrices.topLosers': 'മുൻനിര നഷ്ടം',
    
    'chatbot.title': 'കാർഷിക വിദഗ്ധൻ',
    'chatbot.subtitle': 'AI സഹായി',
    
    'community.title': 'കമ്മ്യൂണിറ്റി & സപ്പോർട്ട്',
    'community.govSchemes': 'സർക്കാർ പദ്ധതികൾ',
  },

  // Punjabi
  pa: {
    'common.welcome': 'ਸੁਆਗਤ',
    'common.back': 'ਵਾਪਸ',
    'common.next': 'ਅੱਗੇ',
    'common.save': 'ਸੇਵ ਕਰੋ',
    'common.cancel': 'ਰੱਦ ਕਰੋ',
    'common.submit': 'ਜਮਾ ਕਰੋ',
    'common.search': 'ਖੋਜੋ',
    'common.loading': 'ਲੋਡ ਹੋ ਰਿਹਾ ਹੈ...',
    'common.error': 'ਗਲਤੀ',
    'common.success': 'ਸਫਲਤਾ',
    
    'app.title': 'ਸਮਾਰਟ ਫਸਲ ਸਲਾਹ',
    'app.tagline': 'ਬਿਹਤਰ ਫੈਸਲੇ, ਬਿਹਤਰ ਫਸਲਾਂ',
    
    'language.choose': 'ਭਾਸ਼ਾ ਚੁਣੋ',
    'language.english': 'English',
    'language.hindi': 'हिंदी (ਹਿੰਦੀ)',
    'language.bengali': 'বাংলা (ਬੰਗਾਲੀ)',
    'language.telugu': 'తెలుగు (ਤੇਲੁਗੂ)',
    'language.marathi': 'मराठी (ਮਰਾਠੀ)',
    'language.tamil': 'தமிழ் (ਤਮਿਲ)',
    'language.gujarati': 'ગુજરાતી (ਗੁਜਰਾਤੀ)',
    'language.kannada': 'ಕನ್ನಡ (ਕੰਨੜ)',
    'language.malayalam': 'മലയാളം (ਮਲਿਆਲਮ)',
    'language.punjabi': 'ਪੰਜਾਬੀ',
    'language.odia': 'ଓଡ଼ିଆ (ਉੜੀਆ)',
    'language.assamese': 'অসমীয়া (ਅਸਾਮੀ)',
    
    'features.cropAdvisory': 'ਫਸਲ ਸਲਾਹ',
    'features.soilReport': 'ਮਿਟੀ ਰਿਪੋਰਟ',
    'features.irrigationTips': 'ਸਿੰਚਾਈ ਟਿਪਸ',
    'features.marketPrices': 'ਮਾਰਕੀਟ ਭਾਅ',
    'features.askExpert': 'ਮਾਹਿਰ ਨੂੰ ਪੁੱਛੋ',
    'features.community': 'ਕਮਿਊਨਿਟੀ',
    
    'dashboard.welcomeBack': 'ਵਾਪਸ ਸੁਆਗਤ, ਕਿਸਾਨ!',
    'dashboard.profile': 'ਪ੍ਰੋਫਾਈਲ',
    'dashboard.todayWeather': 'ਅੱਜ ਦਾ ਮੌਸਮ',
    'dashboard.startAdvisory': 'ਸਲਾਹ ਸ਼ੁਰੂ ਕਰੋ',
    
    'login.welcomeBack': 'ਵਾਪਸ ਸੁਆਗਤ',
    'login.mobileNumber': 'ਮੋਬਾਈਲ ਨੰਬਰ',
    'login.sendOtp': 'OTP ਭੇਜੋ',
    
    'splash.getStarted': 'ਸ਼ੁਰੂ ਕਰੋ',
    
    'cropAdvisory.title': 'ਫਸਲ ਸਲਾਹ',
    'cropAdvisory.cropName': 'ਫਸਲ ਦਾ ਨਾਂ',
    'cropAdvisory.location': 'ਸਥਾਨ',
    'cropAdvisory.soilType': 'ਮਿਟੀ ਦੀ ਕਿਸਮ',
    'cropAdvisory.farmSize': 'ਖੇਤ ਦਾ ਆਕਾਰ',
    'cropAdvisory.getAdvisory': 'ਸਲਾਹ ਲਓ',
    
    'soilReport.title': 'ਮਿਟੀ ਰਿਪੋਰਟ',
    'soilReport.uploadReport': 'ਮਿਟੀ ਟੈਸਟ ਰਿਪੋਰਟ ਅੱਪਲੋਡ ਕਰੋ',
    'soilReport.quickAnalysis': 'ਤੇਜ਼ ਮਿਟੀ ਵਿਸ਼ਲੇਸ਼ਣ',
    
    'marketPrices.title': 'ਮਾਰਕੀਟ ਭਾਅ',
    'marketPrices.topGainers': 'ਸਿਖਰ ਲਾਭ',
    'marketPrices.topLosers': 'ਸਿਖਰ ਨੁਕਸਾਨ',
    
    'chatbot.title': 'ਖੇਤੀ ਮਾਹਿਰ',
    'chatbot.subtitle': 'AI ਸਹਾਇਕ',
    
    'community.title': 'ਕਮਿਊਨਿਟੀ ਅਤੇ ਸਹਾਇਤਾ',
    'community.govSchemes': 'ਸਰਕਾਰੀ ਸਕੀਮਾਂ',
  },

  // Odia
  or: {
    'common.welcome': 'ସ୍ୱାଗତ',
    'common.back': 'ପଛକୁ',
    'common.next': 'ପରବର୍ତ୍ତୀ',
    'common.save': 'ସେଭ କରନ୍ତୁ',
    'common.cancel': 'ବାତିଲ କରନ୍ତୁ',
    'common.submit': 'ଦାଖଲ କରନ୍ତୁ',
    'common.search': 'ଖୋଜନ୍ତୁ',
    'common.loading': 'ଲୋଡ ହେଉଛି...',
    'common.error': 'ତ୍ରୁଟି',
    'common.success': 'ସଫଳତା',
    
    'app.title': 'ସ୍ମାର୍ଟ ଫସଲ ପରାମର୍ଶ',
    'app.tagline': 'ଉତ୍ତମ ନିଷ୍ପତ୍ତି, ଉତ୍ତମ ଅମଳ',
    
    'language.choose': 'ଭାଷା ବାଛନ୍ତୁ',
    'language.english': 'English',
    'language.hindi': 'हिंदी (ହିନ୍ଦୀ)',
    'language.bengali': 'বাংলা (ବଙ୍ଗଳା)',
    'language.telugu': 'తెలుగు (ତେଲୁଗୁ)',
    'language.marathi': 'मराठी (ମରାଠୀ)',
    'language.tamil': 'தமிழ் (ତାମିଲ)',
    'language.gujarati': 'ગુજરાતી (ଗୁଜରାଟୀ)',
    'language.kannada': 'ಕನ್ನಡ (କନ୍ନଡ)',
    'language.malayalam': 'മലയാളം (ମାଲାୟାଲମ)',
    'language.punjabi': 'ਪੰਜਾਬੀ (ପଞ୍ଜାବୀ)',
    'language.odia': 'ଓଡ଼ିଆ',
    'language.assamese': 'অসমীয়া (ଅସମୀୟା)',
    
    'features.cropAdvisory': 'ଫସଲ ପରାମର୍ଶ',
    'features.soilReport': 'ମାଟି ରିପୋର୍ଟ',
    'features.irrigationTips': 'ଜଳସେଚନ ଟିପ୍ସ',
    'features.marketPrices': 'ବଜାର ଦର',
    'features.askExpert': 'ବିଶେଷଜ୍ଞଙ୍କୁ ପଚାରନ୍ତୁ',
    'features.community': 'ସମ୍ପ୍ରଦାୟ',
    
    'dashboard.welcomeBack': 'ପୁଣି ସ୍ୱାଗତ, କୃଷକ!',
    'dashboard.profile': 'ପ୍ରୋଫାଇଲ',
    'dashboard.todayWeather': 'ଆଜିର ପାଗ',
    'dashboard.startAdvisory': 'ପରାମର୍ଶ ଆରମ୍ଭ କରନ୍ତୁ',
    
    'login.welcomeBack': 'ପୁଣି ସ୍ୱାଗତ',
    'login.mobileNumber': 'ମୋବାଇଲ ନମ୍ବର',
    'login.sendOtp': 'OTP ପଠାନ୍ତୁ',
    
    'splash.getStarted': 'ଆରମ୍ଭ କରନ୍ତୁ',
    
    'cropAdvisory.title': 'ଫସଲ ପରାମର୍ଶ',
    'cropAdvisory.cropName': 'ଫସଲର ନାମ',
    'cropAdvisory.location': 'ସ୍ଥାନ',
    'cropAdvisory.soilType': 'ମାଟିର ପ୍ରକାର',
    'cropAdvisory.farmSize': 'ଜମିର ଆକାର',
    'cropAdvisory.getAdvisory': 'ପରାମର୍ଶ ନିଅନ୍ତୁ',
    
    'soilReport.title': 'ମାଟି ରିପୋର୍ଟ',
    'soilReport.uploadReport': 'ମାଟି ପରୀକ୍ଷା ରିପୋର୍ଟ ଅପଲୋଡ କରନ୍ତୁ',
    'soilReport.quickAnalysis': 'ଦ୍ରୁତ ମାଟି ବିଶ୍ଳେଷଣ',
    
    'marketPrices.title': 'ବଜାର ଦର',
    'marketPrices.topGainers': 'ଶୀର୍ଷ ଲାଭ',
    'marketPrices.topLosers': 'ଶୀର୍ଷ କ୍ଷତି',
    
    'chatbot.title': 'କୃଷି ବିଶେଷଜ୍ଞ',
    'chatbot.subtitle': 'AI ସହାୟକ',
    
    'community.title': 'ସମ୍ପ୍ରଦାୟ ଓ ସହାୟତା',
    'community.govSchemes': 'ସରକାରୀ ଯୋଜନା',
  },

  // Assamese
  as: {
    'common.welcome': 'স্বাগতম',
    'common.back': 'পিছলৈ',
    'common.next': 'পৰৱৰ্তী',
    'common.save': 'ছেভ কৰক',
    'common.cancel': 'বাতিল কৰক',
    'common.submit': 'দাখিল কৰক',
    'common.search': 'বিচাৰক',
    'common.loading': 'লোড হৈ আছে...',
    'common.error': 'ভুল',
    'common.success': 'সফলতা',
    
    'app.title': 'স্মাৰ্ট শস্য পৰামৰ্শ',
    'app.tagline': 'উত্তম সিদ্ধান্ত, উত্তম শস্য',
    
    'language.choose': 'ভাষা বাছনি কৰক',
    'language.english': 'English',
    'language.hindi': 'हिंदी (হিন্দী)',
    'language.bengali': 'বাংলা (বাঙালী)',
    'language.telugu': 'తెలుగు (তেলেগু)',
    'language.marathi': 'मराठी (মাৰাঠী)',
    'language.tamil': 'தமிழ் (তামিল)',
    'language.gujarati': 'ગુજરાતી (গুজৰাটী)',
    'language.kannada': 'ಕನ್ನಡ (কান্নাড়া)',
    'language.malayalam': 'മലയാളം (মালায়ালম)',
    'language.punjabi': 'ਪੰਜਾਬੀ (পাঞ্জাবী)',
    'language.odia': 'ଓଡ଼ିଆ (উড়িয়া)',
    'language.assamese': 'অসমীয়া',
    
    'features.cropAdvisory': 'শস্য পৰামৰ্শ',
    'features.soilReport': 'মাটিৰ ৰিপৰ্ট',
    'features.irrigationTips': 'জলসিঞ্চনৰ পৰামৰ্শ',
    'features.marketPrices': 'বজাৰ দৰ',
    'features.askExpert': 'বিশেষজ্ঞক সোধক',
    'features.community': 'সমাজ',
    
    'dashboard.welcomeBack': 'পুনৰ স্বাগতম, কৃষক!',
    'dashboard.profile': 'প্ৰফাইল',
    'dashboard.todayWeather': 'আজিৰ বতৰ',
    'dashboard.startAdvisory': 'পৰামৰ্শ আৰম্ভ কৰক',
    
    'login.welcomeBack': 'পুনৰ স্বাগতম',
    'login.mobileNumber': 'মোবাইল নম্বৰ',
    'login.sendOtp': 'OTP পঠিয়াওক',
    
    'splash.getStarted': 'আৰম্ভ কৰক',
    
    'cropAdvisory.title': 'শস্য পৰামৰ্শ',
    'cropAdvisory.cropName': 'শস্যৰ নাম',
    'cropAdvisory.location': 'স্থান',
    'cropAdvisory.soilType': 'মাটিৰ প্ৰকাৰ',
    'cropAdvisory.farmSize': 'খেতিৰ আকাৰ',
    'cropAdvisory.getAdvisory': 'পৰামৰ্শ লওক',
    
    'soilReport.title': 'মাটিৰ ৰিপৰ্ট',
    'soilReport.uploadReport': 'মাটি পৰীক্ষাৰ ৰিপৰ্ট আপলোড কৰক',
    'soilReport.quickAnalysis': 'দ্ৰুত মাটি বিশ্লেষণ',
    
    'marketPrices.title': 'বজাৰ দৰ',
    'marketPrices.topGainers': 'শীৰ্ষ লাভ',
    'marketPrices.topLosers': 'শীৰ্ষ ক্ষতি',
    
    'chatbot.title': 'কৃষি বিশেষজ্ঞ',
    'chatbot.subtitle': 'AI সহায়ক',
    
    'community.title': 'সমাজ আৰু সহায়',
    'community.govSchemes': 'চৰকাৰী আঁচনি',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    // Store in localStorage for persistence
    localStorage.setItem('preferred-language', language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage]?.[key] || translations['en'][key] || key;
  };

  // Load saved language on mount
  useState(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  });

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}