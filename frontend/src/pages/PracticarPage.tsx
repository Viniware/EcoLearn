import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./PraticarPage.css";
import artigo from "../assets/material-symbols_article-outline.png";
import waterPoluida from "../assets/Praticar.png";
import waterfall from "../assets/PraticarHouse.png";
import Correto from "../assets/Correto.png";
import star from "../assets/star.png";

const PracticarPage: React.FC = () => {
  return (
    <div className="practicar-containerzz">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="main-contentzz">
        {/* Card da Seção */}
        <div className="section-cardzz">
          <div className="section-titlezz">
            <h2>Seção 1, Unidade 8</h2>
            <p>Aprenda sobre os cuidados com o Ar</p>
          </div>
          {/* Botão com Link para a página Artigo */}
          <Link to="/artigo" className="article-buttonzz">
            <img src={artigo} alt="Artigo" />
            Artigos
          </Link>
        </div>

        {/* Cards dos Níveis */}
        <div className="level-containerzz">
          {/* Nível 1 */}
          <div className="level-cardzz">
            <h3>Nível 1</h3>
            <div className="tasks-containerzz">
              <img
                src={waterPoluida}
                alt="Water Pollution"
                className="level-imagezz"
              />
              <div className="task-pathzz">
                <div className="taskzz completedzz">
                  <img src={Correto} alt="Correto" />
                </div>
                <div className="taskzz completedzz">
                  <img src={Correto} alt="Correto" />
                </div>
                {/* Terceira bolinha com link para a página de Quizz */}
                <div className="taskzz currentzz">
                  <img src={Correto} alt="Correto" />
                </div>
                <div className="taskzz pendingzz">
                  <img src={Correto} alt="Correto" />
                </div>
              </div>
            </div>
          </div>

          {/* Nível 2 */}
          <div className="level-cardzz">
            <h3>Nível 2</h3>
            <div className="tasks-containerzz">
              <img src={waterfall} alt="Waterfall" className="level-imagezz" />
              <div className="task-pathzz">
                <div className="taskzz pendingzz">
                  <img src={Correto} alt="Correto" />
                </div>
                <div className="taskzz pendingzz">
                  <img src={Correto} alt="Correto" />
                </div>
                <div className="taskzz pendingzz">
                  <img src={Correto} alt="Correto" />
                </div>
                <div className="taskzz pendingzz">
                  <img src={Correto} alt="Correto" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticarPage;
