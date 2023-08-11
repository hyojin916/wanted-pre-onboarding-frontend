import { JSX } from 'react';
import * as S from './flex.style';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  props?: any;
};

const Flex = ({ children, props }: Props) => {
  return <S.FlexBoxDiv {...props}>{children}</S.FlexBoxDiv>;
};

export default Flex;
