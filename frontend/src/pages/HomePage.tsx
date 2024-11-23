import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        <Header progress={70} />
        <h1>Welcome to EcoLearn</h1>
      </main>
    </div>
  );
};

export default HomePage;
