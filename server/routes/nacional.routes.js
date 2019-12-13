const express = require("express");
const router = express.Router();
const Nacional = require("../models/LoteriaNacional.model");

// router.get("/getAllCoasters", (req, res) => {
//   Coaster.find()
//     .then(allCoasters => res.json(allCoasters))
//     .catch(err => console.log("DB error", err));
// });

router.get("/delete/:id", (req, res) => {
  Nacional.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "delete ok" }))
    .catch(err => console.log(err));
});

router.get("/list", (req, res) => {
  const nacional = req.body;
  Nacional.find(nacional)
    .then(theCoaster => res.json(theCoaster))
    .catch(err => console.log("DB error", err));
});

// function findDecimo(cantidad, acabado) {
//   console.log("la cantidad",cantidad, "el acabado",acabado);
//   Nacional.find({ numero: { $regex: `${acabado}$` } }).limit(cantidad)
//     .then(resp => console.log("la consola", resp))
//     .catch(err => console.log("soy el error", err));
// }
function findDecimo(cantidad, acabado,fecha ) {
  console.log("la cantidad", cantidad, "el acabado", acabado, fecha);
  //{ $and: [{ numero: { $regex: `4$` } }, { fechaSorteo: { $eq: "Lotería del Niño 2019" } }] }
  Nacional.find({
    numero: { $regex: `${acabado}$` }
  })
    .limit(cantidad)
    .then(resp => console.log("la consola", resp))
    .catch(err => console.log("soy el error", err));
}
router.post("/buy", (req, res) => {
  const nacional = req.body;
  console.log(nacional);
  for (let key in nacional) {
    //if (nacional[key] !== 0 && key != "fechaSorteo" && nacional[key] !== "0") {
    if (nacional[key] !== 0 && key != "fechaSorteo" && nacional[key] !== "0") {
      console.log("la key", key, "el valor", nacional[key], "el sorteo");
      let a = parseInt(nacional[key]);
      findDecimo(a, key, nacional.fechaSorteo);
    }
  }

  //crear una regex cuando te pidan mas de 0 con ese numero
  //buscar en la BBDD y de todos los numeros que te vuelvan pillar los X primeros

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
        numero: "",
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
