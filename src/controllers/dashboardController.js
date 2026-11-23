var dashboardModel = require("../models/dashboardModel");

// KPIS
function kpi1(req, res) {
    Promise.all([
        dashboardModel.kpi1TotalDeColmeias(),
        dashboardModel.kpi1QuantidadeDeColmeiasEmAlerta(),
        dashboardModel.kpi1ColmeiasEmAlerta()
    ])
    .then(function (resultados) { // O .then é a resposta caso o banco responder corretamente, aí ele registra na array do JSON
        res.status(200).json({
            totalColmeias: resultados[0],
            qntEmAlerta: resultados[1],
            colmeiasEmAlerta: resultados[2]
        });
    })
    .catch(function (erro) {   // O .catch é se caso der algum erro nas coletas do banco de dados
        console.log("Erro ao buscar as informações da 1º KPI: ", erro.sqlMessage || erro);
        res.status(500).json(erro.sqlMessage || erro);
    });
}

function kpi2(req, res) {
    Promise.all([
        colmeiasModel.kpi2QuaisColmeiasEmAdaptacao(),
        colmeiasModel.kpi2QuantidadeDeColmeiasEmAdaptacao()
    ])
    .then(function (resultados) { // O .then é a resposta caso o banco responder corretamente, aí ele registra na array do JSON
        res.status(200).json({
            colmeiasEmAdaptacao: resultados[0],
            qntEmAdaptacao: resultados[1]
        });
    })
    .catch(function (erro) {   // O .catch é se caso der algum erro nas coletas do banco de dados
        console.log("Erro ao buscar as informações da 2º KPI: ", erro.sqlMessage || erro);
        res.status(500).json(erro.sqlMessage || erro);
    });
}

function kpi3(req, res) {
    res.status(200).json({});
}

function kpi4(req, res) {
    Promise.all([
        dashboardModel.kpi4TotalDeSensoresAtivos(),
        dashboardModel.kpi4QuantidadeDeColmeiasComProblemas(),
        dashboardModel.kpi4QuaisColmeiasComProblemas(),
    ])
    .then(function (resultados) { // O .then é a resposta caso o banco responder corretamente, aí ele registra na array do JSON
        res.status(200).json({
            totalSensoresAtivos: resultados[0],
            qntColmeiasComProblemas: resultados[1],
            quaisColmeiasComProblemas: resultados[2]
        });
    })
    .catch(function (erro) {   // O .catch é se caso der algum erro nas coletas do banco de dados
        console.log("Erro ao buscar as informações da 4º KPI: ", erro.sqlMessage || erro);
        res.status(500).json(erro.sqlMessage || erro);
    });
}

function buscarUltimasMedidas(req, res) {

    var idApiario = req.params.idApiario;

    dashboardModel.buscarUltimasMedidas(idApiario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarSensoresAtivos(req, res) {

    var idApiario = req.params.idApiario;

    dashboardModel.buscarSensoresAtivos(idApiario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos sensores ativos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
function buscarAlertas(req, res) {

    var idApiario = req.params.idApiario;

    dashboardModel.buscarAlertas(idApiario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos alertas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}
module.exports = {
    kpi1,
    kpi2,
    kpi3,
    kpi4,
    buscarUltimasMedidas,
    buscarSensoresAtivos,
    buscarAlertas
}