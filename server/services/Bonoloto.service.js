const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class BonolotoAPIHandler {
  getBonoloto() {
    return axios
      .get(url)
      .then(res => {
        let arrNumeros = [];
        let arrBonoloto = [];
        let b = "";
        //los numeros
        const numeros = $(
          ".c-ultimo-resultado__combinacion-li--bonoloto",
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
          ".c-ultimo-resultado__reintegro-li--bonoloto",
          res.data
        );
         const fecha = $("#qa_ultResult-BONO-fecha", res.data);

        let a = numeros.text();
        for (let i = 0; i < 12; i = i + 2) {
          console.log(a);
          b = a.slice(0, 2);
          a = a.substr(2);
          arrNumeros.push(b);
        }
        arrBonoloto.push(arrNumeros);
        arrBonoloto.push(complementario.text());
        arrBonoloto.push(reintegro.text());
        arrBonoloto.push(fecha.text());

        console.log(arrBonoloto);
        return arrBonoloto;
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = BonolotoAPIHandler;
