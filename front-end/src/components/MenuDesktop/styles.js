import styled from "styled-components";

export const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-start;
  color: #fff;
  font-size: 1.2rem;
  font-family: RobotoL;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const List = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 2rem;
  padding: 0;
`;

export const ItemList = styled.li`
  margin: 0 1rem;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;

  :hover {
    color: rgba(250, 250, 250, 0.8);
  }
`;
