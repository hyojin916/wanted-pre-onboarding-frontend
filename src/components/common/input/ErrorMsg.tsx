import * as S from './Textinput.style';

interface IProps {
  text?: string | undefined;
}

const ErrorMsg = ({ text }: IProps) => {
  return <S.InputErr>{text}</S.InputErr>;
};

export default ErrorMsg;
