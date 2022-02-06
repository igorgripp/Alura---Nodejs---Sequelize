const express = require("express");

const app = express();

const routes = require("./routes");
const port = 3000;

routes(app);

app.listen(port, () => console.log(`listening on port: ${port}`));

module.exports = app;
