import React from 'react';

export default function App() {
  //https://www.auxiliadorapredial.com.br/alugar/residencial/rs+porto-alegre+cidade-baixa?quartos=2&sem-fiador-ou-garantias=true

  //https
  //protocolo

  //www.auxiliadorapredial.com.br
  //dominio

  //alugar/residencial/rs+porto-alegre+cidade-baixa
  //São as rotas

  //quartos=2&sem-fiador-ou-garantias=true
  //É a query

  function criarUrl(protocolo, dominio, path, query) {
    return `${protocolo}://${dominio}/${path}?=${query}`;
  }

  return (
    <div>{criarUrl('https', 'www.google.com', 'search', 'Javascript')}</div>
  );
}
