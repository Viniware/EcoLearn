import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Sidebar from "../components/Sidebar";
import planeta from "../assets/planet.png";
import img1 from "../assets/Breathing exercise-amico 1.png";
import img2 from "../assets/Bottle of water-bro 1.png";
import img3 from "../assets/Frame 9.png";
import img4 from "../assets/Environment-bro 1.png";
import medalha from "../assets/Group.png";
import raio from "../assets/hugeicons_energy.png";
import bau from "../assets/image 11.png";

const Card = ({
  titulo,
  detalhes,
  progresso,
  imagemSrc,
  botaoTexto,
  botaoClasse,
  fundoClasse,
  linkTo,
}: {
  titulo: string;
  detalhes: string;
  progresso: string;
  imagemSrc: string;
  botaoTexto: string;
  botaoClasse: string;
  fundoClasse: string;
  linkTo?: string; // Adiciona suporte para links
}) => {
  return (
    <div className={`card ${fundoClasse}`}>
      <div className="card-content">
        <div className="card-header">{titulo}</div>
        <div className="card-details">{detalhes}</div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: progresso }}></div>
        </div>
        {linkTo ? (
          <Link to={linkTo} className={`card-button ${botaoClasse}`}>
            {botaoTexto}
          </Link>
        ) : (
          <button className={`card-button ${botaoClasse}`}>{botaoTexto}</button>
        )}
      </div>
      <img className="card-image" src={imagemSrc} alt={titulo} />
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="homepage-container">
      <Sidebar />
      <div className="content-container">
        {/* Coluna da esquerda com os cartões */}
        <div className="cards-container">
          <Card
            titulo="Seção 1"
            detalhes="Ver detalhes"
            progresso="100%"
            imagemSrc={img1}
            botaoTexto="Revisar"
            botaoClasse="white-button"
            fundoClasse="green-background"
            linkTo="/Praticar"
          />
          <Card
            titulo="Seção 2"
            detalhes="Ver detalhes"
            progresso="50%"
            imagemSrc={img2}
            botaoTexto="Continuar"
            botaoClasse="green-button"
            fundoClasse="white-background"
            linkTo="/sections" // Adiciona o link para a página Sections
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

        {/* Coluna da direita com a imagem e missões diárias */}
        <div className="sidebar-rightt">
          <img className="planet-image" src={planeta} alt="Planeta" />
          <div className="daily-missions">
            <h3>Missões Diárias</h3>

            <div className="mission-item">
              <div className="mission-header">
                <img src={raio} alt="Raio" className="mission-icon" />
                <p>Faça 4 exercícios</p>
                <img src={bau} alt="Baú" className="mission-icon" />
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: "75%" }} // Exemplo de progresso: 3/4
                ></div>
              </div>
            </div>

            <div className="mission-item">
              <div className="mission-header">
                <img src={medalha} alt="Medalha" className="mission-icon" />
                <p>Acerte 5 exercícios seguidos</p>
                <img src={bau} alt="Baú" className="mission-icon" />
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  style={{ width: "20%" }} // Exemplo de progresso: 1/5
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
