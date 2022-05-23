const express = require("express");
const pessoa = require("./routers/pessoa/index");

const app = express();

// app.use("/pessoa", pessoa);

app.get("/", (req, resp) => {
  resp.status(200).send("funcionando");
});

app.listen(3001, () => {
  console.log(`Executando api na porta 3001.`);
});
