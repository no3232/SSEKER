import Router from 'next/router';
import { SyntheticEvent } from 'react';
import styled from 'styled-components';


import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";


const SignupPage = () => {
  const route = Router;

  const moveToSsafyInfo = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push('/signup/ssafyinfo');
  }

  return (
    <>
      <TitleText>Signup Page</TitleText>
      <InputForm action='' onSubmit={moveToSsafyInfo}>
        <InputStyle
          name='email'
          type='email'
          placeholder='example@ssafy.com'
          labelText='이메일'
        />
        <InputStyle
          name='password'
          type='password'
          placeholder=''
          labelText='비밀번호'
        />
        <InputStyle
          name='passwordConfirm'
          type='password'
          placeholder=''
          labelText='비밀번호 확인'
        />
        <MainButton type='submit'>회원가입</MainButton>
      </InputForm>
    </>
  );
};

export default SignupPage;

const InputForm = styled.form`
  width: 90%;
`