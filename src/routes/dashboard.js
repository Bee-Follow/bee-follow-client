var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController");

// KPIS 
// ------------------------------ KPI 1
router.get("/kpi1/:idApiario", function (req, res) {
    dashboardController.kpi1(req, res);
})

// ------------------------------ KPI 2
router.get("/kpi2/:idApiario", function (req, res) {
    dashboardController.kpi2(req, res);
})

router.get("/kpi3/:idApiario", function (req, res) {
    dashboardController.kpi3(req, res)
})

// ------------------------------ KPI 4
router.get("/kpi4/:idApiario", function (req, res) { 
    dashboardController.kpi4(req, res);
})

router.get("/ultimas/dados/:idApiario", function (req, res) {
    dashboardController.buscarUltimasMedidas(req, res);
});

router.get("/ultimas/sensores/:idApiario", function (req, res) {
    dashboardController.buscarSensoresAtivos(req, res);
})

router.get("/ultimas/alertas/:idApiario", function (req, res) {
    dashboardController.buscarAlertas(req, res);
})

module.exports = router;