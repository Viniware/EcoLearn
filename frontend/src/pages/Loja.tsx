import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Loja: React.FC = () => {
  return (
    <div>
      <h1>Loja</h1>
      {/* Link para navegar até a página do Quizz */}
      <Link to="/quizz">
        <button>Quizz</button>
      </Link>
    </div>
  );
};

export default Loja;
