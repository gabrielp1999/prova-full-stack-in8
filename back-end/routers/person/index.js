const express = require("express");
const router = express.Router();

let people = [
  {
    name: "Gabriel",
    email: "gabriel.gsm2017@gmail.com",
    birthday: new Date(1999, 9, 26),
    phone: "31992024080",
  },
  {
    name: "Samuel",
    email: "samuel.rps17@gmail.com",
    birthday: new Date(1994, 2, 6),
    phone: "11987677765",
  },
];

router.get("/", (req, resp) => {
  resp.status(200).send(people);
});

router.post("/", (req, resp) => {
  const person = req.body;

  if (!person.name || person.name.length < 3) {
    resp.status(400).send({
      message: "Nome obrigatório",
    });
    return;
  }

  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  const emailIsValid = regex.test(person.email);

  if (!person.email || !emailIsValid) {
    resp.status(400).send({
      message: "Email inválido",
    });
    return;
  }

  if (!person.birthday || person.birthday.length < 10) {
    resp.status(400).send({
      message: "Data Obrigatória",
    });
    return;
  }

  if (!person.phone || person.phone.length !== 11) {
    resp.status(400).send({
      message: "Número Inválido",
    });
    return;
  }

  people.push(person);

  resp.status(200).send(people);
});

module.exports = router;
