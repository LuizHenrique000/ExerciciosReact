export default function App() {
  return (
    <div className="App">
      <Personagens />
    </div>
  );
}

import * as React from 'react';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Component />
    </div>
  );
}

const Component = () => {
  const personagens = [
    'Jill Valentine',
    'Jack Baker',
    'Claire Redfield',
    'Ada Wong',
    'Chris Redfield',
    'Leon S. Kennedy',
    'Albert Wesker',
    'Lucas Baker',
  ];

  const [itensPersonagensParaExibir, set] = useState(personagens);

  const apenasRedfield = personagens.filter((personagens) =>
    personagens.includes('Redfield')
  );

  const apenasBaker = personagens.filter((personagens) =>
    personagens.includes('Baker')
  );

  return (
    <div>
      <h3>Personagens de Resident Evil</h3>
      <ul>
        {itensPersonagensParaExibir.map((personagem) => (
          <li>{personagem}</li>
        ))}
      </ul>
      <button onClick={() => set(apenasRedfield)}>Redfield</button>
      <button onClick={() => set(apenasBaker)}>Baker</button>
      <button onClick={() => set(personagens)}>Todos</button>
    </div>
  );
};
