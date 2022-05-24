import styled from "styled-components";

export const Wrapper = styled.div`
  height: 11rem;
  width: 100vw;
  background-size: cover;
  background-image: url("/img/rodape-mobile.jpg");

  @media screen and (min-width: 768px) {
    height: 13rem;
  }
  @media screen and (min-width: 1024px) {
    background-image: url("/img/rodape-desktop.jpg");
    width: 100%;
    height: 12rem;
  }
`;

export const Footer = styled.footer`
  width: 70%;
  text-align: center;
  margin: 0 auto;
  padding-top: 1rem;
`;

export const Description = styled.h2`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 100;
`;
