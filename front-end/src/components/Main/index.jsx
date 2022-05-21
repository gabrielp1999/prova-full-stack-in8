import React, { useState } from "react";
import * as S from "./styles";

function Main() {
  return (
    <S.Wrapper>
      <S.Title>Cadastro</S.Title>
      <S.Form>
        <S.Label>Nome</S.Label>
        <S.Input />
        <S.Label>E-mail</S.Label>
        <S.Input />
        <S.Label>Nascimento</S.Label>
        <S.Input />
        <S.Label>Telefone</S.Label>
        <S.Input />

        <S.Button>Cadastrar</S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default Main;
