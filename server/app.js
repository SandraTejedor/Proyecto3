require("dotenv").config();

const express = require("express");
const app = express();

require("./configs/mongoose.config");
require("./configs/debugger.config");
require("./configs/middlewares.config")(app);
require("./configs/view-engine.config")(app);
require("./configs/locals.config")(app);
require("./configs/session.config")(app);

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/results", require("./routes/results.routes"));
app.use("/api/nacional", require("./routes/nacional.routes"));
app.use("/api/juegos", require("./routes/juegos.routes"));


//copiar aqui la ruta a heroku


module.exports = app;
