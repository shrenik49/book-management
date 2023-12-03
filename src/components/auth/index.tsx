import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import RegisterForm from './Register';
import LoginForm from './Login';
import Dashboard from '../Dashboard';


const Authentication = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={currentUser ? <Dashboard /> : <LoginForm />}
      />
    <Route path="/register" element={currentUser ? <Dashboard /> : <RegisterForm />} />
    <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
};

export default Authentication;
