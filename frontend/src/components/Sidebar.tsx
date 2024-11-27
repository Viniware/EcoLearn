import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importe o Link
import "./Sidebar.css";

const Sidebar: React.FC = () => {
  const [activeButton, setActiveButton] = useState<string>("Aprender");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/aprender">
              {" "}
              {/* Link para a página Aprender */}
              <button
                className={`nav-button ${
                  activeButton === "Aprender" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Aprender")}
              >
                <i className="fas fa-book"></i> Aprender
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/praticar">
              <button
                className={`nav-button ${
                  activeButton === "Praticar" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Praticar")}
              >
                <i className="fas fa-pencil-alt"></i> Praticar
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/artigos">
              {" "}
              {/* Link para a página Artigos */}
              <button
                className={`nav-button ${
                  activeButton === "Artigos" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Artigos")}
              >
                <i className="fas fa-file-alt"></i> Artigos
              </button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/loja">
              <button
                className={`nav-button ${
                  activeButton === "Loja" ? "active" : ""
                }`}
                onClick={() => handleButtonClick("Loja")}
              >
                <i className="fas fa-shopping-cart"></i> Loja
              </button>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <button className="settings-button">
          <i className="fas fa-cog"></i> Configurações
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
