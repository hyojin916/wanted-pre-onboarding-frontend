import styled from 'styled-components';

export const TodoWrapper = styled.li`
  background-color: #c9c9f5;
  border-radius: 20px;
  list-style-type: none;
  padding: 10px;
  font-size: 20px;
  margin: 10px 0;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid gray;
  border-radius: 5px;

  &:focus {
    outline: none;
  }
`;

export const InputCheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: 1px solid gray;
  padding: 10px 20px;
  margin-left: 10px;
  border-radius: 5px;
  text-align: end;
  &:hover {
    cursor: pointer;
  }
`;
