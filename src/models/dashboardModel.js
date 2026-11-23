var database = require("../database/config");

// Select das KPI´S
// 1ª KPI - colmeia com temperatura fora do padrão
function kpi1TodasInformacoes() {
    var instrucaoSql = `select * from vw_kpi1_todas_informacoes;` // Todas as informações juntas para verificar se está tudo correto
    return database.executar(instrucaoSql);
}

function kpi1TotalDeColmeias() {
    var instrucaoSql = `select * from vw_kpi1_qnt_colmeias;` // Total de colmeias que temos registrados
    return database.executar(instrucaoSql);
}

function kpi1QuantidadeDeColmeiasEmAlerta() {
    var instrucaoSql = `select * from vw_kpi1_qnt_colmeias_em_alerta;` // Quantidade de Colmeias que estão em alerta
    return database.executar(instrucaoSql);
}

function kpi1ColmeiasEmAlerta() {
    var instrucaoSql = `select * from vw_kpi1_colmeias_em_alerta;` // essa informação vai mostar QUAIS são as colmeias que estão em alerta 
    return database.executar(instrucaoSql);
}


// 2ª KPI - colmeias em processo de adaptação

function kpi2QuaisColmeiasEmAdaptacao() {
    var instrucaoSql = `select * from vw_kpi2_colmeias_em_adaptacao;`  // QUAIS colmeias estão em adaptaçaõ
    return database.executar(instrucaoSql);
}

function kpi2QuantidadeDeColmeiasEmAdaptacao() {
    var instrucaoSql = `select * from vw_kpi2_qnt_colmeias_adaptacao;` // QUANTIDADE de colmeias em periodo de adaptação
    return database.executar(instrucaoSql);
}

// 3ª KPI - 

// 4ª KPI - status do sensor - total 12
function kpi4TotalDeSensoresAtivos() {
    var instrucaoSql = `select * from vw_kpi4_qnt_colmeias;` // TOTAL de colmeias que tem sensores ativos
    return database.executar(instrucaoSql);
}

function kpi4QuantidadeDeColmeiasComProblemas() {
    var instrucaoSql = `select * from vw_kpi4_qnt_colmeias_falhas;` // QUANTIDADE de colmeias que estão com problemas
    return database.executar(instrucaoSql);
}

function kpi4QuaisColmeiasComProblemas() {
    var instrucaoSql = `select * from vw_kpi4_colmeias_problemas;` // QUAIS foram as colmeias que tiveram falhas
    return database.executar(instrucaoSql);
}

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
    kpi1TodasInformacoes,
    kpi1TotalDeColmeias,
    kpi1QuantidadeDeColmeiasEmAlerta,
    kpi1ColmeiasEmAlerta,
    kpi2QuaisColmeiasEmAdaptacao,
    kpi2QuantidadeDeColmeiasEmAdaptacao,
    kpi4TotalDeSensoresAtivos,
    kpi4QuantidadeDeColmeiasComProblemas,
    kpi4QuaisColmeiasComProblemas,
    buscarUltimasMedidas,
    buscarSensoresAtivos,
    buscarAlertas
}
