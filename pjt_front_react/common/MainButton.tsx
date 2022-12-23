import styled from "styled-components";

import NanumSquareRegular from "../modules/fonts/NanumSquareNeoRegular";

const MainButtonStyled = styled.button`
  background-color: #0062ff;
  color: white;
  font-size: 12px;
  font-family: NanumSquareNeoRegular;
  padding: 10px;
  margin: 10px;
`;

const MainButton = (props: any) => {
  
  return (
    <>
      <NanumSquareRegular />
      <MainButtonStyled onClick={props.onButtonClick}>{props.children}</MainButtonStyled>
    </>
  );
};

export default MainButton;
