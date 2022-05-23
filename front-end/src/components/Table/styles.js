import styled from "styled-components";

export const Wrapper = styled.div`
  height: 25rem;
  background: #fff;
  text-align: center;
  padding: 2rem;

  .tabs {
    .iEOHyj .tabs ul {
      width: 79vw;
    }
    ul {
      display: flex;
      margin: 0;
      border-color: #29abe2;

      li {
        width: 4rem;
        height: 1.5rem;
        border-radius: 0;
        font-size: 1.2rem;
        border-color: #aaa;
        color: #012d51;
        margin-right: 0.5rem;
        border-bottom: none;
      }
      .react-tabs__tab--selected {
        border-color: #29abe2;
      }
      .react-tabs__tab-list {
        border: none;
      }
    }

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
