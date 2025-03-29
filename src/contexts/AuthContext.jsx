
import { createContext, useState, useContext, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const { toast } = useToast();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on page load
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
    setLoading(false);
  }, []);

  // Sign in function
  const login = (email, password, userType = 'farmer') => {
    // Mock login - in a real app, this would be an API call
    const mockUsers = {
      farmer: { id: '123', name: 'Farmer Singh', email, userType: 'farmer' },
      admin: { id: 'admin1', name: 'Admin User', email, userType: 'admin' }
    };
    
    if (email && password) { // Simple validation
      const user = mockUsers[userType];
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name}!`,
      });
      
      return user;
    }
    
    throw new Error('Invalid credentials');
  };

  // Sign up function
  const register = (name, email, password) => {
    // Mock register - in a real app, this would be an API call
    if (name && email && password) { // Simple validation
      const user = { id: Date.now().toString(), name, email, userType: 'farmer' };
      localStorage.setItem('user', JSON.stringify(user));
      setCurrentUser(user);
      
      toast({
        title: "Registration Successful",
        description: "Your account has been created successfully!",
      });
      
      return user;
    }
    
    throw new Error('Please fill all required fields');
  };

  // Sign out function
  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
    
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const value = {
    currentUser,
    userType: currentUser?.userType,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
