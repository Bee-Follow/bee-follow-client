var database = require("../database/config");

// Select das KPI´S
// 1ª KPI - colmeia com temperatura fora do padrão
function kpi1TotalDeColmeias(idApiario) {
    var instrucaoSql = `select qtd_colmeias from vw_kpi1_qnt_colmeias where fk_apiario = ${idApiario};` // Total de colmeias que temos registrados
    return database.executar(instrucaoSql);
}

function kpi1QuantidadeDeColmeiasEmAlerta(idApiario) {
    var instrucaoSql = `select qtd_colmeias_alertas from vw_kpi1_qnt_colmeias_em_alerta where fk_apiario = ${idApiario};` // Quantidade de Colmeias que estão em alerta
    return database.executar(instrucaoSql);
}

function kpi1ColmeiasEmAlerta(idApiario) {
    var instrucaoSql = `select colmeia from vw_kpi1_colmeias_em_alerta where fk_apiario = ${idApiario};` // essa informação vai mostar QUAIS são as colmeias que estão em alerta 
    return database.executar(instrucaoSql);
}
// 2ª KPI -

function kpi2ColmeiaEmEnxameacao(idApiario) {
    var instrucaoSql = `select colmeia from vw_kpi2_colmeias_em_enxameacao where fk_apiario = ${idApiario};`;
    return database.executar(instrucaoSql);
}

function kpi2QtdEmEnxameacao(idApiario) {
    var instrucaoSql = `select qtd_colmeias from vw_kpi2_colmeias_em_enxameacao where fk_apiario = ${idApiario};`;
    return database.executar(instrucaoSql);
}

// 3ª KPI - colmeias em processo de adaptação

function kpi3QuaisColmeiasEmAdaptacao(idApiario) {
    var instrucaoSql = `select * from vw_kpi3_colmeias_em_adaptacao where fk_apiario = ${idApiario};`  // QUAIS colmeias estão em adaptaçaõ
    return database.executar(instrucaoSql);
}

function kpi3QuantidadeDeColmeiasEmAdaptacao(idApiario) {
    var instrucaoSql = `select * from vw_kpi3_qnt_colmeias_adaptacao where fk_apiario = ${idApiario};` // QUANTIDADE de colmeias em periodo de adaptação
    return database.executar(instrucaoSql);
}

// 4ª KPI - status do sensor - total 12
function kpi4TotalDeSensoresAtivos(idApiario) {
    var instrucaoSql = `select qtd_ativos from vw_kpi4_qnt_colmeias where fk_apiario = ${idApiario};` // TOTAL de colmeias que tem sensores ativos
    return database.executar(instrucaoSql);
}

function kpi4QuantidadeDeColmeiasComProblemas(idApiario) {
    var instrucaoSql = `select qtd_inativos from vw_kpi4_qnt_colmeias_falhas where fk_apiario = ${idApiario};` // QUANTIDADE de colmeias que estão com problemas
    return database.executar(instrucaoSql);
}

function kpi4QuaisColmeiasComProblemas(idApiario) {
    var instrucaoSql = `select colmeia from vw_kpi4_colmeias_problemas where fk_apiario = ${idApiario};` // QUAIS foram as colmeias que tiveram falhas
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

    var instrucaoSql = `select id, ultimamanutencao, funcionando, proximaManutencao from vw_status_sensores 
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
    kpi1TotalDeColmeias,
    kpi1QuantidadeDeColmeiasEmAlerta,
    kpi1ColmeiasEmAlerta,
    kpi2ColmeiaEmEnxameacao,
    kpi2QtdEmEnxameacao,
    kpi3QuaisColmeiasEmAdaptacao,
    kpi3QuantidadeDeColmeiasEmAdaptacao,
    kpi4TotalDeSensoresAtivos,
    kpi4QuantidadeDeColmeiasComProblemas,
    kpi4QuaisColmeiasComProblemas,
    buscarUltimasMedidas,
    buscarSensoresAtivos,
    buscarAlertas
}
