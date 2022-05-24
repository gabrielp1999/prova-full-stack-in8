import styled from "styled-components";

export const Wrapper = styled.div`
  width: 45%;
  height: 13.4rem;
  background: #29abe2;
  padding: 2.1rem;
  position: absolute;
  top: 0;
  left: 0;
  @media screen and (min-width: 768px) {
    padding: 2.1rem 4rem;
  }
`;

export const ImgMenu = styled.img`
  width: 2rem;
`;

export const NavBar = styled.nav`
  height: 50%;
  display: flex;
  justify-content: flex-start;
  color: #fff;
  font-size: 1.2rem;
  font-family: RobotoL;
`;

export const List = styled.ul`
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
`;

export const ItemList = styled.li`
  margin: 1rem 0;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
`;
