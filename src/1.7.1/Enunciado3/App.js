import "./styles.css";
import { filmes } from "./filmes";

function FilmeCard() {
  function verificarOscar(filmes) {
    return filmes.map((filme) => {
      if (filme.oscar === true) {
        return (
          <div>
            <p>
              {filme.nome}
              <span role="img" aria-label="check">
                &#10004;
              </span>
            </p>
          </div>
        );
      }
      return (
        <div>
          <p>Filmes sem Oscar (Injustiça)</p>
          <p>
            {filme.nome}
            <span role="img" aria-label="notCheck">
              &#10006;
            </span>
          </p>
        </div>
      );
    });
  }
  return <div>{verificarOscar(filmes)}</div>;
}

export default function App() {
  return <FilmeCard />;
}

