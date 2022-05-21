import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: 37rem;
  background-image: url("/img/index-image-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* opacity: ${({ showMenu }) => (showMenu ? "0.6" : "1")}; */

  @media screen and (min-width: 744px) {
    background-image: url("/img/index-image.jpg");
    height: 28rem;
  }

  @media screen and (min-width: 1024px) {
    background-image: url("/img/index-image.jpg");
    height: 42rem;
    width: 100%;
  }
`;

export const BoxMenu = styled.div`
  width: 72%;
  justify-content: space-between;
  display: none;
  align-items: center;
  margin: auto;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

export const Link = styled.a`
  :hover {
    background-color: transparent;
  }
`;

export const BoxTitles = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  text-align: center;
  color: #fff;
  padding-top: 2.5rem;
  padding-left: 8rem;

  @media screen and (min-width: 1024px) {
    padding-top: 4.5rem;
    margin-right: 1rem;
  }
`;
export const Title = styled.label`
  font-size: 2.5rem;
  font-family: Helvetica;
  font-weight: 100;
`;

export const SubTitle = styled.label`
  font-size: 1.1rem;
  font-family: Helvetica;
  font-weight: 100;
`;

export const ImgMenuClosed = styled.img`
  width: 2rem;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ImgLogo = styled.img`
  height: 2rem;

  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ImgLogoDesktop = styled.img`
  height: 2rem;
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: ${({ showMenu }) =>
    showMenu ? "flex-end" : "space-between"};
  align-items: center;
  padding: 2rem;

  @media screen and (min-width: 744px) {
    padding: 2rem 4rem;
  }
`;
