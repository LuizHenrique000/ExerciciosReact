import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Personagens familia="Redfield" />
      <Personagens familia="Wesker" />
    </div>
  );
}

export const Personagens = (props) => {
  const personagens = [
    "Jill Valentine",
    "Claire Redfield",
    "Ada Wong",
    "Chris Redfield",
    "Leon S. Kennedy",
    "Albert Wesker"
  ];

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {personagens
          .filter((personagem) => personagem.includes("Redfield"))
          .map((personagem) => {
            return <li>{personagem}</li>;
          })}
      </ul>
    </div>
  );
};

//<form>
//  <label>
//      Busca:
//     <input type="text" onClick={buscarFamilia()} />
//     </label>
//     </form>
