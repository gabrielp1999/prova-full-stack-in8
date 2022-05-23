import * as S from "./styles";
function ItemUser({ personData }) {
  return (
    <S.Wrapper>
      <S.Row>
        <S.FieldName>NOME</S.FieldName>
        <S.FieldValue>{personData.name}</S.FieldValue>
      </S.Row>
      <S.Row>
        <S.FieldName>E-MAIL</S.FieldName>
        <S.FieldValue>{personData.email}</S.FieldValue>
      </S.Row>
      <S.Row>
        <S.FieldName>NASC.</S.FieldName>
        <S.FieldValue>{personData.birthday}</S.FieldValue>
      </S.Row>
      <S.Row>
        <S.FieldName>TEL.</S.FieldName>
        <S.FieldValue>{personData.phone}</S.FieldValue>
      </S.Row>
    </S.Wrapper>
  );
}

export default ItemUser;
