import styled from "styled-components";

import SubtitleText from "./SubtitleText";

const MainButton = (props: any) => {
  return (
    <>
      <MainButtonStyled onClick={props.onButtonClick} type={props.type}>
        <SubtitleText>{props.children}</SubtitleText>
      </MainButtonStyled>
    </>
  );
};

export default MainButton;

const MainButtonStyled = styled.button`
  background-color: #0062ff;
  color: white;
  border: none;
  border-radius: 16px;
  margin-bottom: 24px;
  height: 54px;
  width: 100%;
`;
