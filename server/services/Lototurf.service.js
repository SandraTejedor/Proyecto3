const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class LototurfAPIHandler {
  getLototurf() {
    return axios
    .get(url)
    .then(res => {
      let arrNumeros = [];
      let arrLototurf = [];
      let b = "";
      let c = "";
        //los numeros
        const numeros = $(
          ".c-ultimo-resultado__combinacion-li--lototurf",
          res.data
        );
        //console.log("el result", results.text())
        //caballo
        const caballo = $(
          ".c-ultimo-resultado__complementario-li--lototurf ",
          res.data
        );
        //reintegro
        const reintegro = $(
          ".c-ultimo-resultado__reintegro-li--lototurf",
          res.data
        );

        let a = numeros.text();
        for (let i = 0; i < 12; i = i + 2) {
          console.log(a);
          b = a.slice(0, 2);
          a = a.substr(2);
          arrNumeros.push(b);
        }

        let cab = caballo.text();
        console.log("la long", cab.length);
        c = cab.slice(7, 9);

        arrLototurf.push(arrNumeros);
        arrLototurf.push(c);
        arrLototurf.push(reintegro.text());

        console.log(arrLototurf);
        return arrLototurf
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = LototurfAPIHandler;





