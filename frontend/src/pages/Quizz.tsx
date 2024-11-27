import React from "react";
import Sidebar from "../components/Sidebar";
import "./Quizz.css";

const Quizz: React.FC = () => {
  return (
    <div className="quizz-containeryy">
      <Sidebar />
      <main className="quizz-contentyy">
        {/* Título chamativo */}
        <h1 className="quizz-titleyy">🎉 Vamos Aprender e Praticar! 🎉</h1>

        {/* Barra de progresso personalizada */}
        <div className="progress-baryy">
          <span className="progress-stepyy activeyy"></span>
          <span className="progress-stepyy"></span>
          <span className="progress-stepyy"></span>
          <span className="progress-stepyy"></span>
        </div>

        {/* Card da questão */}
        <div className="cardyy">
          <h1>Questão 2</h1>
          <p className="question-textyy">
            A água é um recurso essencial para a vida e, infelizmente, muitas
            vezes é desperdiçada ou contaminada. Cuidar da água é uma
            responsabilidade de todos, e pequenas ações no dia a dia podem fazer
            uma grande diferença. Fechar a torneira enquanto escova os dentes,
            consertar vazamentos e evitar jogar lixo nos rios são exemplos de
            atitudes simples e eficazes para preservar este recurso tão
            importante.
          </p>
          <h3>Qual destas ações ajuda a cuidar da água?</h3>
          <form className="optionsyy">
            <label>
              <input type="radio" name="answer" />
              Deixar a torneira aberta enquanto escova os dentes.
            </label>
            <label>
              <input type="radio" name="answer" />
              Jogar óleo de cozinha no ralo da pia.
            </label>
            <label>
              <input type="radio" name="answer" />
              Consertar vazamentos de torneiras e canos.
            </label>
            <label>
              <input type="radio" name="answer" />
              Usar mangueira para varrer a calçada.
            </label>
          </form>
          <button className="continue-buttonyy">Continuar</button>
        </div>
      </main>
    </div>
  );
};

export default Quizz;
