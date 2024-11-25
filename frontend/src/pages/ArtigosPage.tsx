import React from "react";
import "./ArtigosPage.css";
import artigo1 from "../assets/artigo5.png";
import artigo2 from "../assets/artigo6.png";
import artigo3 from "../assets/artigo1.png";
import artigo4 from "../assets/artigo2.png";
import artigo5 from "../assets/artigo3.png";
import artigo6 from "../assets/artigo4.png";
import Sidebar from "../components/Sidebar";

// Componente para cada artigo
const ArtigoCard = ({
  imagem,
  titulo,
  descricao,
}: {
  imagem: string;
  titulo: string;
  descricao: string;
}) => {
  return (
    <div className="artigo-card">
      <img src={imagem} alt={titulo} className="artigo-card__imagem" />
      <h3 className="artigo-card__titulo">{titulo}</h3>
      <p className="artigo-card__descricao">{descricao}</p>
      <button className="artigo-card__botao">Conhecer</button>
    </div>
  );
};

const ArtigosPage = () => {
  // Dados dos artigos
  const artigos = [
    {
      imagem: artigo1,
      titulo: "Qualidade do Ar",
      descricao: "Como manter o ar limpo e saudável para todos.",
    },
    {
      imagem: artigo2,
      titulo: "Preservação da Água",
      descricao: "Cuidados para economizar e proteger a água.",
    },
    {
      imagem: artigo3,
      titulo: "Proteção do Solo",
      descricao: "Como manter o solo fértil e saudável.",
    },
    {
      imagem: artigo4,
      titulo: "Energias Renováveis",
      descricao: "Descubra fontes de energia que não poluem a natureza.",
    },
    {
      imagem: artigo5,
      titulo: "Descontaminação de Rios",
      descricao: "Cuidando dos rios para mantê-los limpos.",
    },
    {
      imagem: artigo6,
      titulo: "Conservação da Biodiversidade",
      descricao: "Protegendo animais e plantas da natureza.",
    },
  ];

  return (
    <div className="artigos-page">
      <Sidebar />
      <header className="artigos-page__header">
        <h1>Aprenda Sobre o Meio Ambiente</h1>
        <p>Pequenos passos para um futuro sustentável</p>
      </header>
      <div className="artigos-page__grid">
        {artigos.map((artigo, index) => (
          <ArtigoCard
            key={index}
            imagem={artigo.imagem}
            titulo={artigo.titulo}
            descricao={artigo.descricao}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtigosPage;
