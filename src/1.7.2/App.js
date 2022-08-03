
export default function App() {
  return (
    <div className="App">
      <Personagens />
    </div>
  );
}

const Personagens = () => {
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
          .filter((personagens) => personagens.includes("Redfield"))
          .map((personagem) => (
            <li>{personagem}</li>
          ))}
      </ul>
    </div>
  );
};