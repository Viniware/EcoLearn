import React from "react";
import Sidebar from "../components/Sidebar";
import "./Loja.css";
import RaioNormal from "../assets/RaioNormal.png";
import RaioMoeda from "../assets/RaioMoeda.png";
import Moeda80 from "../assets/Moeda80.png";
import Moeda150 from "../assets/Moeda120.png";
import medalha from "../assets/Group.png";
import raio from "../assets/hugeicons_energy.png";
import bau from "../assets/image 11.png";

const Loja: React.FC = () => {
  return (
    <div className="loja-container">
      <Sidebar />
      <div className="loja-content">
        <h1 className="loja-title">LOJA ECOLEARN</h1>
        <h2 className="loja-subtitle">Sequência</h2>
        <div className="main-content" style={{ display: "flex" }}>
          {/* Cards principais */}
          <div className="card-containerr" style={{ flex: 2 }}>
            {/* Card 1 */}
            <div className="cardd">
              <img
                src={RaioNormal}
                alt="Congelamento de sequência"
                className="card-image-largee"
              />
              <div className="card-infoo">
                <h3>Congelamento de sequência</h3>
                <p>
                  O congelamento de Sequência protege sua sequência se você
                  ficar 24 horas inativo.
                </p>
                <button className="card-buttonn">Comprar</button>
              </div>
              <img src={Moeda80} alt="Moeda 80" className="card-image-smalll" />
            </div>

            {/* Card 2 */}
            <div className="cardd">
              <img
                src={RaioMoeda}
                alt="Desafio de Sequência"
                className="card-image-largee"
              />
              <div className="card-infoo">
                <h3>Desafio de Sequência</h3>
                <p>
                  Desafie-se a manter uma sequência por 7 dias seguidos e vença.
                </p>
                <button className="card-buttonn">Comprar</button>
              </div>
              <img
                src={Moeda150}
                alt="Moeda 150"
                className="card-image-smalll"
              />
            </div>

            {/* Card 3 */}
            <div className="cardd">
              <img
                src={RaioNormal}
                alt="Reparo de Sequência"
                className="card-image-largee"
              />
              <div className="card-infoo">
                <h3>Reparo de Sequência</h3>
                <p>
                  Repare o último dia de inatividade e retorne o ritmo.
                  Disponível apenas uma vez por mês.
                </p>
                <button className="card-buttonn">Comprar</button>
              </div>
              <img src={Moeda80} alt="Moeda 80" className="card-image-smalll" />
            </div>
          </div>

          {/*O problema ta pra cima Missões diárias */}
          <div className="sidebar-right">
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
                    style={{ width: "75%" }}
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
                    style={{ width: "20%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loja;
