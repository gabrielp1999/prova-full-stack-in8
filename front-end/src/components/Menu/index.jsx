import * as S from "./styles";

function Menu({ toogleMenu, showMenu }) {
  return (
    <S.Wrapper>
      <S.ImgMenu
        src="/icons/hamburguer-aberto0.svg"
        onClick={() => toogleMenu()}
      />
      <S.NavBar>
        <S.List>
          <S.ItemList>lista</S.ItemList>
          <S.ItemList>sobre mim</S.ItemList>
          <S.ItemList>cadastro</S.ItemList>
        </S.List>
      </S.NavBar>
    </S.Wrapper>
  );
}
export default Menu;
