const express = require("express");
const bodyParser = require("body-parser");

const personRouter = require("./routers/person/index");

const app = express();
app.use(
  bodyParser.urlencoded({
    exteded: true,
  })
);

app.use(bodyParser.json());
app.use("/pessoa", personRouter);

app.get("/", (req, resp) => {
  resp.status(200).send("API funcionando");
});

app.listen(3001, () => {
  console.log(`Executando api na porta 3001.`);
});
