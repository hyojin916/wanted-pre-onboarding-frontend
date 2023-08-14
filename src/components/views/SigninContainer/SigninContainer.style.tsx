import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 500px;
  margin: auto;
  margin-top: 10%;
`;

export const SignupLink = styled(Link)`
  display: block;
  color: gray;
  text-align: right;
  margin-top: 12px;

  &:visited {
    color: gray;
  }
`;
