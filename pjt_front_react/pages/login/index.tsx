import Router from "next/router";
import { SyntheticEvent, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import SubText from "../../common/SubText";
import { setKeyCookies, getKeyCookies } from "../../modules/cookie/keyCookies";
// import { KeyContext } from "../../modules/context/KeyContext";

const LoginMainPage = () => {
  const route = Router;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    if (getKeyCookies("key") !== undefined) {
      alert("이미 로그인 된 유저입니다! 로그아웃 후 접속해 주세요!");
      route.push("/login/after");
    }
  }, []);

  const moveToAfter = async (event: SyntheticEvent) => {
    event.preventDefault();
    const getKey = await axios({
      method: "POST",
      url: "https://ssekerapi.site/dj-accounts/login/",
      data: {
        username: loginEmail,
        password: loginPassword,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setKeyCookies("key", response.data.key);
          return response.status;
        }
      })
      .catch((err) => {
        console.log(err.response);
        return alert(err.request.responseText);
      });
    let primeKey = "";
    if (getKey === 200) {
      const pk = await axios({
        method: "GET",
        url: `https://ssekerapi.site/dj-accounts/user/`,
        headers: { Authorization: `Token ${getKeyCookies("key")}` },
      })
        .then((response) => {
          return (primeKey = response.data.pk);
        })
        .catch((err) => {
          console.log(err.response);
          return;
        });
        
      await axios({
        method: "GET",
        url: `https://ssekerapi.site/accounts/${pk}`,
      })
        .then((response) => {
          if (localStorage.getItem("userinfo") === undefined) {
            localStorage.removeItem("userinfo");
          }

          localStorage.setItem("userinfo", JSON.stringify(response.data));
          
          route.push("/login/after");
        })
        .catch((err) => {
          console.log(err.response);
          return;
        });
    }
  };

  const getLoginEmail = (email: string) => {
    setLoginEmail(email);
  };

  const getLoginPassword = (password: string) => {
    setLoginPassword(password);
  };

  const moveToSignup = (event: SyntheticEvent) => {
    event.preventDefault();
    route.push("/signup");
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
    <LoginBox>
      <TitleBox>
        <TitleText>로그인</TitleText>
      </TitleBox>
      <FormBox onSubmit={moveToAfter}>
        <InputStyle
          name="email"
          type="email"
          placeholder="example@ssafy.com"
          labelText="이메일"
          getInputValue={getLoginEmail}
        />
        <InputStyle
          name="password"
          type="password"
          placeholder="대문자, 특수문자 포함, 8글자 이상"
          labelText="비밀번호"
          getInputValue={getLoginPassword}
        />
        <MainButton type="submit">로그인</MainButton>
        <SubText>
          아직 회원이 아니십니까?{" "}
          <a href="" onClick={moveToSignup}>
            회원가입
          </a>
        </SubText>
      </FormBox>
    </LoginBox>
  );
};

export default LoginMainPage;

const LoginBox = styled.div`
  justify-content: center;
  align-items: center;
  color: #404040;
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0 auto;
  height: calc(var(--vh, 1vh) * 100);
  width: 90vw;
  width: calc(vat(--vw, 1vw) * 100);
`;

const TitleBox = styled.div`
  margin-top: auto;
  margin-bottom: 50px;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
  margin-bottom: auto;

  & label {
    width: 100%;
    text-align:left;
  }

  & input {
    width: 100%;
  }

  & button {
    margin-block: 50px;
  }
`;
