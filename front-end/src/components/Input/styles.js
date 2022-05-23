import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
`;

export const Field = styled.input`
  width: 100%;
  height: 1.2rem;
  padding: 0.1rem 0;
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
    border-color: ${({ error }) => (error ? "#f00" : "#012d51")};
  }

  &:hover {
    border-right: 0.1rem red;
    border-top: 0.1rem red;
  }
`;

export const Error = styled.span`
  color: #f00;
  font-size: 0.8rem;
`;
