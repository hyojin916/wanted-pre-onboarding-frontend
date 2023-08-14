import React from 'react';
import Flex from '../container/flex';
import * as S from './Textinput.style';

interface IProps {
  testid: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  [key: string]: unknown;
}

const Textinput = ({
  testid,
  name,
  onChange,
  type = 'text',
  ...rest
}: IProps) => {
  return (
    <S.InputWrapper {...rest}>
      <Flex>
        <S.Label>{name}</S.Label>
        <S.Input
          data-testid={testid}
          type={type}
          name={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Flex>
    </S.InputWrapper>
  );
};

export default Textinput;
