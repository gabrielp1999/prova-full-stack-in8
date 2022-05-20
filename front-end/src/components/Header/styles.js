import styled from "styled-components";

export const Wrapper = styled.header`
  width: 100vw;
  height: 37rem;
  background-image: url("/img/index-image-mobile.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  /* opacity: ${({ showMenu }) => (showMenu ? "0.6" : "1")}; */
`;

export const BoxTitles = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #fff;
  padding-top: 2.5rem;
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
`;

export const ImgLogo = styled.img`
  height: 2rem;
`;

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: ${({ showMenu }) =>
    showMenu ? "flex-end" : "space-between"};
  align-items: center;
  padding: 2rem;
`;
