import connection from './conexaoMunicipe.js'; // Importa a conexão com o banco de dados

// Função para ler todos os registros de munícipes
export function read(callback) {
    connection.query('SELECT * FROM municipe', callback);
}

// Função para criar um novo munícipe no banco de dados
export function create(nome, idade, cpf, telefone, end, data_nasce, callback) {
    // Executa uma query SQL para inserir um novo registro na tabela municipe
    connection.query(
        'INSERT INTO municipe (nome, idade, cpf, telefone, end, data_nasce) VALUES (?, ?, ?, ?, ?, ?)',
        [nome, idade, cpf, telefone, end, data_nasce],
        callback
    );
}

// Função para atualizar os dados de um munícipe existente no banco de dados
export function update(id, novosDados, callback) {
    const { nome, idade, cpf, telefone, end, data_nasce } = novosDados;
    // Executa uma query SQL para atualizar os dados do munícipe com o ID fornecido
    connection.query(
        'UPDATE municipe SET nome = ?, idade = ?, cpf = ?, telefone = ?, end = ?, data_nasce = ? WHERE idmunicipe = ?',
        [nome, idade, cpf, telefone, end, data_nasce, id],
        callback
    );
}

// Função para excluir um munícipe do banco de dados
export function deletePes(id, callback) {
    // Executa uma query SQL para excluir o registro do munícipe com o ID fornecido
    connection.query('DELETE FROM municipe WHERE idmunicipe = ?', [id], callback);
}