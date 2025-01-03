// src/pages/PracticarPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import "./PraticarPage.css";

const PracticarPage: React.FC = () => {
  return (
    <div>
      <Sidebar></Sidebar>
      <h1>
        ------------------------------------------------------Vamos Praticar!
      </h1>
      {/* Link para navegar até a página do Quizz */}
      <Link to="/quizz">
        <button>Quizz</button>
      </Link>
    </div>
  );
};

export default PracticarPage;
