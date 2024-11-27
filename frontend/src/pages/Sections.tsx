// src/pages/PracticarPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./PraticarPage.css";

const Sections: React.FC = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <h1>------------------------------------Vamos fazer quiz</h1>
      {/* Link para navegar até a página do Quizz */}
    </div>
  );
};

export default Sections;
