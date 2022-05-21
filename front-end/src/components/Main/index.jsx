import React, { useState } from "react";
import * as S from "./styles";

function Main() {
  const [userData, setUserData] = useState({});
  const [valueFields, setValueFields] = useState();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValueFields("");
    console.log(userData);
  };
  return (
    <S.Wrapper onSubmit={onSubmit}>
      <S.Title>Cadastro</S.Title>
      <S.Form>
        <S.Label>Nome</S.Label>
        <S.Input value={valueFields} name="userName" onChange={handleChange} />

        <S.Label>E-mail</S.Label>
        <S.Input value={valueFields} name="userEmail" onChange={handleChange} />

        <S.Label>Nascimento</S.Label>
        <S.Input
          value={valueFields}
          type="date"
          name="userNascimento"
          onChange={handleChange}
        />

        <S.Label>Telefone</S.Label>
        <S.Input
          value={valueFields}
          name="userTelefone"
          onChange={handleChange}
        />

        <S.Button type="submit">Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default Main;
