//import imgDecimo from "../../client/src/images/decimoNavidad.jpg";
module.exports = (num1, num2, num3, num4, num5, num6, reintegro) => {
  return `
        <!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>PDF Result Template</title>
    <style>
        .container {
            position: relative;
        }
        img {
            width: 70%;
            z-index: -100;
        }
       .number {
            position: absolute;
            top: 32.5%;
            left: 18%;
            font-size: 5vh;
        }
        .number2 {
            position: absolute;
            top: 32.5%;
            left: 25%;
            font-size: 5vh;
        }
        .number3 {
           position: absolute;
             top: 32.5%;
            left: 32%;
            font-size: 5vh;
        }
        .number4 {
           position: absolute;
            top: 32.5%;
            left: 39%;
            font-size: 5vh;
        }
        .number5 {
          position: absolute;
            top: 32.5%;
            left: 46%;
            font-size: 5vh;
        } 
        .number6 {
          position: absolute;
             top: 32.5%;
            left: 53%;
            font-size: 5vh;
        }
        .reintegro {
            position: absolute;
            top: 36.5%;
            left: 47%;
            font-size: 7vh;
        }
      
        .logo{
              width: 20%;
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="https://res.cloudinary.com/sandratejedor/image/upload/v1576766036/webmad1019/boleto-primitiva_znk7em.png"
            alt="imagen boleto"></img>
        <p class="number">${num1}</p>
         <p class="number2">${num2}</p>
        <p class="number3">${num3}</p>
        <p class="number4">${num4}</p>
        <p class="number5">${num5}</p> 
        <p class="number6">${num6}</p>
        <p class="reintegro">${reintegro}</p>
    </div>
    <br>
    <div class="container2">
        <h5>Atentamente:</h5>
        <img class="logo"
            src="https://res.cloudinary.com/sandratejedor/image/upload/v1576758210/webmad1019/Layer_ynbyza.png" alt="logo">
        <a href="https://elcalvodelaloteria.herokuapp.com/"></a>
    </div>

</body>

</html>
               
         `;
};
