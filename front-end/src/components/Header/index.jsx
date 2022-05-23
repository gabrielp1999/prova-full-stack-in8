import React, { useState } from "react";
import * as S from "./styles";
import Menu from "../Menu";
import MenuDesktop from "../MenuDesktop";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const toogleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <S.Wrapper showMenu={showMenu} id="header">
      <S.ContainerMenu showMenu={showMenu}>
        {showMenu && <Menu toogleMenu={toogleMenu} />}
        {!showMenu && (
          <S.ImgMenuClosed
            src="/icons/hamburguer.svg"
            onClick={() => toogleMenu()}
          />
        )}
        <S.Link target="_blank" href="https://in8.com.br/">
          <S.ImgLogo src="/logo-in8-dev.svg" />
        </S.Link>

        <S.BoxMenu>
          <S.Link target="_blank" href="https://in8.com.br/">
            <S.ImgLogoDesktop src="/logo-in8-dev.svg" />
          </S.Link>

          <MenuDesktop />
        </S.BoxMenu>
      </S.ContainerMenu>

      <S.BoxTitles>
        <S.Title>ESTÁGIO</S.Title>
        <S.SubTitle>PROVA DE SELEÇÃO</S.SubTitle>
      </S.BoxTitles>
    </S.Wrapper>
  );
}

export default Header;
