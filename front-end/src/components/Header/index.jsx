import React, { useState } from "react";
import * as S from "./styles";
import Menu from "../Menu";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <S.Wrapper showMenu={showMenu}>
      <S.ContainerMenu showMenu={showMenu}>
        {showMenu && <Menu toogleMenu={toogleMenu} />}
        {!showMenu && (
          <S.ImgMenuClosed
            src="/icons/hamburguer.svg"
            onClick={() => toogleMenu()}
          />
        )}
        <S.ImgLogo src="/logo-in8-dev.svg" />
      </S.ContainerMenu>

      <S.BoxTitles>
        <S.Title>ESTÁGIO</S.Title>
        <S.SubTitle>PROVA DE SELEÇÃO</S.SubTitle>
      </S.BoxTitles>
    </S.Wrapper>
  );
}

export default Header;
