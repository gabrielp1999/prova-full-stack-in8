import * as S from "./styles";

function MenuDesktop() {
  return (
    <S.Wrapper id="header">
      <S.List>
        <S.ItemList>
          <S.Link href="#lista">lista</S.Link>
        </S.ItemList>

        <S.ItemList>
          <S.Link href="#sobre-mim">sobre mim</S.Link>
        </S.ItemList>

        <S.ItemList>
          <S.Link href="#cadastro">cadastro</S.Link>
        </S.ItemList>
      </S.List>
    </S.Wrapper>
  );
}

export default MenuDesktop;
