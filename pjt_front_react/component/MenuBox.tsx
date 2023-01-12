import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import { Props } from "../modules/types/dummy";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { getKeyCookies, removeKeyCookies } from "../modules/cookie/keyCookies";
import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

const MenuBox = ({ menuOpen, setMenuOpen }: Props) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const router = Router;

  useEffect(() => {
    const getInfo = localStorage.getItem("userinfo");

    if (getInfo) {
      setUserName(JSON.parse(getInfo).id);
      setIsUserLogin(true);
    } else {
      setIsUserLogin(false);
    }
  }, [getKeyCookies("key")]);

  const closeMenuList = () => {
    setMenuOpen((prev) => !prev);
  };

  const logoutHandler = () => {
    event?.preventDefault();

    axios({
      method: "POST",
      url: "https://ssekerapi.site/dj-accounts/logout/",
      headers: {
        Authorization: `Token ${getKeyCookies("key")}`,
      },
    }).catch((error) => console.log(error.response));

    removeKeyCookies("key");

    localStorage.removeItem("userinfo");

    setIsUserLogin(false);
    setMenuOpen((prev) => !prev);
    router.push("/");
  };

  return (
    <Container className={`${menuOpen ? "open-menu" : null}`}>
      <GlobalStyle />
      <NanumSquareRegular />

      <MenuUl>
        <MenuLi>
          <Link href={"/user"} onClick={closeMenuList}>
            <i className="bx bxs-face"></i>&nbsp;<p>팀원 구하기</p>
          </Link>
        </MenuLi>

        <MenuLi>
          <Link href={"/team"} onClick={closeMenuList}>
            <i className="bx bx-group"></i>&nbsp;<p>팀에 들어가기</p>
          </Link>
        </MenuLi>

        <MenuLi>
          <Link href={"/teammodify"} onClick={closeMenuList}>
            <i className="bx bx-list-plus"></i>&nbsp;<p>팀만들기</p>
          </Link>
        </MenuLi>

        <MenuLi>
          <Link href={`/userdetail/${userName}`} onClick={closeMenuList}>
            <i className="bx bx-user"></i>&nbsp;<p>마이페이지</p>
          </Link>
        </MenuLi>

        <MenuLi>
          {isUserLogin ? (
            <a onClick={logoutHandler} className="logout">
              <i className="bx bx-log-out"></i>&nbsp;<p>로그아웃</p>
            </a>
          ) : (
            <Link href={"/login"} onClick={closeMenuList}>
              <i className="bx bx-log-in"></i>&nbsp;<p>로그인</p>
            </Link>
          )}
        </MenuLi>
      </MenuUl>
    </Container>
  );
};

export default MenuBox;

const MenuLi = styled.li`
  list-style: none;
  width: 100%;
  padding: 30px 50px 30px 0;
  margin: 0;
  border-bottom: var(--sub-color) solid 1px;

  & a {
    text-decoration: none;
    color: var(--text-color);
    width: 100%;
    font-size: 20px;
    position: relative;
    transition: var(--trans-05);
    font-family: "NanumSquareNeoRegular";
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  & a:hover {
    font-family: "NanumSquareNeoRegular";
    color: var(--primary-color);
  }

  & a::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--primary-color);
    position: absolute;
    bottom: 15px;
    right: -18px;
    opacity: 0;
    transition: var(--trans-05);
  }

  & a:hover::after {
    opacity: 1;
  }

  & i {
    font-size: 1.5em;
    margin-right: 0.5em;
  }

  &:nth-child(5), &:nth-child(4) {
    border: none;
  }

  &:nth-child(5) a {
    margin-top: 10em;
    border: none;
    text-align: end;
    justify-content: flex-end;
  }
`;

const MenuUl = styled.ul`
  position: absolute;
  bottom: 20px;
  width: 80%;
`;

const Container = styled.div`
  width: 0;
  height: 100vh;
  background: var(--body-color);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  font-family: "NanumSquareNeoRegular";

  border-bottom-left-radius: 100%;
  transition: var(--trans-05);
  z-index: 99;

  &.open-menu {
    width: 80%;
    height: 100vh;
    border-bottom-left-radius: 0;
    box-shadow: 10px 0 80px 20px rgba(26, 30, 39, 0.5);
  }
`;
