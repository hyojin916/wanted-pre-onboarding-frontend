import * as S from './Button.style';

interface IProps {
  text: string;
  type?: TButton;
  onClick?: () => void;
  disable?: boolean;
  testid?: string;
  [key: string]: unknown;
}

type TButton = 'button' | 'submit' | 'reset' | undefined;

const Button = ({ text, type, onClick, disable, testid, ...rest }: IProps) => {
  return (
    <S.Button
      type={type ? type : 'button'}
      data-testid={testid}
      onClick={(e: any) => {
        e.preventDefault();
        onClick?.();
      }}
      disabled={disable}
      {...rest}
    >
      {text}
    </S.Button>
  );
};

export default Button;
