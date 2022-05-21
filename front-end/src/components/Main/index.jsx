import React, { useState } from "react";
import * as S from "./styles";

function Main() {
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>Cadastro</S.Title>
      <S.Form>
        <S.Label>Nome</S.Label>
        <S.Input type="text" name="userName" onChange={handleChange} />

        <S.Label>E-mail</S.Label>
        <S.Input type="email" name="userEmail" onChange={handleChange} />

        <S.Label>Nascimento</S.Label>
        <S.Input type="date" name="userNascimento" onChange={handleChange} />

        <S.Label>Telefone</S.Label>
        <S.Input name="userTelefone" type="number" onChange={handleChange} />

        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default Main;
