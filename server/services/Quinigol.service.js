const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class QuinigolAPIHandler {
  getQuinigol() {
    return axios
      .get(url)
      .then(res => {
        let b = [];
        let bb = [];
        let cc = [];
        let arrQuinigol = [];
        //los partidos
        for (let i = 1; i < 7; i++) {
          const partidos = $(`#qa_ultResult-QGOL-partido${i}`, res.data);
          cc.push(partidos.text());
        }
        console.log(cc);

        //resultado
        const resultado = $(
          ".c-ultimo-resultado__tabla-span-resultado--quinigol",
          res.data
        );

        let a = resultado.text();
        b = a.split(" ");
        for (let i = 0; i < b.length; i++) {
          if (b[i] == "") {
            b.splice(i, 1);
          }
        }
        console.log(b);

        //Resultado quiniela
        const partidosQuiniela = $(
          `.c-ultimo-resultado__tabla-span-simbolo--quinigol`,
          res.data
        );
        let aa = partidosQuiniela.text();
        bb = aa.split(" ");
        for (let i = 0; i < bb.length; i++) {
          if (bb[i] == "") {
            bb.splice(i, 1);
          }
        }
        console.log(bb);

        const fecha = $(`#qa_ultResult-QGOL-fecha`, res.data);
        let fe = fecha.text();
        console.log("la long", fe.length);
        let c = fe.slice(6, 31);
        console.log(c);

        arrQuinigol.push(cc);
        arrQuinigol.push(b);
        arrQuinigol.push(bb);
        arrQuinigol.push(c);

        console.log(arrQuinigol);
        return arrQuinigol
      })
      .catch(function(err) {
        //handle error
      });

  }
}

module.exports = QuinigolAPIHandler;



