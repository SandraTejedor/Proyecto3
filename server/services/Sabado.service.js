const axios = require("axios");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

class SabadoAPIHandler {
  getSabado() {
    return axios
      .get(url)
      .then(res => {
        let arrNumeros = [];
        let arrReintegros = [];
        let arrSabado = [];
        //numeros
        const numeros = $(
          ".c-resultado-sorteo__numero > .c-resultado-sorteo__numero-enlace",
          res.data
        );

        //let c= primero.text().slice(8,13) //primer numero Jueves
        //let d= primero.text().slice(21,26) //segundo numero Jueves
        let prim = numeros.text().slice(34, 39); //primer numero Sabado
        let seg = numeros.text().slice(47, 52); //segundo numero Sabado
        //let ter= primero.text().slice(60,65) //tercero numero Sabado
        arrNumeros.push(prim);
        arrNumeros.push(seg);
        //console.log(arrNumeros)

        let array = [];
        //reintegros
        for (let i = 1; i < 4; i++) {
          const reintegros = $(
            `#qa_resultadoSorteo-reintegro-LNACS-${i}`,
            res.data
          );
          array.push(reintegros.text());
        }
        for (let i = 0; i < array.length; i++) {
          //console.log(array[i])
          let nu = array[i].slice(10, 11);
          arrReintegros.push(nu);
          //console.log(nu)
        }
        //console.log(arrReintegros)

        arrSabado.push(arrNumeros);
        arrSabado.push(arrReintegros);

        console.log(arrSabado);
        return arrSabado
      })
      .catch(function(err) {
        //handle error
      });
  }
}

module.exports = SabadoAPIHandler;
