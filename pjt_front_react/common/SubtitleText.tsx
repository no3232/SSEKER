import styled from "styled-components";

import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

const SubtitleText = (props: any) => {
  return (
    <TitleContainer className="SubTitle TypeTitle">
      <NanumSquareBold />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </TitleContainer>
  );
};

export default SubtitleText;

const TitleTextStyle = styled.div`
  font-size: 16px;
  font-family: 'NanumSquareNeoBold';
`;

const TitleContainer = styled.div`
  &.TypeTitle {
    margin-inline: 5vw;
  }
`