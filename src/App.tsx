import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { AuthProvider } from './Context/authContext';
import Authentication from './components/auth';


const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Authentication/>
      </AuthProvider>
    </Router>
  );
};

export default App;