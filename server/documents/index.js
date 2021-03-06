//import imgDecimo from "../../client/src/images/decimoNavidad.jpg";
module.exports = (num1, num2, num3, num4, num5, { serie, fraccion }) => {
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
            width: 95%;
            z-index: -100;
        }
        .number {
            position: absolute;
            top: -9%;
            left: 34%;
            font-size: 20vh;
        }
        .number2 {
            position: absolute;
            top: -9%;
            left: 42%;
            font-size: 20vh;
        }
        .number3 {
            position: absolute;
            top: -9%;
            left: 50%;
            font-size: 20vh;
        }
        .number4 {
            position: absolute;
            top: -9%;
            left: 58%;
            font-size: 20vh;
        }
        .number5 {
            position: absolute;
            top: -9%;
            left: 66%;
            font-size: 20vh;
        }
        .serie {
            position: absolute;
            top: 4%;
            left: 81%;
            font-size: 15vh;
        }
        .fraccion{
            position: absolute;
            top: 36%;
            left: 83.5%;
            font-size: 7vh;
        }
        .logo{
              width: 20%;
        }
    </style>
</head>

<body>
    <div class="container">
        <img src="https://res.cloudinary.com/sandratejedor/image/upload/v1576748193/webmad1019/decimoNavidad_pg5rwt.png"
            alt="imagen decimo2"></img>
        <p class="number">${num1}</p>
         <p class="number2">${num2}</p>
        <p class="number3">${num3}</p>
        <p class="number4">${num4}</p>
        <p class="number5">${num5}</p> 
        <p class="serie">${serie}ª</p>
        <p class="fraccion">${fraccion}ª</p>
    </div>
    <br>
    <br>
    <br>
    <div class="container2">
        <h5>Atentamente:</h5>
        <img class="logo" src="https://res.cloudinary.com/sandratejedor/image/upload/v1576758210/webmad1019/Layer_ynbyza.png" alt="logo" >
        <a href="https://elcalvodelaloteria.herokuapp.com/"></a>
    </div>

</body>

</html>
               
         `;
};
