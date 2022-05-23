import * as S from "./styles";

function Menu({ toogleMenu }) {
  return (
    <S.Wrapper>
      <S.ImgMenu
        src="/icons/hamburguer-aberto0.svg"
        onClick={() => toogleMenu()}
      />
      <S.NavBar>
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
      </S.NavBar>
    </S.Wrapper>
  );
}
export default Menu;
