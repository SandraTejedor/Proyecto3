const axios = require("axios");

const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class EuromillonAPIHandler {
  getEuromillon() {
    return axios
    .get(url)
    .then(res => {
      let arrNumeros = [];
      let arrEstrellas = [];
      let arrEuromillon = [];
      let b = "";
      let cadaEs = "";
      //los numeros
        const results = $(
          ".c-ultimo-resultado__combinacion-li--euromillones",
          res.data
        );
        //console.log("el result", results.text())
        //las estrellas
        const estrellas = $(".c-ultimo-resultado__estrellas-li", res.data);

        //el millon (juego)
        const millon = $(".c-ultimo-resultado__desplegable-titulo", res.data);

        //para los numero
        let a = results.text();
        for (let i = 0; i < 10; i = i + 2) {
          console.log(a);
          b = a.slice(0, 2);
          a = a.substr(2);
          arrNumeros.push(b);
        }
        //para las estrellas
        let stringEs = estrellas.text();
        for (let i = 0; i < 4; i = i + 2) {
          console.log(stringEs);
          cadaEs = stringEs.slice(0, 2);
          stringEs = stringEs.substr(2);
          arrEstrellas.push(cadaEs);
        }
        //meto los dos arrays en uno
        arrEuromillon.push(arrNumeros);
        arrEuromillon.push(arrEstrellas);
        arrEuromillon.push(millon.text());

        //para las estrellas
        console.log(arrNumeros, arrEstrellas, arrEuromillon, millon.text());
        return arrEuromillon;
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = EuromillonAPIHandler;
