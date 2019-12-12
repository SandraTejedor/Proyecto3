const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class QuinielaAPIHandler {
  getQuiniela() {
    return axios
      .get(url)
      .then(res => {
        let b = [];
        let bb = [];
        let cc = [];
        let arrQuiniela = [];
        //los partidos
        for (let i = 1; i < 16; i++) {
          const partidos = $(`#qa_ultResult-LAQU-partido${i}`, res.data);
          cc.push(partidos.text());
        }
        //console.log(cc);

        //resultado
        const resultado = $(
          ".c-ultimo-resultado__tabla-span-resultado--quiniela",
          res.data
        );

        let a = resultado.text();
        b = a.split(" ");
        for (let i = 0; i < b.length; i++) {
          if (b[i] == "") {
            b.splice(i, 1);
          }
        }
        //console.log(b);

        //Resultado quiniela
        const partidosQuiniela = $(
          `.c-ultimo-resultado__tabla-span-simbolo--quiniela `,
          res.data
        );
        let aa = partidosQuiniela.text();
        bb = aa.split(" ");
        for (let i = 0; i < bb.length; i++) {
          if (bb[i] == "") {
            bb.splice(i, 1);
          }
        }
        //console.log(bb);
        const fecha = $(`#qa_ultResult-LAQU-fecha `, res.data);
        let fe = fecha.text();
        console.log("la long", fe.length);
        let c = fe.slice(6, 31);
        console.log(c);
        arrQuiniela.push(cc);
        arrQuiniela.push(b);
        arrQuiniela.push(bb);
        arrQuiniela.push(c);

        //console.log(arrQuiniela);
        return arrQuiniela;
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = QuinielaAPIHandler;
