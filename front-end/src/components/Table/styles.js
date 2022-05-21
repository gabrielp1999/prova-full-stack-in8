import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 25rem;
  background: #fff;
  text-align: center;
  padding: 2rem 0 0 0;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const Link = styled.a`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ImgTopPage = styled.img`
  height: 3rem;
  width: 3rem;
  margin: auto;
`;
