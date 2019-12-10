const express = require("express");
const router = express.Router();

//primitiva
const Primitiva = require("../models/Primitiva.model");
const PrimitivaAPI = require("../services/Primitiva.service");
const PrimitivaAPIHandler = new PrimitivaAPI();

//euromillon
const Euromillon = require("../models/Euromillon.model");
const EuromillonAPI = require("../services/Euromillon.service");
const EuromillonAPIHandler = new EuromillonAPI();

//bonoloto
const bonoloto = require("../models/Bonoloto.model");
const BonolotoAPI = require("../services/Bonoloto.service");
const BonolotoAPIHandler = new BonolotoAPI();

//gordo
const gordo = require("../models/Gordo.model");
const GordoAPI = require("../services/Gordo.service");
const GordoAPIHandler = new GordoAPI();

//gordo
const Lototurf = require("../models/Lototurf.model");
const LototurfAPI = require("../services/Lototurf.service");
const LototurfAPIHandler = new LototurfAPI();

//quiniela
const quiniela = require("../models/Quiniela.model");
const QuinielaAPI = require("../services/Quiniela.service");
const QuinielaAPIHandler = new QuinielaAPI();

//quinigol
const quinigol = require("../models/Quinigol.model");
const QuinigolAPI = require("../services/Quinigol.service");
const QuinigolAPIHandler = new QuinigolAPI();

//sabado
const sabado = require("../models/Sabado.model");
const SabadoAPI = require("../services/Sabado.service");
const SabadoAPIHandler = new SabadoAPI();

//Jueves
const jueves = require("../models/Jueves.model");
const JuevesAPI = require("../services/Jueves.service");
const JuevesAPIHandler = new JuevesAPI();

//primitiva
router.get("/primitiva", (req, res) => {
  PrimitivaAPIHandler.getPrimitiva()
    .then(resPrimitiva => {
      console.log("respondiendo sandris", resPrimitiva);
      res.status(200).json(resPrimitiva);
    })
    .catch(err => console.log(err, "err full list"));
});

//euromillon
router.get("/euromillon", (req, res) => {
  EuromillonAPIHandler.getEuromillon()
    .then(resEuromillon => {
      console.log("respondiendo sandris", resEuromillon);
      res.status(200).json(resEuromillon);
    })
    .catch(err => console.log(err, "err full list"));
});

//bonoloto
router.get("/bonoloto", (req, res) => {
  BonolotoAPIHandler.getBonoloto()
    .then(resBonoloto => {
      console.log("respondiendo sandris", resBonoloto);
      res.status(200).json(resBonoloto);
    })
    .catch(err => console.log(err, "err full list"));
});

//gordo
router.get("/gordo", (req, res) => {
  GordoAPIHandler.getGordo()
    .then(resGordo => {
      console.log("respondiendo sandris", resGordo);
      res.status(200).json(resGordo);
    })
    .catch(err => console.log(err, "err full list"));
});

//lototurf
router.get("/lototurf", (req, res) => {
  LototurfAPIHandler.getLototurf()
    .then(resLototurf => {
      console.log("respondiendo sandris", resLototurf);
      res.status(200).json(resLototurf);
    })
    .catch(err => console.log(err, "err full list"));
});

//Quiniela
router.get("/quiniela", (req, res) => {
  QuinielaAPIHandler.getQuiniela()
    .then(resQuiniela => {
      console.log("respondiendo sandris", resQuiniela);
      res.status(200).json(resQuiniela);
    })
    .catch(err => console.log(err, "err full list"));
});

//Quinigol
router.get("/quinigol", (req, res) => {
  QuinigolAPIHandler.getQuinigol()
    .then(resQuinigol => {
      console.log("respondiendo sandris", resQuinigol);
      res.status(200).json(resQuinigol);
    })
    .catch(err => console.log(err, "err full list"));
});

//Sabado
router.get("/sabado", (req, res) => {
  SabadoAPIHandler.getSabado()
    .then(resSabado => {
      console.log("respondiendo sandris", resSabado);
      res.status(200).json(resSabado);
    })
    .catch(err => console.log(err, "err full list"));
});

//Jueves
router.get("/jueves", (req, res) => {
  JuevesAPIHandler.getJueves()
    .then(resJueves => {
      console.log("respondiendo sandris", resJueves);
      res.status(200).json(resJueves);
    })
    .catch(err => console.log(err, "err full list"));
});

module.exports = router;
