
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";
import { useToast } from "@/components/ui/use-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    confirmPassword: ""
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Form validation
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "The passwords you entered do not match.",
        variant: "destructive"
      });
      return;
    }
    
    if (!agreedToTerms) {
      toast({
        title: "Terms Required",
        description: "You must agree to the terms and conditions to proceed.",
        variant: "destructive"
      });
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(formData.name, formData.email, formData.password);
      navigate("/user");
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: error.message || "There was a problem with your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Password strength indicator
  const getPasswordStrength = (password) => {
    if (!password) return 0;
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength += 1;
    
    // Character variety checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;
    
    return strength;
  };
  
  const passwordStrength = getPasswordStrength(formData.password);
  
  const getStrengthText = (strength) => {
    if (strength === 0) return "Very Weak";
    if (strength === 1) return "Weak";
    if (strength === 2) return "Fair";
    if (strength === 3) return "Good";
    if (strength === 4) return "Strong";
    return "Very Strong";
  };
  
  const getStrengthColor = (strength) => {
    if (strength === 0) return "bg-red-500";
    if (strength === 1) return "bg-red-400";
    if (strength === 2) return "bg-yellow-500";
    if (strength === 3) return "bg-yellow-400";
    if (strength === 4) return "bg-green-400";
    return "bg-green-500";
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900 font-serif">Create an Account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Join BovBridge to access veterinary services for your livestock
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-forest-500 focus:border-forest-500"
                placeholder="Your Name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-forest-500 focus:border-forest-500"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-forest-500 focus:border-forest-500"
                placeholder="Your Phone Number"
              />
            </div>
            
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Location (Village/District)
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-forest-500 focus:border-forest-500"
                placeholder="Your Farm Location"
              />
            </div>
            
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-forest-500 focus:border-forest-500"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              
              {/* Password strength indicator */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex justify-between items-center">
                    <div className="flex-1">
                      <div className="h-2 rounded-full bg-gray-200">
                        <div
                          className={`h-2 rounded-full ${getStrengthColor(
                            passwordStrength
                          )}`}
                          style={{ width: `${(passwordStrength / 5) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-2 text-xs text-gray-600">
                      {getStrengthText(passwordStrength)}
                    </span>
                  </div>
                  <ul className="mt-2 text-xs text-gray-600 space-y-1">
                    <li className="flex items-center">
                      <CheckCircle
                        className={`h-3 w-3 mr-1 ${
                          formData.password.length >= 8
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      />
                      At least 8 characters
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`h-3 w-3 mr-1 ${
                          /[A-Z]/.test(formData.password)
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      />
                      At least one uppercase letter
                    </li>
                    <li className="flex items-center">
                      <CheckCircle
                        className={`h-3 w-3 mr-1 ${
                          /[0-9]/.test(formData.password)
                            ? "text-green-500"
                            : "text-gray-300"
                        }`}
                      />
                      At least one number
                    </li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`block w-full px-3 py-2 border ${
                    formData.password &&
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword
                      ? "border-red-300 focus:ring-red-500 focus:border-red-500"
                      : "border-gray-300 focus:ring-forest-500 focus:border-forest-500"
                  } rounded-md shadow-sm focus:outline-none`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={toggleConfirmPasswordVisibility}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {formData.password &&
                formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-sm text-red-600">Passwords do not match</p>
                )}
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
                className="h-4 w-4 text-forest-600 focus:ring-forest-500 border-gray-300 rounded"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms" className="text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-forest-600 hover:text-forest-500">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-forest-600 hover:text-forest-500">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          
          <div>
            <Button
              type="submit"
              className="w-full flex justify-center py-6 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-forest-600 hover:bg-forest-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-forest-500"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </div>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-forest-600 hover:text-forest-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
