import React, { useState, useEffect } from "react";
import '../css/Atualizar.css';
import { FcRefresh } from "react-icons/fc";

function AtualizarMunicipe() {
    // Estado para armazenar os valores do formulário
    const [formValores, setFormValores] = useState({
        id: "",
        nome: "",
        idade: "",
        cpf: "",
        telefone: "",
        end: "",
        data_nasce: "",
    });

    // Estado para controlar se o formulário foi submetido
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Função para lidar com a mudança nos campos do formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        // Atualiza o estado com os novos valores
        setFormValores(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Função para lidar com a atualização do munícipe
    const handleAtualizar = async (e) => {
        e.preventDefault();
        try {
            // Faz uma requisição PUT para atualizar o munícipe com o ID fornecido
            const response = await fetch(`http://localhost:3000/municipe/${formValores.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });
            if (response.ok) {
                // Se a requisição for bem-sucedida, atualiza o estado para indicar que foi submetido
                setIsSubmitted(true);
            } else {
                // Se houver erro na requisição, exibe um alerta
                alert("Erro ao atualizar o munícipe");
            }
        } catch (err) {
            // Se houver erro na requisição, exibe o erro no console
            console.error("ERRO AO ATUALIZAR", err);
        }
    };

    // Efeito que é executado quando o formulário é submetido
    useEffect(() => {
        if (isSubmitted) {
            // Se o formulário foi submetido com sucesso, exibe um alerta
            alert("Munícipe atualizado com sucesso!");
            // Limpa o formulário e reseta o estado de submissão
            setFormValores({
                id: "",
                nome: "",
                idade: "",
                cpf: "",
                telefone: "",
                end: "",
                data_nasce: "",
            });
            setIsSubmitted(false);
        }
    }, [isSubmitted]);

    // Renderiza o componente de atualização do munícipe
    return (
        <form onSubmit={handleAtualizar}>
            <center>
                <div className="App">
                    <br />
                    <header>ATUALIZAR MUNICIPE</header><br />
                    <br />
                    <div>
                        <label>ID: </label>
                        <input type="number" name="id" value={formValores.id} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label>NOME: </label>
                        <input type="text" name="nome" value={formValores.nome} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label>IDADE: </label>
                        <input type="number" name="idade" value={formValores.idade} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label>CPF: </label>
                        <input type="text" maxLength={14} name="cpf" value={formValores.cpf} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label>ENDEREÇO: </label>
                        <input type="text" maxLength={200} name="end" value={formValores.end} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label>ANO DE NASCIMENTO: </label>
                        <input type="number" name="data_nasce" value={formValores.data_nasce} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label>TELEFONE: </label>
                        <input type="text" maxLength={17} name="telefone" value={formValores.telefone} onChange={handleChange} required />
                    </div>
                    <br />
                    <button type="submit"> <FcRefresh /> ATUALIZAR</button>
                </div>
            </center>
        </form>
    );
}

export default AtualizarMunicipe;
