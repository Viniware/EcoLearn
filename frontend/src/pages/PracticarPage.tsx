// src/pages/PracticarPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';


const PracticarPage: React.FC = () => {
  return (
    <div>
      <h1>Vamos Praticar!</h1>
      {/* Link para navegar até a página do Quizz */}
      <Link to="/quizz">
        <button>Quizz</button>
      </Link>
    </div>
  );
};

export default PracticarPage;
