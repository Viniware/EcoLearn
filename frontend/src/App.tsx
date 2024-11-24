import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import Header from './components/Header';
import PracticarPage from './pages/PracticarPage';
import AprenderPage from './pages/AprenderPage'; // Nova página para "Aprender"

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: 'flex', height: '100vh' }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header />
          <div className="main-content" style={{ padding: '20px', flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<UserRegistrationPage />} />
              <Route path="/praticar" element={<PracticarPage />} />
              <Route path="/aprender" element={<AprenderPage />} /> {/* Rota para "Aprender" */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
