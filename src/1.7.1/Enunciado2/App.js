import "./styles.css";
import { filmes } from "./filmes";

function Filmes() {
  function filtrarFilmesPorAno(ano = 2000) {
    return filmes.filter((filme) => filme.lancamento > ano);
  }

  function mapearFilmes(filmes) {
    return filmes
      .map((filme) => filme.generos)
      .flat()
      .map((genero) => <p>{genero}</p>);
  }

  return (
    <div>
      <h1>FILMES DO BALACOBACO</h1>
      {mapearFilmes(filtrarFilmesPorAno())}
    </div>
  );
}

export default function App() {
  return <Filmes />;
}
