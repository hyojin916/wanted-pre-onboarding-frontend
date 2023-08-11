import React from 'react';
import Flex from '../container/flex';
import * as S from './Textinput.style';

interface IProps {
  testid: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Textinput = ({ testid, name, onChange }: IProps) => {
  return (
    <S.InputWrapper>
      <Flex>
        {/* testid, id, name, validation */}
        <label>{name}</label>
        <S.Input
          data-testid={testid}
          type='text'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
        />
      </Flex>
    </S.InputWrapper>
  );
};

export default Textinput;
