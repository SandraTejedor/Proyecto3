const rp = require("request-promise");
const $ = require("cheerio");
const url = "https://www.loteriasyapuestas.es/es/resultados";

rp(url)
  .then(function(html) {
    //success!
    //console.log($("big > a", html).length);
    //console.log($("big > a", html));
    console.log("los resultados",
      $(
        ".r-ultimos-resultados > .c-ultimos-resultados-listado > .c-ultimo-resultado--euromillones > .c-ultimo-resultado__ganadores",
        html
      )
    );

  })
  .catch(function(err) {
    //handle error
  });
