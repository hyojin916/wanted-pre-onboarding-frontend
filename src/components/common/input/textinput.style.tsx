import styled from 'styled-components';

export const InputWrapper = styled.div`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const InputErr = styled.span`
  min-height: 60px;
  color: #f5424b;
  font-size: 12px;
`;
