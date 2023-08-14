import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API from 'services/api';

import { validateEmail, validatePassword } from 'utils/validations';
import Textinput from 'components/common/input/Textinput';
import ErrorMsg from 'components/common/input/ErrorMsg';
import Button from 'components/common/button/Button';
import { submitForm } from 'types';

import * as S from './SignupContainer.style';

const SignupContainer = () => {
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

  const submitSigup = async () => {
    const user: submitForm = signinData;
    try {
      await axios.post(`${API}/auth/signup`, user);
      navigate('/signin');
    } catch (err: any) {
      const { status, data } = err.response;
      alert(data.message);
      return status;
    }
  };

  return (
    <S.Wrapper>
      <h1>회원가입</h1>
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
          text='회원가입'
          testid='signup-button'
          onClick={submitSigup}
          disable={!emailValid || !passwordValid}
          style={{ margin: '50px 0 0 0 ' }}
        />
      )}
    </S.Wrapper>
  );
};

export default SignupContainer;
