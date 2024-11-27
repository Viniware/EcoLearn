import React from "react";
import { Link } from "react-router-dom";
import "./Sections.css";
import Sidebar from "../components/Sidebar";
import artigo from "../assets/material-symbols_article-outline.png";
import waterPoluida from "../assets/Water pollution-amico 1.png";
import waterfall from "../assets/Nature-amico 1.png";
import Correto from "../assets/Correto.png";
import star from "../assets/star.png";

const Sections: React.FC = () => {
  return (
    <div className="sections-containerx">
      {/* Sidebar */}
      <Sidebar />

      {/* Conteúdo Principal */}
      <div className="main-contentx">
        {/* Card da Seção */}
        <div className="section-cardx">
          <div className="section-titlex">
            <h2>Seção 2, Unidade 1</h2>
            <p>Aprenda a como cuidar da água</p>
          </div>
          {/* Botão com Link para a página Artigo */}
          <Link to="/artigo" className="article-buttonx">
            <img src={artigo} alt="Artigo" />
            Artigos
          </Link>
        </div>

        {/* Cards dos Níveis */}
        <div className="level-containerx">
          {/* Nível 1 */}
          <div className="level-cardx">
            <h3>Nível 1</h3>
            <div className="tasks-containerx">
              <img
                src={waterPoluida}
                alt="Water Pollution"
                className="level-imagex"
              />
              <div className="task-pathx">
                <div className="taskx completedx">
                  <img src={Correto} alt="Correto" />
                </div>
                <div className="taskx completedx">
                  <img src={Correto} alt="Correto" />
                </div>
                {/* Terceira bolinha com link para a página de Quizz */}
                <Link to="/Quizz" className="taskx currentx">
                  <img src={star} alt="Atual" />
                </Link>
                <div className="taskx pendingx">
                  <img src={star} alt="Pendente" />
                </div>
              </div>
            </div>
          </div>

          {/* Nível 2 */}
          <div className="level-cardx">
            <h3>Nível 2</h3>
            <div className="tasks-containerx">
              <img src={waterfall} alt="Waterfall" className="level-imagex" />
              <div className="task-pathx">
                <div className="taskx pendingx">
                  <img src={star} alt="Pendente" />
                </div>
                <div className="taskx pendingx">
                  <img src={star} alt="Pendente" />
                </div>
                <div className="taskx pendingx">
                  <img src={star} alt="Pendente" />
                </div>
                <div className="taskx pendingx">
                  <img src={star} alt="Pendente" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sections;
