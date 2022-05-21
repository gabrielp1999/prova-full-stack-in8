import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 28rem;
  background: #29abe2;
  text-align: center;
  padding: 2rem 0 0 0;
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
`;

export const Label = styled.label`
  display: flex;
  margin-top: 0.5rem;
  flex-direction: row;
  font-size: 1.1rem;
  color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  height: 1.5rem;
  background: #29abe2;
  color: #fff;
  font-size: 1.2rem;
  border-top: 0.1rem;
  border-left: 0.1rem;
  border-right: 0.1rem;
  border-color: #fff;

  &:focus {
    transition: 1500ms;
    outline: 0;
    border-color: #fff;
  }
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
`;
