import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from 'services/api';

import { validateEmail, validatePassword } from 'utils/validations';
import Textinput from 'components/common/input/Textinput';
import ErrorMsg from 'components/common/input/ErrorMsg';
import Button from 'components/common/button/Button';
import { submitForm } from 'types';

import * as S from './SigninContainer.style';

const SigninContainer = () => {
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [signinData, setSigninDate] = useState<submitForm>({
    email: '',
    password: '',
  });
  const [userActive, setUserActive] = useState<boolean>(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const validation = validateEmail(value);
    setEmailValid(validation);
    setSigninDate({ ...signinData, [name]: value });
    setUserActive(true);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const validation = validatePassword(value);
    setPasswordValid(validation);
    setSigninDate({ ...signinData, [name]: value });
    setUserActive(true);
  };

  const submitSigin = async () => {
    const user: submitForm = signinData;
    try {
      const response = await axios.post(`${API}/auth/signin`, user);
      const { access_token } = response.data;
      localStorage.setItem('access_token', access_token);
      navigate('/todo');
    } catch (err: any) {
      const { status, data } = err.response;
      alert(data.message);
      return status;
    }
  };

  return (
    <S.Wrapper>
      <h1>로그인</h1>
      <Textinput testid='email-input' name='email' onChange={handleEmail} />
      <ErrorMsg text={!emailValid ? '올바른 이메일을 입력해주세요.' : ''} />
      <br />
      <Textinput
        testid='password-input'
        name='password'
        onChange={handlePassword}
        type='password'
      />
      <ErrorMsg
        text={!passwordValid ? '올바른 비밀번호 형식을 입력해주세요.' : ''}
      />
      {userActive && (
        <Button
          text='로그인'
          testid='signin-button'
          onClick={submitSigin}
          type='submit'
          disable={!emailValid || !passwordValid}
          style={{ margin: '50px 0 0 0 ' }}
        />
      )}

      <S.SignupLink to={'/signup'}>회원가입 하러가기</S.SignupLink>
    </S.Wrapper>
  );
};

export default SigninContainer;
