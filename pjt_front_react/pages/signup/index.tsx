import Router from "next/router";
import { SyntheticEvent } from "react";
import styled from "styled-components";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";

const SignupPage = () => {
  const route = Router;

  const moveToComplete = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push("/signup/complete");
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
          />
          <InputStyle
            name='password'
            type='password'
            placeholder='대문자, 특수문자 포함, 8글자 이상'
            labelText='비밀번호'
          />
          <InputStyle
          name='passwordConfirm'
          type='password'
          placeholder='위 비밀번호와 같은 비밀번호를 입력해주세요'
          labelText='비밀번호 확인'
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