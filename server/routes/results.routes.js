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
const Bonoloto = require("../models/Bonoloto.model");
const BonolotoAPI = require("../services/Bonoloto.service");
const BonolotoAPIHandler = new BonolotoAPI();

//gordo
const Gordo = require("../models/Gordo.model");
const GordoAPI = require("../services/Gordo.service");
const GordoAPIHandler = new GordoAPI();

//gordo
const Lototurf = require("../models/Lototurf.model");
const LototurfAPI = require("../services/Lototurf.service");
const LototurfAPIHandler = new LototurfAPI();

//quiniela
const Quiniela = require("../models/Quiniela.model");
const QuinielaAPI = require("../services/Quiniela.service");
const QuinielaAPIHandler = new QuinielaAPI();

//quinigol
const Quinigol = require("../models/Quinigol.model");
const QuinigolAPI = require("../services/Quinigol.service");
const QuinigolAPIHandler = new QuinigolAPI();

//Quintuple
const Quintuple = require("../models/Quintuple.model");
const QuintupleAPI = require("../services/Quintuple.service");
const QuintupleAPIHandler = new QuintupleAPI();

//sabado
const Sabado = require("../models/Sabado.model");
const SabadoAPI = require("../services/Sabado.service");
const SabadoAPIHandler = new SabadoAPI();

//Jueves
const Jueves = require("../models/Jueves.model");
const JuevesAPI = require("../services/Jueves.service");
const JuevesAPIHandler = new JuevesAPI();

//primitiva
router.get("/primitiva", (req, res) => {
  PrimitivaAPIHandler.getPrimitiva()
    .then(resPrimitiva => {
      console.log("respondiendo sandris", resPrimitiva);
      res.status(200).json(resPrimitiva);
      let obj = {
        primitiva: {
          numeros: resPrimitiva[0],
          complementario: resPrimitiva[1],
          reintegro: resPrimitiva[2],
          joker: resPrimitiva[3]
        }
      };
      Primitiva.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//euromillon
router.get("/euromillon", (req, res) => {
  EuromillonAPIHandler.getEuromillon()
    .then(resEuromillon => {
      console.log("respondiendo sandris", resEuromillon);
      res.status(200).json(resEuromillon);
      let obj = {
        euromillon: {
          numeros: resEuromillon[0],
          estrellas: resEuromillon[1],
          millon: resEuromillon[2]
        }
      };
      Euromillon.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//bonoloto
router.get("/bonoloto", (req, res) => {
  BonolotoAPIHandler.getBonoloto()
    .then(resBonoloto => {
      console.log("respondiendo sandris", resBonoloto);
      res.status(200).json(resBonoloto);
      let obj = {
        bonoloto: {
          numeros: resBonoloto[0],
          complementario: resBonoloto[1],
          reintegro: resBonoloto[2]
        }
      };
      Bonoloto.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//gordo
router.get("/gordo", (req, res) => {
  GordoAPIHandler.getGordo()
    .then(resGordo => {
      console.log("respondiendo sandris", resGordo);
      res.status(200).json(resGordo);
      let obj = {
        gordo: { numeros: resGordo[0], reintegro: resGordo[1] }
      };
      Gordo.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//lototurf
router.get("/lototurf", (req, res) => {
  LototurfAPIHandler.getLototurf()
    .then(resLototurf => {
      console.log("respondiendo sandris", resLototurf);
      res.status(200).json(resLototurf);
      let obj = {
        lototurf: {
          numeros: resLototurf[0],
          caballo: resLototurf[1],
          reintegro: resLototurf[2]
        }
      };
      Lototurf.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//Quiniela
router.get("/quiniela", (req, res) => {
  QuinielaAPIHandler.getQuiniela()
    .then(resQuiniela => {
      console.log("respondiendo sandris", resQuiniela);
      res.status(200).json(resQuiniela);
      let obj = {
        quiniela: {
          equipos: resQuiniela[0],
          partidos: resQuiniela[1],
          resultados: resQuiniela[2]
        }
      };
      Quiniela.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//Quinigol
router.get("/quinigol", (req, res) => {
  QuinigolAPIHandler.getQuinigol()
    .then(resQuinigol => {
      console.log("respondiendo sandris", resQuinigol);
      res.status(200).json(resQuinigol);
      let obj = {
        quinigol: {
          equipos: resQuinigol[0],
          partidos: resQuinigol[1],
          resultados: resQuinigol[2]
        }
      };
      Quinigol.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//Quintuple
router.get("/quintuple", (req, res) => {
  QuintupleAPIHandler.getQuintuple()
    .then(resQuintuple => {
      console.log("respondiendo sandris", resQuintuple);
      res.status(200).json(resQuintuple);
      let obj = {
        quintuple: {
          numeros: resQuintuple
        }
      };
      Quintuple.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//Sabado
router.get("/sabado", (req, res) => {
  SabadoAPIHandler.getSabado()
    .then(resSabado => {
      console.log("respondiendo sandris", resSabado);
      res.status(200).json(resSabado);
      let obj = {
        sabado: { premios: resSabado[0], reintegros: resSabado[1] }
      };
      Sabado.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

//Jueves
router.get("/jueves", (req, res) => {
  JuevesAPIHandler.getJueves()
    .then(resJueves => {
      console.log("respondiendo sandris", resJueves);
      res.status(200).json(resJueves);

      let obj = {
        jueves: { premios: resJueves[0], reintegros: resJueves[1] }
      };

      Jueves.create(obj);
    })
    .catch(err => console.log(err, "err full list"));
});

module.exports = router;
