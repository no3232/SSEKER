import Router from 'next/router';
import { SyntheticEvent } from 'react';

import TitleText from '../../common/TitleText';
import MainButton from '../../common/MainButton';
import InputStyle from "../../component/InputStyle";

const LoginMainPage = () => {
  const route = Router
  
  const moveToSignup = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push('/signup');
}

  return (
    <div>
      <TitleText>Login Page</TitleText>
      <form action="">
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
        <MainButton type="submit">로그인</MainButton>
      </form>
      <p>아직 회원이 아니십니까? <a href='' onClick={moveToSignup}>회원가입</a></p>
    </div>
  );
};

export default LoginMainPage;
