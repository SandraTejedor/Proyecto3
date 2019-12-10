const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class QuintupleAPIHandler {
  getQuintuple() {
    return axios
      .get(url)
      .then(res => {
        let arrNumeros = [];
        let b = "";
        //los numeros
        const numeros = $(
          ".c-ultimo-resultado__tabla-span-resultado--quintuple",
          res.data
        );
        //console.log("el result", results.text())

        let a = numeros.text();
        for (let i = 0; i < 12; i = i + 2) {
          console.log(a);
          b = a.slice(0, 2);
          a = a.substr(2);
          arrNumeros.push(b);
        }

        console.log(arrNumeros);
        return arrNumeros
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = QuintupleAPIHandler;
