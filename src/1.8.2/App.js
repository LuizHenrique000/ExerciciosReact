import './style.css';
import { useState, useEffect } from 'react';
import React from 'react';

export default function App() {
    const [tarefas, setTarefas] = useState([]);
    const [inputTarefa, setInputTarefa] = useState('');

    const handleOnSubmit = (e) => e.preventDefault();

    const getEstilos = () => ({
        display: 'flex',
        gap: 10,
    });

    const handleOnClickAdicionar = () => {
        const novoArray = tarefas;
        novoArray.push(inputTarefa);
        setTarefas([...novoArray]);
        setInputTarefa('');
    };

    const handleOnClickExcluir = (index) => {
        const novasTarefas = tarefas.filter((tarefa, _index) => {
            return _index !== index;
        });
        setTarefas(novasTarefas);
    };

    return (
        <div className="container">
            <div className="conteudo">
                <h1 className="titulo">Tarefas</h1>
                <div>
                    <form onSubmit={handleOnSubmit}>
                        <div className="tarefa_box">
                            <label htmlFor="tarefa">Tarefa</label>
                            <div style={getEstilos()}>
                                <input
                                    id="tarefa"
                                    name="tarefa"
                                    value={inputTarefa}
                                    onChange={(e) => setInputTarefa(e.target.value)}
                                    placeholder="minha tarefa"
                                />
                                <button
                                    className="btn btn_adicionar"
                                    onClick={handleOnClickAdicionar}
                                >
                                    Adicionar
                                </button>
                            </div>
                        </div>
                    </form>
                    <section>
                        <ul>
                            {tarefas.map((tarefa, index) => (
                                <li>
                                    <input
                                        className="tarefa_conteudo"
                                        disabled
                                        value={tarefa.description}
                                    />
                                    <button
                                        className="btn btn_excluir"
                                        onClick={() => handleOnClickExcluir(index)}
                                    >
                                        Excluir
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}
