import { useState } from 'react';
import * as S from './SigninContainer.style';

import Textinput from 'components/common/input/Textinput';
import ErrorMsg from 'components/common/input/ErrorMsg';
import { validateEmail, validatePassword } from 'utils/validations';
import Button from 'components/common/button/Button';

const SigninContainer = () => {
  const [emailValid, setEmailValid] = useState<boolean>(true);
  const [passwordValid, setPasswordValid] = useState<boolean>(true);
  const [userActive, setUserActive] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validation = validateEmail(e.target.value);
    console.log('validation', validation);
    setEmailValid(validation);
    setUserActive(true);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validation = validatePassword(e.target.value);
    setPasswordValid(validation);
    console.log('validation', validation);
    setUserActive(true);
  };

  return (
    <S.Wrapper>
      <h1>로그인 페이지입니다.</h1>
      <Textinput testid='email-input' name='email' onChange={handleEmail} />
      <ErrorMsg text={!emailValid ? '올바른 이메일을 입력해주세요.' : ''} />
      <Textinput
        testid='password-input'
        name='password'
        onChange={handlePassword}
      />
      <ErrorMsg
        text={!passwordValid ? '올바른 비밀번호 형식을 입력해주세요.' : ''}
      />
      {userActive && (
        <Button
          testid='signup-button'
          disable={!emailValid || !passwordValid}
          style={{ margin: '50px 0 0 0 ' }}
        />
      )}
    </S.Wrapper>
  );
};

export default SigninContainer;
