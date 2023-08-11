import * as S from './Button.style';

interface IProps {
  disable?: boolean;
  testid?: string;
  [key: string]: unknown;
}

const Button = ({ disable, testid, ...rest }: IProps) => {
  return (
    <S.Button data-testid={testid} disabled={disable} {...rest}>
      버튼~
    </S.Button>
  );
};

export default Button;
