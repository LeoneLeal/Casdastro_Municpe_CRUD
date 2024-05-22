import React, { useState, useEffect } from "react";
import '../css/Cadastrar.css';
import { FcPlus } from "react-icons/fc";

function FormCadastro() {
    // Estado para armazenar os valores do formulário
    const [formValores, setFormValores] = useState({
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

    // Função para lidar com o envio do formulário
    const handleCadastro = async (e) => {
        e.preventDefault();
        try {
            // Exibe os dados a serem enviados no console
            console.log("DADOS A SEREM ENVIADOS:", formValores);
            // Faz uma requisição POST para cadastrar um munícipe
            const response = await fetch('http://localhost:3000/municipe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formValores)
            });

            if (response.ok) {
                // Se a requisição for bem-sucedida, atualiza o estado para indicar que foi submetido
                const json = await response.json();
                console.log(response);
                console.log(json);
                setIsSubmitted(true);
            } else {
                // Se houver erro na requisição, exibe o status do erro no console
                console.error("Erro ao enviar dados:", response.statusText);
            }
        } catch (err) {
            // Se houver erro na requisição, exibe o erro no console
            console.error("ERRO AO ENVIAR", err);
        }
    };

    // Efeito que é executado quando o formulário é submetido
    useEffect(() => {
        if (isSubmitted) {
            // Se o formulário foi submetido com sucesso, exibe um alerta
            alert("Munícipe cadastrado com sucesso!");
            // Limpa o formulário e reseta o estado de submissão
            setFormValores({
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

    // Renderiza o componente de cadastro
    return (
        <form onSubmit={handleCadastro}>
            <center>
                <div className="App">
                    <div>
                        <label> NOME: </label>
                        <input type="text" name="nome" value={formValores.nome} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> IDADE: </label>
                        <input type="number" name="idade" value={formValores.idade} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> CPF: </label>
                        <input type="text" maxLength={14} name="cpf" value={formValores.cpf} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> ENDEREÇO: </label>
                        <input type="text" maxLength={200} name="end" value={formValores.end} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> ANO DE NASCIMENTO: </label>
                        <input type="number" name="data_nasce" value={formValores.data_nasce} onChange={handleChange} required />
                    </div>
                    <br />
                    <div>
                        <label> TELEFONE: </label>
                        <input type="text" maxLength={17} name="telefone" value={formValores.telefone} onChange={handleChange} required />
                    </div>
                    <br />
                    <button type="submit"> <FcPlus /> CADASTRAR </button>
                </div>
            </center>
        </form>
    );
}

export default FormCadastro;
