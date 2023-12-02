import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/authContext';
import RegisterForm from './Register';
import LoginForm from './Login';


const Authentication = () => {
  const { currentUser } = useAuth();

  return (
    <Routes>
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/dashboard" /> : <LoginForm />}
      />
    <Route path="/register" element={<RegisterForm />} />
    </Routes>
  );
};

export default Authentication;
