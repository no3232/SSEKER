import Router from "next/router";
import { SyntheticEvent, useState } from "react";
import styled from "styled-components";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import SubText from "../../common/SubText";

const LoginMainPage = () => {
  const route = Router;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const getLoginEmail = (email: string) => {
    setLoginEmail(email);
  }

  const getLoginPassword = (password: string) => {
    setLoginPassword(password);
  }
  

  const moveToAfter = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push("/login/after");
  };

  const moveToSignup = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push("/signup");
  };

  return (
    <LoginBox>
      <TitleBox>
        <TitleText>Login Page</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToAfter}>
        <InputStyle
          name='email'
          type='email'
          placeholder='example@ssafy.com'
          labelText='이메일'
          getInputValue={getLoginEmail}
        />
        <InputStyle
          name='password'
          type='password'
          placeholder='대문자, 특수문자 포함, 8글자 이상'
          labelText='비밀번호'
          getInputValue={getLoginPassword}
        />
        <MainButton type='submit'>로그인</MainButton>
        <SubText>
          아직 회원이 아니십니까?{" "}
          <a href='' onClick={moveToSignup}>
            회원가입
          </a>
        </SubText>
      </FormBox>
    </LoginBox>
  );
};

export default LoginMainPage;

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TitleBox = styled.div`
  margin-top: auto;
  margin-left: 15px;
  margin-bottom: 24px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
  margin-bottom: auto;
`;