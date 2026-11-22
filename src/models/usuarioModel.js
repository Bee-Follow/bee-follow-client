var database = require("../database/config");

function cadastrar(nome, email, senha, fk_empresa) {
    console.log("ACESSEI O USUARIO MODEL \n\n function cadastrar():", nome, email, senha, fk_empresa);

    var instrucaoSql = `
        INSERT INTO funcionarios (nome, email, senha, fk_empresa)
        VALUES ('${nome}', '${email}', sha2('${senha}', 256), '${fk_empresa}');
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n\n function autenticar():", email);

    var instrucaoSql = ` select id, nome, email, fk_empresa, fk_apiario from vw_autenticacao_usuario
    where email = '${email}' and senha = sha2('${senha}', 256)
    limit 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar
};

// O model é responsável pela comunicação com o banco de dados. 
// A função cadastrar recebe os dados do funcionário e monta um INSERT 
// na tabela funcionario.

// A função autenticar recebe email e senha e monta 
// um SELECT para verificar se existe um funcionário com essas credenciais. 
// Ambas executam o SQL por meio de database.executar() e retornam o resultado ao controller.