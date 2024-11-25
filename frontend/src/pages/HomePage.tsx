import React from "react";
import Sidebar from "../components/Sidebar";

const HomePage: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px" }}>
        <h1>----------------------------------Pagina inicial</h1>
      </main>
    </div>
  );
};

export default HomePage;
