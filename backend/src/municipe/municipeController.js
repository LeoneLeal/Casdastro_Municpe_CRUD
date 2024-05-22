import {create, read, update, deletePes} from './municipeModel.js';

// Função para criar um novo munícipe
export async function createMunicipe(req, res){
    // Extrai os dados do corpo da requisição
    const { nome, idade, cpf, telefone, end, data_nasce } = req.body;

    // Exibe os dados recebidos no console para depuração
    console.log('Dados recebidos do frontend:', {nome, idade, cpf, telefone, end, data_nasce});

    // Chama a função de criação do modelo passando os dados e um callback
    create(nome, idade, cpf, telefone, end, data_nasce, (err, result) => {
        if(err){
            // Em caso de erro, envia uma resposta de erro com status 500
            res.status(500).json({ error: err.message });
            return;
        }
        // Se bem-sucedido, envia uma resposta de sucesso com status 201
        res.status(201).json({ mensagem: 'Municipe criado com sucesso' });
    });
}

// Função para obter todos os munícipes
export async function getAllMunicipe(req, res) {
    // Chama a função de leitura do modelo com um callback
    read((err, municipe) => {
        if (err) {
            // Em caso de erro, envia uma resposta de erro com status 500
            res.status(500).json({ error: err.message });
            return;
        }
        // Exibe os dados dos munícipes no console para depuração
        console.log('Consulta de municipe!', municipe);

        // Se bem-sucedido, envia os dados dos munícipes como resposta JSON
        res.json(municipe);
    });
}

// Função para atualizar um munícipe existente
export async function updateMunicipe(req, res) {
    // Extrai o ID do munícipe dos parâmetros da URL
    const { id } = req.params;

    // Extrai os novos dados do corpo da requisição
    const novosDados = req.body;

    // Chama a função de atualização do modelo passando o ID, os novos dados e um callback
    update(id, novosDados, (err, result) => {
        if (err) {
            // Em caso de erro, envia uma resposta de erro com status 500
            res.status(500).json({ error: err.message });
            return;
        }
        // Se bem-sucedido, envia uma mensagem de sucesso
        res.send('Munícipe atualizado com sucesso');
    });
}

// Função para excluir um munícipe existente
export async function deleteMunicipe(req, res) {
    // Extrai o ID do munícipe dos parâmetros da URL
    const { id } = req.params;

    // Exibe o ID recebido no console para depuração
    console.log('Dados recebidos do frontend:', {id});

    // Chama a função de exclusão do modelo passando o ID e um callback
    deletePes(id, (err, result) => {
        if (err) {
            // Em caso de erro, envia uma resposta de erro com status 500
            res.status(500).json({ error: err.message });
            return;
        }
        // Se bem-sucedido, envia uma mensagem de sucesso
        res.send('Munícipe excluído com sucesso!');
    });
}
