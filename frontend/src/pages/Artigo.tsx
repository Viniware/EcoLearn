import React from "react";
import Sidebar from "../components/Sidebar";
import "./Artigo.css";

const Artigo: React.FC = () => {
  return (
    <div className="artigo-container">
      <Sidebar />
      <div className="artigo-content">
        <div className="artigo-header">
          <h1>Preservação da Água</h1>
          <p>Cuidados para economizar e proteger a água.</p>
        </div>
        <div className="artigo-cardd">
          <p>
            A água é um dos recursos mais importantes do nosso planeta. Ela está
            presente em tudo ao nosso redor: nos rios, mares, lagos, na chuva e
            até no ar que respiramos. Sem água, não teríamos plantas, animais e
            até nós mesmos, seres humanos. Por isso, é muito importante aprender
            a cuidar bem da água e garantir que ela continue disponível para
            todos.
          </p>
          <h2>O que é a preservação da água?</h2>
          <p>
            Preservar a água significa tomar atitudes para proteger esse recurso
            e evitar que ele acabe ou seja poluído. Como a água é essencial para
            a vida, precisamos aprender a usá-la de forma responsável. Afinal, a
            água que usamos no dia a dia não é infinita. Embora 70% do planeta
            seja coberto por água, apenas 1% dela é potável, ou seja, própria
            para consumo, e está disponível para beber, cozinhar, tomar banho e
            até para produzir alimentos.
          </p>
          <h2>Por que precisamos economizar água?</h2>
          <p>
            Muitas pessoas não sabem, mas existem lugares no mundo onde a água é
            muito escassa, ou seja, não chove muito, e as pessoas têm
            dificuldades em encontrar água limpa. Mesmo em países como o Brasil,
            onde temos muitas fontes de água, o desperdício é um problema que
            pode afetar as gerações futuras. Por isso, precisamos economizar,
            evitando desperdícios que, no futuro, podem afetar todos nós.
          </p>
          <h2>Como podemos economizar e cuidar da água?</h2>
          <p>
            Existem várias atitudes simples que podemos adotar no nosso dia a
            dia para economizar água e ajudar na sua preservação. Aqui estão
            algumas dicas para você começar agora:
          </p>
          <ul>
            <li>
              <strong>Feche a torneira enquanto escova os dentes:</strong>{" "}
              Quando escovamos os dentes, muitas vezes deixamos a água correndo
              sem necessidade. Fechar a torneira durante esse tempo pode
              economizar muitos litros de água.
            </li>
            <li>
              <strong>Tome banhos rápidos:</strong> Em vez de ficar muito tempo
              no chuveiro, procure tomar banhos mais rápidos. Além de economizar
              água, você também economiza energia, pois o chuveiro elétrico usa
              eletricidade.
            </li>
            <li>
              <strong>Use balde para lavar o carro ou a calçada:</strong> Ao
              invés de usar a mangueira, que gasta muita água, use balde e pano
              para lavar o carro ou a calçada. Isso vai reduzir muito o
              desperdício.
            </li>
            <li>
              <strong>Conserte vazamentos:</strong> Fique atento a torneiras e
              encanamentos que possam estar vazando. Um pequeno vazamento pode
              desperdiçar muitos litros de água ao longo do tempo.
            </li>
            <li>
              <strong>Regue as plantas nas horas certas:</strong> Regar as
              plantas pela manhã ou no final da tarde, quando o sol não está
              forte, evita que a água evapore rápido. Assim, as plantas
              conseguem aproveitar melhor a água.
            </li>
            <li>
              <strong>Coleta de água da chuva:</strong> Você sabia que pode usar
              a água da chuva para lavar a calçada, o carro ou até regar as
              plantas? Colocar uma caixa d’água ou um reservatório para captar a
              água da chuva ajuda a economizar a água da torneira.
            </li>
          </ul>
          <h2>Proteger os rios e mares também é importante!</h2>
          <p>
            Além de economizar água dentro de casa, também precisamos cuidar dos
            rios, mares e lagos. Isso significa não jogar lixo nas ruas, que
            depois vai parar nos rios, e não poluir a água com produtos químicos
            ou óleos. A água suja pode afetar os animais que vivem nela e também
            pode causar doenças. Portanto, é importante sempre jogar o lixo no
            lugar certo e evitar contaminar a água.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Artigo;
