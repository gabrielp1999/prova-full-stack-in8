import React, { forwardRef } from "react";
import * as S from "./styles";

function Input(props, ref) {
  return (
    <S.Wrapper>
      <S.Field {...props} />
      {props.error && <S.Error>{props.error}</S.Error>}
    </S.Wrapper>
  );
}

export default forwardRef(Input);
