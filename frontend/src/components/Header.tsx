import React from 'react';
import './Header.css';

interface HeaderProps {
  progress?: number;
}

const Header: React.FC<HeaderProps> = ({ progress = 50 }) => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">EcoLearn</h1>
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
