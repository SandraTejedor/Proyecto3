const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";
let arrNumeros = [];
let arrGordo = [];
let b = "";

class GordoAPIHandler {
  getGordo() {
    return axios
      .get(url)
      .then(res => {
        //los numeros
        const numeros = $(
          ".c-ultimo-resultado__combinacion-li--elgordo",
          res.data
        );
        //console.log("el result", results.text())
        //reintegro
        const reintegro = $(
          ".c-ultimo-resultado__reintegro-li--elgordo",
          res.data
        );

        let a = numeros.text();
        for (let i = 0; i < 10; i = i + 2) {
          console.log(a);
          b = a.slice(0, 2);
          a = a.substr(2);
          arrNumeros.push(b);
        }
        arrGordo.push(arrNumeros);
        arrGordo.push(reintegro.text());

        console.log(arrGordo);
        return arrGordo;
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = GordoAPIHandler;
