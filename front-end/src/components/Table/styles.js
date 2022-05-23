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

  .tabs {
    @media screen and (min-width: 764px) {
      display: none;
    }
  }
`;

export const Title = styled.h2`
  color: #29abe2;
  margin: 2rem auto;
  font-size: 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: auto;

  @media screen and (max-width: 764px) {
    display: none;
  }

  .headerTable {
    color: #012d51;
    border-top: none;
  }
  .borderLeft {
    border-left: none;
  }

  .borderRight {
    border-right: none;
  }
`;
export const TableRow = styled.tr`
  border: 1px solid;
  border-collapse: collapse;
`;

export const TableCollum = styled.td`
  border: 1px solid;
  border-color: #29abe2;
  border-top: none;
  padding: 0.7rem;
  border-collapse: collapse;
  font-size: 1.1rem;
  color: #808080;
`;

export const Link = styled.a`
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ImgTopPage = styled.img`
  height: 3rem;
  width: 3rem;
  position: absolute;
  padding-left: 22rem;
  margin-top: -2.5rem;
`;
