import React, { useState, useEffect } from "react";
import '../css/Consultar.css';

function ConsultarMunicipe() {
    // Estado para armazenar os munícipes consultados
    const [municipes, setMunicipes] = useState([]);

    // Efeito para carregar os munícipes ao montar o componente
    useEffect(() => {
        const fetchMunicipes = async () => {
            try {
                // Realiza uma requisição GET para obter os munícipes
                const response = await fetch('http://localhost:3000/municipe');
                // Converte a resposta para JSON
                const json = await response.json();
                console.log('Dados recebidos:', json); // Adicionando log
                // Atualiza o estado com os munícipes recebidos
                setMunicipes(json);
            } catch (err) {
                // Em caso de erro, exibe o erro no console
                console.error("ERRO AO CONSULTAR", err);
            }
        };

        // Chama a função para buscar os munícipes
        fetchMunicipes();
    }, []); // O array vazio indica que este efeito será executado apenas uma vez, ao montar o componente

    // Renderiza o componente de consulta de munícipes
    return (
        <div className="App">
            <center>
                <header>CONSULTAR MUNICIPES</header>
                <ul>
                    {/* Mapeia os munícipes e renderiza um item de lista para cada um */}
                    {municipes.map((municipe) => (
                        <li key={municipe.id}>
                            {/* Exibe os detalhes do munícipe */}
                            ID: {municipe.idmunicipe} - Nome: {municipe.nome} - Idade: {municipe.idade} - CPF: {municipe.cpf} - Telefone: {municipe.telefone} - Endereço: {municipe.end} - Data de Nascimento: {municipe.data_nasce}
                        </li>
                    ))}
                </ul>
            </center>
        </div>
    );
}

export default ConsultarMunicipe;