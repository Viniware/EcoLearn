import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './pages/HomePage'; 
import UserRegistrationPage from './pages/UserRegistrationPage'; 
import Header from './components/Header'; 
import Sidebar from './components/Sidebar'; 

const App: React.FC = () => {
  return (
    <Router> 
      <Header />
      <div className="main-content">
        <Sidebar /> 
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} /> 
            <Route path="/register" element={<UserRegistrationPage />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
