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


module.exports = router;
