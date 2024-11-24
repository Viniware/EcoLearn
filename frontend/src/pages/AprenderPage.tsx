// src/pages/AprenderPage.tsx
import React from 'react';
import './AprenderPage.css'; // Estilos específicos para a página Aprender

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
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 2,
      title: 'Seção 2',
      progress: 5,
      total: 12,
      buttonText: 'Continuar',
      buttonClass: 'btn-green',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 3,
      title: 'Seção 3',
      progress: 5,
      total: 12,
      buttonText: 'Continuar',
      buttonClass: 'btn-green',
      image: 'https://via.placeholder.com/80',
    },
    {
      id: 4,
      title: 'Seção 4',
      progress: 0,
      total: 0,
      buttonText: 'Pular',
      buttonClass: 'btn-gray',
      image: 'https://via.placeholder.com/80',
    },
  ];

  return (
    <div className="cards-container">
      {sections.map((section) => {
        const progressPercentage = (section.progress / section.total) * 100;
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
              <button className={`btn ${section.buttonClass}`} style={{ marginTop: '10px' }}>
                {section.buttonText}
              </button>
            </div>
            <img src={section.image} alt={`${section.title} imagem`} />
          </div>
        );
      })}
    </div>
  );
};

export default AprenderPage;
