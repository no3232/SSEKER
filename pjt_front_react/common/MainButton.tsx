import styled from "styled-components";
import GlobalStyle from "../modules/GlobalStyle/GlobalStyle";

import SubtitleText from "./SubtitleText";

const MainButton = (props: any) => {
  return (
    <div>
      <GlobalStyle />
      <MainButtonStyled onClick={props.onButtonClick} type={props.type}>
        <SubtitleText>{props.children}</SubtitleText>
      </MainButtonStyled>
    </div>
  );
};

export default MainButton;

const MainButtonStyled = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 16px;
  margin-bottom: 24px;
  height: 54px;
  width: 85vw;
  text-align:center;
`;
