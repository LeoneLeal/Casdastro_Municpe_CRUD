import React, { useState } from "react"; // Importa o React e a função useState
import '../css/Home.css'; // Importa o arquivo CSS para estilização
import Cadastrar from './Cadastrar'; // Importa o componente de cadastro
import Atualizar from './Atualizar'; // Importa o componente de atualização
import Consultar from './Consultar'; // Importa o componente de consulta
import Deletar from './Deletar'; // Importa o componente de exclusão
import { FcPlus } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import { FcRefresh } from "react-icons/fc";
import { VscHome } from "react-icons/vsc";
import { VscTrash } from "react-icons/vsc";

function Menu() {
    // Define o estado local para controlar a página atual
    const [pagina, setPagina] = useState("menu");

    // Função para lidar com o clique no botão de voltar
    const handleVoltarClick = () => {
        setPagina("menu"); // Volta para a página do menu principal
    };

    return (
        <div className="front">
            <center>
                <br />
                <br />
                <header>PREFEITURA MUNICIPAL DE ALTO SANTO DA GLÓRIA</header><br />
                <br />
                <br />
                <br />
                <img src="alto.jpg" alt="logo.jpg" className="img" />
                <br />
                <br />
                <br />
                {pagina === "menu" ? (
                    <div>
                        <button onClick={() => setPagina("cadastro")} > <FcPlus />  CADASTRAR MUNICIPES</button><br />
                        <br />
                        <button onClick={() => setPagina("atualizar")}> <FcRefresh /> ATUALIZAR MUNICIPES</button><br />
                        <br />
                        <button onClick={() => setPagina("consultar")}> <FcContacts /> CONSULTAR MUNICIPES</button><br />
                        <br />
                        <button onClick={() => setPagina("deletar")}> <VscTrash /> DELETAR MUNICIPES</button><br />
                        <br />
                    </div>
                ) : pagina === "cadastro" ? (
                    <div>
                        <Cadastrar />
                        <br />
                        <button onClick={handleVoltarClick}> <VscHome /> VOLTAR</button>
                    </div>
                ) : pagina === "atualizar" ? (
                    <div>
                        <Atualizar />
                        <br />
                        <button onClick={handleVoltarClick}> <VscHome /> VOLTAR</button>
                    </div>
                ) : pagina === "consultar" ? (
                    <div>
                        <Consultar />
                        <br />
                        <button onClick={handleVoltarClick}> <VscHome /> VOLTAR</button>
                    </div>
                ) : (
                    <div>
                        <Deletar />
                        <br />
                        <button onClick={handleVoltarClick}> <VscHome /> VOLTAR</button>
                    </div>
                )}
            </center>
        </div>
    );
}

export default Menu;