const express = require("express");
const router = express.Router();
const Nacional = require("../models/LoteriaNacional.model");
const OrderNacional = require("../models/OrderNacional.model");


//permite al vendedor borrar los decimos que ya no quiere que esten a la venta
router.get("/delete/:id", (req, res) => {
  Nacional.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "delete ok" }))
    .catch(err => console.log(err));
});

//muestra al vendedor todos los decimos que tiene a la venta
router.get("/list", (req, res) => {
  const nacional = req.body;
  Nacional.find(nacional)
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});

//todos los pedidos
router.get("/order", (req, res) => {
  const nacional = req.body;
  OrderNacional.find(nacional)
    .then(theOrder => res.json(theOrder))
    .catch(err => console.log("DB error", err));
});

//borra los pedidos que ya se han realizado
router.get("/deleteOrder/:id", (req, res) => {
  OrderNacional.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "delete ok" }))
    .catch(err => console.log(err));
});

//los pedidos de cada usuario
router.get("/myorder", (req, res) => {
  const nacional = req.body;
  // OrderNacional.find({ user.username : "sandra" })
  //   .then(theOrder => res.json(theOrder))
  //   .catch(err => console.log("DB error", err));
});

function findDecimo(cantidad, acabado, fecha, user) {
  console.log("la cantidad", cantidad, "el acabado", acabado, fecha);

  /////////// Busca los decimos coincidente con el pedido
  Nacional.find({
    $and: [
      { numero: { $regex: `${acabado}$` } },
      { fechaSorteo: { $eq: `${fecha}` } }
    ]
  })
    .then(resp =>
      resp.sort((a, b) => {
        if (a.numero > b.numero) {
          return 1;
        }
        if (a.numero < b.numero) {
          return -1;
        } else {
          if (a.serie > b.serie) {
            return 1;
          }
          if (a.serie < b.serie) {
            return -1;
          } else {
            if (a.fraccion > b.fraccion) {
              return 1;
            }
            if (a.fraccion < b.fraccion) {
              return -1;
            }
          }
        }
      })
    )
    .then(respu => respu.slice(0, cantidad))
    //devuelve un array de objetos
    .then(respues => {
      let promisesArray = [];
      for (let i = 0; i < respues.length; i++) {
        console.log(" la respuesta es ", respues[i]);
        delete respues[i]._id;
        promisesArray.push(
          ///////// Busca el stock y actualiza los decimos.
          OrderNacional.findOneAndUpdate(
            {
              fechaSorteo: respues[i].fechaSorteo,
              fraccion: respues[i].fraccion,
              numero: respues[i].numero,
              serie: respues[i].serie,
              sorteo: respues[i].sorteo,
              status: "pedido",
              user: user
            },
            {
              fechaSorteo: respues[i].fechaSorteo,
              fraccion: respues[i].fraccion,
              numero: respues[i].numero,
              serie: respues[i].serie,
              sorteo: respues[i].sorteo,
              status: "pedido",
              user: user
            },
            {
              upsert: true
            }
          )
            .then(theNewLottery => {
              // console.log(
              //   "el objeto a borrar es: ",
              //   theNewLottery,
              //   "su id es:",
              //   theNewLottery._id
              // );

              ///// Borra el decimo.
              Nacional.deleteOne({
                fechaSorteo: respues[i].fechaSorteo,
                fraccion: respues[i].fraccion,
                numero: respues[i].numero,
                serie: respues[i].serie,
                sorteo: respues[i].sorteo
              })
                .then(() => console.log("se borra con exito"))
                .catch(err => console.log(err));
            })
            .catch(err => console.log("DB error del update", err))
        );
      }
      return promisesArray;
    }) //Nacional.deleteMany({respues})
    .then(promisesArray => {
      console.log(promisesArray);
      return Promise.all(promisesArray)
        .then(result => console.log(result, "resultado del promise all"))
        .catch(err => console.log("errorrr del promise all", err));
    })
    .catch(err => console.log("soy el error", err));
}


//opcion de compra de loteria nacional
router.post("/buy", (req, res) => {
  const nacional = req.body;
  console.log("soy la nacional" ,nacional);
  for (let key in nacional) {
    if (nacional[key] !== 0 && key != "fechaSorteo" && nacional[key] !== "0") {
      console.log("la key", key, "el valor", nacional[key], "el sorteo");
      let a = parseInt(nacional[key]);
      findDecimo(a, key, nacional.fechaSorteo, nacional.user);
    }
  }

  Nacional.findOneAndUpdate(nacional)
    .then(theCoaster => res.json(theCoaster))
    .catch(err => console.log("DB error", err));
});

//permite al vendedor añadir decimos para ponerlos a la venta
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
