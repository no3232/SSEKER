import React from "react";
import styled from "styled-components";

import GlobalStyle from "../modules/GlobalStyle/GlobalStyle"
import { Props } from "../modules/types/dummy";

const Menu = ({menuOpen, setMenuOpen}: Props) => {

    const changeState = () => {
        setMenuOpen(!menuOpen);
    }

    return <MenuIcon className={`bx ${menuOpen?'bx-x':'bx-menu-alt-right'}`} onClick={changeState}>
        <GlobalStyle/>
    </MenuIcon>
}

export default Menu;

const MenuIcon = styled.i `
    border-radius: 50%;
    font-size: 40px;
    position: fixed;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 100;
    color: var(--primary-color);
    transition: var(--trans-05);
`