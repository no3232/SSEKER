import { useState } from "react";
import styled from "styled-components";

import MenuList from './menuList';

const MenuButton = styled.button`
  position: fixed;
  z-index: 1;
  border: none;
  background-color: transparent;
  font-size: 4rem;
  color: white;
`;

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuHandler = () => {
    setMenuOpen(!menuOpen);
  };

  const onCloseMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div>
      <MenuButton >
        <i className='bx bx-menu' onClick={menuHandler}></i>
      </MenuButton>
      {menuOpen && <MenuList onCloseMenu={onCloseMenu} />}
    </div>
  );
}
