import styled from "styled-components";

import NanumSquareHeavy from "../modules/fonts/NanumSquareNeoHeavy";

const TitleText = (props: any) => {
  return (
    <div className="mainTitle">
      <NanumSquareHeavy />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </div>
  );
};

export default TitleText;

const TitleTextStyle = styled.div`
  font-size: 30px;
  font-weight: 600;
  font-family: "NanumSquareNeoHeavy";
`;
