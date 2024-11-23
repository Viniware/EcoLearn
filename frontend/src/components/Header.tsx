import React from 'react';
import './Header.css';
import logo from '../assets/Logo.png'
interface HeaderProps {
  progress?: number;
}

const Header: React.FC<HeaderProps> = ({ progress = 50 }) => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="header-right">
        <span className="score">26</span>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
