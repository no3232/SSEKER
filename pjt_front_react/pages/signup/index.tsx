import Router from "next/router";
import { SyntheticEvent, useContext, useState, useEffect } from "react";
import styled from "styled-components";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import axios from "axios";
import { KeyContext } from "../../modules/context/KeyContext";
import { setKeyCookies, getKeyCookies } from '../../modules/cookie/keyCookies';

const SignupPage = () => {
  const route = Router;
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupPasswordConfirm, setSignupPasswordConfirm] = useState("");

  useEffect(() => {

    if (getKeyCookies("key") !== undefined) {
      alert("이미 로그인 된 유저입니다! 로그아웃 후 접속해 주세요!")
      route.push('/login/after')
    }
  }, []);

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
            if (localStorage.getItem("userinfo") === undefined) {
              localStorage.removeItem("userinfo")
            }
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

  // 크로스 브라우징 높이, 넓이 계산
  let vh = 0;
  let vw = 0;
  useEffect(() => {
    vh = window.innerHeight * 0.01;
    vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }, []);

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
  height: calc(var(--vh, 1vh) * 100);
  width: 100vw;
  width: calc(vat(--vw, 1vw) * 100);
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
