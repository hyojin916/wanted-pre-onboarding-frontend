import styled from 'styled-components';

export const Warpper = styled.div`
  margin: auto;
  width: 50%;
  margin-top: 5%;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  width: 300px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  border: 1px solid gray;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  text-align: end;
`;
