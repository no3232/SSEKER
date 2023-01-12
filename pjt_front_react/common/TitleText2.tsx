import styled from "styled-components";
import NanumSquareHeavy from "../modules/fonts/NanumSquareNeoHeavy";

const TitleText = (props: any) => {
  return (
    <>
      <NanumSquareHeavy />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </>
  );
};

export default TitleText;

const TitleTextStyle = styled.div`
  font-size: 20px;
  font-family: 'NanumSquareNeoHeavy';
`;