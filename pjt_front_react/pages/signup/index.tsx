import Router from "next/router";
import { SyntheticEvent, useContext, useState } from "react";
import styled from "styled-components";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import axios from "axios";
import { UserInfoContext } from "../../modules/context/UserInfoContext";
import { KeyContext } from "../../modules/context/KeyContext";
import { setKeyCookies } from '../../modules/cookie/keyCookies';

const SignupPage = () => {
  const route = Router;
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");
  const ctxUserinfo = useContext(UserInfoContext);
  const ctxKeyinfo = useContext(KeyContext);

  const moveToComplete = async (event: SyntheticEvent) => {
    event.preventDefault();
    const getKey = await axios({
      method: "POST",
      url: "https://ssekerapi.site/dj-accounts/signup/",
      data: {
        username: signupEmail,
        password1: signupPassword,
        password2: signupPasswordConfirm,
      },
    })
    .then((response) => {
      if (response.status === 201){
        setKeyCookies("key", response.data.key)
        return response.status;
      }
      return alert("이메일/비밀번호를 확인 해 주세요!")
    })
    .catch((err) => {
      console.log(err.response);
      return alert("이메일/비밀번호를 확인 해 주세요!")
    });
      
      console.log(getKey)
      if (getKey === 201) {

        const getUserInfo = await axios({
          method: "GET",
          url: `https://ssekerapi.site/accounts/${signupEmail}`,
        })
          .then((response) => {
            localStorage.setItem("userinfo", JSON.stringify(response.data))
            route.push("/signup/ssafyinfo");
          })
          .catch((err) => {
            console.log(err.response);
            return;
          });
      }
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
        <TitleText>SignUp Page</TitleText>
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
