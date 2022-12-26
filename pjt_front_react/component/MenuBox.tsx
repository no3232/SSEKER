import React from "react";
import styled from "styled-components";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";
import GmarketBold from "../modules/fonts/GmarketSansBold";
import GmarketLight from "../modules/fonts/GmarketSansLight"
import { MenuActive } from "../modules/types/dummy";

const MenuBox = ({menuOpen}:MenuActive) => {
    return <Container
        className={`${menuOpen
            ? 'open-menu'
            : null}`}>
        <GlobalStyle/>
        <GmarketBold/>
        <GmarketLight/>
        <MenuUl>
            <MenuLi>
                <a href="#">
                    팀원 구하기
                </a>
            </MenuLi>
            <MenuLi>
                <a href="#">
                    팀에 들어가기
                </a>
            </MenuLi>
            <MenuLi>
                <a href="#">
                    팀 만들기
                </a>
            </MenuLi>
            <MenuLi>
                <a href="#">
                    마이페이지
                </a>
            </MenuLi>
        </MenuUl>
    </Container>
}

export default MenuBox

const MenuLi = styled.li `
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
        font-family: 'GmarketSansBold';
        color: var(--primary-color);
    }

    & a::after {
        content: '';
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
`

const MenuUl = styled.ul ``

const Container = styled.div `
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
    font-family: 'GmarketSansLight';
    
    border-bottom-left-radius: 100%;
    transition: var(--trans-05);

    &.open-menu {
        width: 100%;
        height: 100vh;
        border-bottom-left-radius: 0;
    }
`