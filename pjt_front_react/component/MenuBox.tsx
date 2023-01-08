import React, { useEffect, useState } from "react";
import styled from "styled-components";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import GmarketBold from "../modules/fonts/GmarketSansBold";
import GmarketLight from "../modules/fonts/GmarketSansLight";
import { Props } from "../modules/types/dummy";
import Link from "next/link";
import Router from "next/router";
import axios from "axios";
import { getKeyCookies, removeKeyCookies } from "../modules/cookie/keyCookies";

const MenuBox = ({ menuOpen, setMenuOpen }: Props) => {
  const [isUserLogin, setIsUserLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const router = Router;

  useEffect(() => {
    const getInfo = localStorage.getItem("userinfo")

    if (getInfo) {
      setUserName(JSON.parse(getInfo).username)
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
      <GmarketBold />
      <GmarketLight />
      <MenuUl>
        <MenuLi>
          <Link href={"/user"} onClick={closeMenuList}>
            팀원 구하기
          </Link>
        </MenuLi>
        <MenuLi>
          <Link href={"/team"} onClick={closeMenuList}>
            팀에 들어가기
          </Link>
        </MenuLi>
        <MenuLi>
          <Link href={"/teammodify"} onClick={closeMenuList}>
            팀만들기
          </Link>
        </MenuLi>
        <MenuLi>
          <Link href={`/userdetail/${userName}`} onClick={closeMenuList}>
            마이페이지
          </Link>
        </MenuLi>
        <MenuLi>
          {isUserLogin ? (
            <a onClick={logoutHandler} className="logout">
              로그아웃
            </a>
          ) : (
            <Link href={"/login"} onClick={closeMenuList}>
              로그인
            </Link>
          )}
        </MenuLi>
        )
      </MenuUl>
    </Container>
  );
};

export default MenuBox;

const MenuLi = styled.li`
  list-style: none;
  margin: 50px;
  text-align: center;

  & a {
    display: inline-block;
    text-decoration: none;
    color: var(--text-color);
    font-size: 30px;
    font-weight: 600;
    position: relative;
    transition: var(--trans-05);
  }

  & a:hover {
    font-family: "GmarketSansBold";
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
  & .logout {
    color: red;
  }
`;

const MenuUl = styled.ul``;

const Container = styled.div`
  width: 0;
  height: 0;
  background: var(--primary-color-light);
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: "GmarketSansLight";

  border-bottom-left-radius: 100%;
  transition: var(--trans-05);
  z-index: 99;

  &.open-menu {
    width: 100%;
    height: 100vh;
    border-bottom-left-radius: 0;
  }
`;
