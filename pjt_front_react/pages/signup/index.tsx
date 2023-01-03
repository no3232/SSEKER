import Router from "next/router";
import { SyntheticEvent, useState } from "react";
import styled from "styled-components";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import axios from "axios";

const SignupPage = () => {
  const route = Router;
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");

  const moveToComplete = async (event: SyntheticEvent) => {
    event.preventDefault();
    console.log({ signupEmail, signupPassword, signupPasswordConfirm });
    await axios({
      method: "POST",
      url: "https://ssekerapi.site/dj-accounts/signup/",
      data: {
        username: signupEmail,
        password1: signupPassword,
        password2: signupPasswordConfirm,
      },
    }).then((response) => {
      console.log(response)
      console.log(response.data)
      route.push("/signup/complete");
    })
    .catch(err => {
      console.log(err.response)
      return 
    });
  };

  const getSignupEmail = (email: string) => {
    setSignupEmail(email);
  };

  const getSignupPassword = (password: string) => {
    setSignupPassword(password);
  };

  const getSignupPasswordConfirm = (password: string) => {
    setSignupPasswordConfirm(password);
  };

  return (
    <SignupBox>
      <TitleBox>
        <TitleText>Login Page</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToComplete}>
        <InputStyle
          name='email'
          type='email'
          placeholder='example@ssafy.com'
          labelText='이메일'
          getInputValue={getSignupEmail}
        />
        <InputStyle
          name='password'
          type='password'
          placeholder='대문자, 특수문자 포함, 8글자 이상'
          labelText='비밀번호'
          getInputValue={getSignupPassword}
        />
        <InputStyle
          name='passwordConfirm'
          type='password'
          placeholder='위 비밀번호와 같은 비밀번호를 입력해주세요'
          labelText='비밀번호 확인'
          getInputValue={getSignupPasswordConfirm}
        />
        <MainButton type='submit'>회원가입</MainButton>
      </FormBox>
    </SignupBox>
  );
};

export default SignupPage;

const SignupBox = styled.div`
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
