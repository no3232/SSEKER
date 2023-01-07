import Router from "next/router";
import { SyntheticEvent, useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import TitleText from "../../common/TitleText";
import MainButton from "../../common/MainButton";
import InputStyle from "../../component/InputStyle";
import SubText from "../../common/SubText";
import { UserInfoContext } from "../../modules/context/UserInfoContext";
import { setKeyCookies } from '../../modules/cookie/keyCookies';
// import { KeyContext } from "../../modules/context/KeyContext";

const LoginMainPage = () => {
  const route = Router;
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const ctxUserinfo = useContext(UserInfoContext);
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
        if (response.status === 200){
          setKeyCookies("key", response.data.key)
          return response.status;
        }
        return alert("이메일/비밀번호를 확인 해 주세요!")
      })
      .catch((err) => {
        console.log(err.response);
        return alert("이메일/비밀번호를 확인 해 주세요!")
      });

    if (getKey === 200) {
      await axios({
        method: "GET",
        url: `https://ssekerapi.site/accounts/${loginEmail}`,
      })
        .then((response) => {
          localStorage.setItem("userinfo", JSON.stringify(response.data))
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
