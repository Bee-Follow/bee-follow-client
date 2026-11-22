var database = require("../database/config");

function buscarUltimasMedidas(idApiario) {

    var instrucaoSql = `select id, temperatura, ultimaAtualizacao from vw_grafico 
                        where fk_apiario = ${idApiario}
                        order by id`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarSensoresAtivos(idApiario) {

    var instrucaoSql = `select id, ultimamanutencao, funcionando from vw_status_sensores 
    where fk_apiario = ${idApiario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarAlertas(idApiario) {

    var instrucaoSql = `select id, temperatura, dataHora from vw_alertas_recentes 
                        where fk_apiario = ${idApiario}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarSensoresAtivos,
    buscarAlertas
}
