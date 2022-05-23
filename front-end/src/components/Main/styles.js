import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 32rem;
  background: #29abe2;
  text-align: center;
  padding: 2rem 0 0 0;

  @media screen and (min-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.label`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 45%;
  }
`;

export const Label = styled.label`
  display: flex;
  margin-top: 0.5rem;
  flex-direction: row;
  font-size: 1.1rem;
  color: #fff;
`;

export const Button = styled.button`
  height: 4rem;
  width: 100%;
  background-color: #012d51;
  margin: 0 auto;
  margin-top: 2.3rem;
  border: none;
  font-size: 2.5rem;
  color: #29abe2;

  :hover {
    background-color: rgba(1, 45, 81, 0.8);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 70%;
  }

  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;
