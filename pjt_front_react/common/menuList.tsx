import styled from "styled-components";

const ExpandedMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
  z-index: 0;
`;

export default function MenuList(props: any) {
  return (
    <ExpandedMenu>
      <i className='bx bx-x' onClick={props.onCloseMenu}></i>
      <ul>
        <li><a href='#'>SSAFY Team PJT</a></li>
        <li><a href='#'>Search People</a></li>
        <li><a href='#'>Personal PJT</a></li>
        <li><a href='#'>Search Sturdy</a></li>
      </ul>
    </ExpandedMenu>
  );
}
