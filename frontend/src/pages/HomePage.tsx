import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        {/* Adicione aqui outros conteúdos da página */}
      </main>
    </div>
  );
};

export default HomePage;