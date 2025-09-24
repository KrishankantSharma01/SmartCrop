import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { SplashScreen } from "./components/SplashScreen";
import { LoginScreen } from "./components/LoginScreen";
import { Dashboard } from "./components/Dashboard";
import { CropAdvisory } from "./components/CropAdvisory";
import { SoilReport } from "./components/SoilReport";
import { MarketPrices } from "./components/MarketPrices";
import { Chatbot } from "./components/Chatbot";
import { Community } from "./components/Community";
import { CropDisease } from "./components/CropDisease";
import { LanguageProvider } from "./components/LanguageContext";

function AppContent() {
  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/signup" element={<LoginScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/crop-advisory" element={<CropAdvisory onBack={handleBack} />} />
      <Route path="/soil-report" element={<SoilReport onBack={handleBack} />} />
      <Route path="/market-prices" element={<MarketPrices onBack={handleBack} />} />
      <Route path="/chatbot" element={<Chatbot onBack={handleBack} />} />
      <Route path="/community" element={<Community onBack={handleBack} />} />
      <Route path="/crop-disease" element={<CropDisease onBack={handleBack} />} />
      
      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}