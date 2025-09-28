import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// import { useNavigate } from 'react-router-dom';

export function LoginScreen() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      setError(null);
      setLoading(true);
      
      // Bypass authentication and allow any credentials
      login('dummy_token');
      navigate('/dashboard');
    } catch (e: any) {
      setError(e.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto p-6 space-y-6 shadow-lg">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-xl font-bold text-primary">
            {isSignUp
              ? "Create Account / खाता बनाएं"
              : "Welcome Back / वापस स्वागत"}
          </h2>
          <p className="text-sm text-muted-foreground">
            {isSignUp ? "Sign up to get started" : "Sign in to continue"}
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Username / उपयोगकर्ता नाम</Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe"
                value={formData.username}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>
          </div>

          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="email">Email / ईमेल</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="pl-10"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="password">Password / पासवर्ड</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="pl-10"
              />
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full h-12 bg-primary hover:bg-primary/90"
            disabled={loading}
          >
            {loading
              ? "Please wait..."
              : isSignUp
              ? "Sign Up / साइन अप करें"
              : "Sign In / साइन इन करें"}
          </Button>

          <Button
            variant="ghost"
            onClick={() => setIsSignUp(!isSignUp)}
            className="w-full"
          >
            {isSignUp
              ? "Already have an account? Sign In"
              : "New user? Create Account"}
          </Button>
        </div>

        {error && (
          <div className="text-center pt-2">
            <p className="text-sm text-red-600">{error}</p>
          </div>
        )}

        {/* Info */}
        <div className="text-center pt-4">
          <p className="text-xs text-muted-foreground">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </Card>
    </div>
  );
}
