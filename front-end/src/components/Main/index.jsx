import React, { useState } from "react";
import * as S from "./styles";
import Input from "../Input/index";

function Main() {
  const [stateFields, setStateFields] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorDate, setErrorDate] = useState("");
  const [errorCell, setErrorCell] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setStateFields((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log(stateFields);
      cleanError();
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (stateFields.userName.length < 3) {
      setErrorName("Campo obrigatório");
      isValid = false;
    }

    if (stateFields.userEmail.length < 1) {
      setErrorEmail("Campo Obrigatorio");
      isValid = false;
    }

    if (stateFields.userCell.length > 0 && stateFields.userCell.length < 11) {
      setErrorCell("Numero invalido");
      isValid = false;
    }

    if (stateFields.userCell.length === 0) {
      setErrorCell("Campo Obrigatorio");
      isValid = false;
    }

    if (stateFields.userDate.length < 8) {
      setErrorDate("Campo Obrigatorio");
      isValid = false;
    }

    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    const emailIsValid = regex.test(stateFields.userEmail);

    if (!errorEmail && !emailIsValid) {
      setErrorEmail("Email inválido");
      isValid = false;
    }
    return isValid;
  };

  const cleanError = () => {
    setErrorCell("");
    setErrorName("");
    setErrorEmail("");
  };

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>Cadastro</S.Title>
      <S.Form>
        <S.Label>Nome</S.Label>
        <Input
          name="userName"
          value={stateFields?.userName || ""}
          onChange={handleChange}
          error={errorName}
        />

        <S.Label>E-mail</S.Label>
        <Input
          name="userEmail"
          value={stateFields?.userEmail || ""}
          onChange={handleChange}
          error={errorEmail}
        />

        <S.Label>Nascimento</S.Label>
        <Input
          name="userDate"
          value={stateFields?.userDate || ""}
          onChange={handleChange}
          type="date"
          error={errorDate}
        />

        <S.Label>Telefone</S.Label>
        <Input
          name="userCell"
          value={stateFields?.userCell || ""}
          onChange={handleChange}
          type="number"
          error={errorCell}
        />

        <S.Button disabled={false} type="submit">
          Cadastrar
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default Main;
