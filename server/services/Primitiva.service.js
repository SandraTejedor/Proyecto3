const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";
let arrNumeros = [];
let arrPrimitiva = [];
let b = "";

class PrimitivaAPIHandler {
  getPrimitiva() {
    return axios
      .get(url)
      .then(res => {
        //los numeros
        const numeros = $(
          ".c-ultimo-resultado__combinacion-li--primitiva",
          res.data
        );
        //console.log("el result", results.text())
        //complementario
        const complementario = $(
          ".c-ultimo-resultado__complementario-li--primitiva",
          res.data
        );
        //reintegro
        const reintegro = $(
          ".c-ultimo-resultado__reintegro-li--primitiva",
          res.data
        );

        //joker
        const joker = $(".c-ultimo-resultado__joker-ganador", res.data);

        let a = numeros.text();
        for (let i = 0; i < 12; i = i + 2) {
          console.log(a);
          b = a.slice(0, 2);
          a = a.substr(2);
          arrNumeros.push(b);
        }
        arrPrimitiva.push(arrNumeros);
        arrPrimitiva.push(complementario.text());
        arrPrimitiva.push(reintegro.text());
        arrPrimitiva.push(joker.text());

        console.log(arrPrimitiva);
        return arrPrimitiva
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = PrimitivaAPIHandler;
