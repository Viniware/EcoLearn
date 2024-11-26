import React from "react";
import "./HomePage.css";
import Sidebar from "../components/Sidebar";
import planeta from "../assets/planet.png";
import img1 from "../assets/Breathing exercise-amico 1.png";
import img2 from "../assets/Bottle of water-bro 1.png";
import img3 from "../assets/Frame 9.png";
import img4 from "../assets/Environment-bro 1.png";

const Card = ({
  titulo,
  detalhes,
  progresso,
  imagemSrc,
  botaoTexto,
  botaoClasse,
  fundoClasse,
}: {
  titulo: string;
  detalhes: string;
  progresso: string;
  imagemSrc: string;
  botaoTexto: string;
  botaoClasse: string;
  fundoClasse: string;
}) => {
  return (
    <div className={`card ${fundoClasse}`}>
      <div className="card-content">
        <div className="card-header">{titulo}</div>
        <div className="card-details">{detalhes}</div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: progresso }}></div>
        </div>
        <button className={`card-button ${botaoClasse}`}>{botaoTexto}</button>
      </div>
      <img className="card-image" src={imagemSrc} alt={titulo} />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Sidebar />
      <div className="cards-container">
        <Card
          titulo="Seção 1"
          detalhes="Ver detalhes"
          progresso="100%"
          imagemSrc={img1}
          botaoTexto="Revisar"
          botaoClasse="white-button"
          fundoClasse="green-background"
        />
        <Card
          titulo="Seção 2"
          detalhes="Ver detalhes"
          progresso="50%"
          imagemSrc={img2}
          botaoTexto="Continuar"
          botaoClasse="green-button"
          fundoClasse="white-background"
        />
        <Card
          titulo="Seção 3"
          detalhes="Ver detalhes"
          progresso="50%"
          imagemSrc={img3}
          botaoTexto="Continuar"
          botaoClasse="green-button"
          fundoClasse="white-background"
        />
        <Card
          titulo="Seção 4"
          detalhes="Faça as seções anteriores para desbloquear esta"
          progresso="0%"
          imagemSrc={img4}
          botaoTexto="Pular"
          botaoClasse="gray-button"
          fundoClasse="white-background"
        />
      </div>
    </div>
  );
};

export default HomePage;
