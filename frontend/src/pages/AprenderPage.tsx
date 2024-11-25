import React from 'react';
import './AprenderPage.css'; 
import planeta from './assets/planeta.jpg';

const AprenderPage: React.FC = () => {
  // Dados das seções
  const sections = [
    {
      id: 1,
      title: 'Seção 1',
      progress: 8,
      total: 8,
      buttonText: 'Revisar',
      buttonClass: 'btn-green',
      image: 'https://via.placeholder.com/212x185',
    },
    {
      id: 2,
      title: 'Seção 2',
      progress: 5,
      total: 12,
      buttonText: 'Continuar',
      buttonClass: 'btn-green',
      image: 'https://via.placeholder.com/212x185',
    },
    {
      id: 3,
      title: 'Seção 3',
      progress: 5,
      total: 12,
      buttonText: 'Continuar',
      buttonClass: 'btn-green',
      image: 'https://via.placeholder.com/212x185',
    },
    {
      id: 4,
      title: 'Seção 4',
      progress: 0,
      total: 0,
      buttonText: 'Pular',
      buttonClass: 'btn-gray',
      image: 'https://via.placeholder.com/212x185',
    },
  ];

  // Dados das missões diárias
  const dailyMissions = [
    { id: 1, title: 'Faça 4 Exercícios', progress: 3, total: 4 },
    { id: 2, title: 'Acerte 5 exercícios seguidos', progress: 2, total: 5 },
  ];

  return (
    <div className="aprend-page">
      {/* Cards de Seções */}
      <div className="cards-container">
        {sections.map((section) => {
          const progressPercentage =
            section.total > 0 ? (section.progress / section.total) * 100 : 0;
          return (
            <div className="card" key={section.id}>
              <div className="card-content">
                <h3>{section.title}</h3>
                <p>Ver desafios</p>
                {/* Barra de progresso com texto ao lado */}
                <div className="progress-container">
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">
                    {section.progress}/{section.total}
                  </span>
                </div>
                <button
                  className={`btn ${section.buttonClass}`}
                  style={{ marginTop: '10px' }}
                >
                  {section.buttonText}
                </button>
              </div>
              <img
                src={section.image}
                alt={`${section.title} imagem`}
                className="card-image"
              />
            </div>
          );
        })}
      </div>

      {/* Sidebar: Imagem do Planeta e Missões Diárias */}
      <div className="sidebar-container">
        {/* Imagem do Planeta */}
        <div className="planet-container">
          <img
            src="./assets/planet.png;" 
            alt="Planeta"
            className="planet-image"
          />
        </div>

        {/* Missões Diárias */}
        <div className="missions-container">
          <h2>Missões diárias</h2>
          {dailyMissions.map((mission) => (
            <div key={mission.id} className="mission">
              <p>{mission.title}</p>
              <div className="mission-progress-bar">
                <div
                  className="mission-progress"
                  style={{
                    width: `${(mission.progress / mission.total) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AprenderPage;
