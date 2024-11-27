import React from "react";
import "./Header.css";
import logo from "../assets/Logo.png";
import raio from "../assets/hugeicons_energy.png";
import rosto from "../assets/Rectangle 1393.png";
import moeda from "../assets/Moeda120.png";

interface HeaderProps {
  progress?: number;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="header-right">
        <div className="energy-info">
          <img src={raio} alt="Raio" className="raio" />
          <span className="days-text">26 dias!</span>
        </div>

        <div className="user-info">
          <img src={rosto} alt="Rosto do usuário" className="user-face" />
          <div className="user-details">
            <span className="user-name">Rafael Henrique</span>
            <div className="coins">
              <img src={moeda} alt="Moeda" className="coin-icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
