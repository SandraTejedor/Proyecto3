const express = require("express");
const router = express.Router();
const JuegosBonoloto = require("../models/JuegoBonoloto.model");
const JuegosEuromillon = require("../models/JuegoEuromillon.model");
const JuegosPrimitiva = require("../models/JuegoPrimitiva.model");
const JuegosGordo = require("../models/JuegoGordo.model");
const mailer = require("../configs/nodemailer.config");

router.post("/bonoloto", (req, res) => {
  const bonoloto = req.body;
  bonoloto.user = req.user;
  console.log("soy el console del req.body", bonoloto);
  JuegosBonoloto.create({ bonoloto })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/bonoloto", (req, res) => {
  JuegosBonoloto.find({ "bonoloto.status": "pendiente" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/bonolotoSold", (req, res) => {
  JuegosBonoloto.find({ "bonoloto.status": "vendido" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/deleteBonoOrder/:id", (req, res) => {
  JuegosBonoloto.findByIdAndUpdate(req.params.id, {
    "bonoloto.status": "vendido"
  })
    // .then(() => res.json({ message: "el cambio ok" }))
    // .then(x => console.log(x, "el user email", x.bonoloto.user.email))
    .then(x => {
      mailer.sendMail({
        from: '"El Calvo de la Lotería" <info@elcalvodelaloteria.es>',
        to: x.bonoloto.user.email,
        subject: `Aquí está tu bonoloto de ${x.bonoloto.fecha}`,
        text: `Querid@ ${
          x.bonoloto.user.username
        },  aquí está tu bonoloto con números ${x.bonoloto.numeros[1].join(
          " "
        )}`,
        html: `<p>Querid@ ${
          x.bonoloto.user.username
        },  aquí está tu bonoloto con números ${x.bonoloto.numeros[1].join(
          " "
        )}</p>`
      });
    })
    .then(() => res.json({ message: "el cambio ok" }))
    .catch(err => console.log("soy el error del email", err));
});

router.get("/myOrderListBono", (req, res) => {
  JuegosBonoloto.find({ "bonoloto.user.username": req.user.username })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});



router.post("/primitiva", (req, res) => {
  const primitiva = req.body;
   primitiva.user = req.user;
  console.log("soy el console del req.body", req.body);
  JuegosPrimitiva.create({ primitiva })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/primitiva", (req, res) => {
  JuegosPrimitiva.find({ "primitiva.status": "pendiente" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/primitivaSold", (req, res) => {
  JuegosPrimitiva.find({ "primitiva.status": "vendido" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/deletePrimiOrder/:id", (req, res) => {
  JuegosPrimitiva.findByIdAndUpdate(req.params.id, {
    "primitiva.status": "vendido"
  })
    // .then(() => res.json({ message: "el cambio ok" }))
    // .then(x => console.log(x, "el user email", x.bonoloto.user.email))
    .then(x => {
      mailer.sendMail({
        from: '"El Calvo de la Lotería" <info@elcalvodelaloteria.es>',
        to: x.primitiva.user.email,
        subject: `Aquí está tu primitiva de ${x.primitiva.fecha}`,
        text: `Querid@ ${
          x.primitiva.user.username
        },  aquí está tu primitiva con números ${x.primitiva.numeros[1].join(
          " "
        )} y reintegro ${x.primitiva.reintegro}`,
        html: `<p>Querid@ ${
          x.primitiva.user.username
        },  aquí está tu primitiva con números ${x.primitiva.numeros[1].join(
          " "
        )} y reintegro ${x.primitiva.reintegro}</p>`
      });
    })
    .then(() => res.json({ message: "el cambio ok" }))
    .catch(err => console.log("soy el error del email", err));
});
router.get("/myOrderListPrimi", (req, res) => {
  JuegosPrimitiva.find({ "primitiva.user.username": req.user.username })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});

router.post("/gordo", (req, res) => {
  const gordo = req.body;
  gordo.user = req.user;
  console.log("soy el console del req.body", req.body);
  JuegosGordo.create({ gordo })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/gordo", (req, res) => {
  JuegosGordo.find({ "gordo.status": "pendiente" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/gordoSold", (req, res) => {
  JuegosGordo.find({ "gordo.status": "vendido" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/deleteGordoOrder/:id", (req, res) => {
  JuegosGordo.findByIdAndUpdate(req.params.id, {
    "gordo.status": "vendido"
  })
    // .then(() => res.json({ message: "el cambio ok" }))
    // .then(x => console.log(x, "el user email", x.bonoloto.user.email))
    .then(x => {
      mailer.sendMail({
        from: '"El Calvo de la Lotería" <info@elcalvodelaloteria.es>',
        to: x.gordo.user.email,
        subject: `Aquí está tu gordo de ${x.gordo.fecha}`,
        text: `Querid@ ${
          x.gordo.user.username
        },  aquí está tu gordo con números ${x.gordo.numeros[1].join(
          " "
        )} y clave ${x.gordo.clave}`,
        html: `<p>Querid@ ${
          x.gordo.user.username
        },  aquí está tu gordo con números ${x.gordo.numeros[1].join(
          " "
        )} y clave ${x.gordo.clave}</p>`
      });
    })
    .then(() => res.json({ message: "el cambio ok" }))
    .catch(err => console.log("soy el error del email", err));
});
router.get("/myOrderListGordo", (req, res) => {
  JuegosGordo.find({ "gordo.user.username": req.user.username })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});

router.post("/euromillon", (req, res) => {
  const euromillon = req.body;
  euromillon.user = req.user;
  console.log("soy el console del req.body", req.body);
  JuegosEuromillon.create({ euromillon })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/euromillon", (req, res) => {
  JuegosEuromillon.find({ "euromillon.status": "pendiente" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});
router.get("/euromillonSold", (req, res) => {
  JuegosEuromillon.find({ "euromillon.status": "vendido" })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});

router.get("/deleteEuroOrder/:id", (req, res) => {
  JuegosEuromillon.findByIdAndUpdate(req.params.id, {
    "euromillon.status": "vendido"
  })
    // .then(() => res.json({ message: "el cambio ok" }))
    // .then(x => console.log(x, "el user email", x.bonoloto.user.email))
    .then(x => {
      mailer.sendMail({
        from: '"El Calvo de la Lotería" <info@elcalvodelaloteria.es>',
        to: x.euromillon.user.email,
        subject: `Aquí está tu euromillon de ${x.euromillon.fecha}`,
        text: `Querid@ ${
          x.euromillon.user.username
        },  aquí está tu euromillon con números ${x.euromillon.numeros[1].join(
          " "
        )} y clave ${x.euromillon.clave}`,
        html: `<p>Querid@ ${
          x.euromillon.user.username
        },  aquí está tu euromillon con números ${x.euromillon.numeros[1].join(
          " "
        )} y estrellas ${x.euromillon.estrellas[1].join(" ")}</p>`
      });
    })
    .then(() => res.json({ message: "el cambio ok" }))
    .catch(err => console.log("soy el error del email", err));
});

router.get("/myOrderListEuro", (req, res) => {
  JuegosEuromillon.find({ "euromillon.user.username": req.user.username })
    .then(thelist => res.json(thelist))
    .catch(err => console.log("DB error", err));
});

module.exports = router;
