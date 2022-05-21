import * as S from "./styles";
import React, { useState } from "react";

function Table() {
  return (
    <S.Wrapper>
      <h2>React-Tab</h2>
      <S.Link href="/">
        <S.ImgTopPage src="/icons/topo-pag.svg" />
      </S.Link>
    </S.Wrapper>
  );
}

export default Table;
