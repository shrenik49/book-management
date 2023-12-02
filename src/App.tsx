import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AuthProvider } from './Context/authContext';
import LoginForm from './components/auth/Login';
import RegisterForm from './components/auth/Register';


const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <div>
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;