import React, { createContext, useContext, useState } from 'react';

interface User {
  email: string;
}

interface AuthContextProps {
  currentUser: User | null;
  login: (email: string, password: string) => void;
  register: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const login = (email: string, password: string) => {
    if (email === 'example@example.com' && password === 'password') {
      setCurrentUser({ email });
    }
  };

  const register = (email: string, password: string) => {
    setCurrentUser({ email });
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const value: AuthContextProps = {
    currentUser,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
