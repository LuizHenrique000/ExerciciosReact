

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

  function buscarOsRedfield() {
    return (
      <div>
        <ul>
          {personagens
            .filter((personagens) => personagens.includes("Redfield"))
            .map((personagem) => (
              <li>{personagem}</li>
            ))}
        </ul>
      </div>
    );
  }

  function buscarOsBaker() {
    return (
      <div>
        <ul>
          {personagens
            .filter((personagens) => personagens.includes("Baker"))
            .map((personagem) => (
              <li>{personagem}</li>
            ))}
        </ul>
      </div>
    );
  }

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <button type="click" onClick={buscarOsRedfield}>
        Redfield
      </button>
      <button type="click" onClick={buscarOsBaker}>
        Baker
      </button>
      <ul>
        {personagens.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
    </div>
  );
};
