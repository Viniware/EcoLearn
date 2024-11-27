import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import PracticarPage from "./pages/PracticarPage";
import ArtigosPage from "./pages/ArtigosPage"; // Importando a nova página de artigos
import Loja from "./pages/Loja";
import Artigo from "./pages/Artigo";
import Sections from "./pages/Sections";

const App: React.FC = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Header />
          <div className="main-content" style={{ padding: "20px", flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/praticar" element={<PracticarPage />} />
              <Route path="/aprender" element={<HomePage />} />
              <Route path="/artigos" element={<ArtigosPage />} />{" "}
              <Route path="/Loja" element={<Loja />} />
              <Route path="/" element={<ArtigosPage />} />
              <Route path="/artigo" element={<Artigo />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/sections" element={<Sections />} />
              {/* Adicionando a rota Artigos */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
