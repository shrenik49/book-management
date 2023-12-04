import { Navigate, Route, Routes } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import RegisterForm from './Register';
import LoginForm from './Login';
import Dashboard from '../Dashboard';



const Authentication = () => {
  const { currentUser } = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={currentUser ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
      />
      <Route
        path="/login"
        element={!currentUser ? <LoginForm /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/register"
        element={!currentUser ? <RegisterForm /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/dashboard"
        element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default Authentication;
