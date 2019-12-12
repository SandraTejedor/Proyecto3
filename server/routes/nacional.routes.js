const express = require("express");
const router = express.Router();
const Nacional = require("../models/LoteriaNacional.model");

// router.get("/getAllCoasters", (req, res) => {
//   Coaster.find()
//     .then(allCoasters => res.json(allCoasters))
//     .catch(err => console.log("DB error", err));
// });

router.post("/buy", (req, res) => {
 const nacional = req.body;
  Nacional.findOneAndUpdate(nacional)
    .then(theCoaster => res.json(theCoaster))
    .catch(err => console.log("DB error", err));
});

router.post("/new", (req, res) => {
  //const nacional = req.body;
  const { numero, serieInicio, serieFinal, fechaSorteo, sorteo } = req.body;
  let arrayNumeros = [];

  for (let j = serieInicio; j <= serieFinal; j++) {
    console.log(j);
    for (let i = 1; i < 11; i++) {
      let obj = {
        numero: 0,
        serie: 0,
        fraccion: 0,
        sorteo: "",
        fechaSorteo: ""
      };
      obj.numero = numero;
      obj.serie = j;
      obj.fraccion = i;
      obj.sorteo = sorteo;
      obj.fechaSorteo = fechaSorteo;
      arrayNumeros.push(obj);
      //console.log(i, arrayNumeros)
    }
  }
  console.log(arrayNumeros);

  let promisesArray = [];
  for (let i = 0; i < arrayNumeros.length; i++) {
    promisesArray.push(
      Nacional.findOneAndUpdate(arrayNumeros[i], arrayNumeros[i], {
        upsert: true
      })
        .then(theNewLottery => theNewLottery)
        .catch(err => console.log("DB error", err))
    );
  }

  Promise.all(promisesArray).then(result => res.json(result));
});

module.exports = router;
