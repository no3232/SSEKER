import styled from "styled-components";


import NanumSquareNeoHeavy from "../modules/fonts/NanumSquareNeoHeavy"

const LargeText = (props: any) => {
  return (
    <>
      <NanumSquareNeoHeavy/>
      <LargeTextStyle>{props.children}</LargeTextStyle>
    </>
  );
};

export default LargeText;

const LargeTextStyle = styled.div`
  font-size: 30px;
  font-family: "NanumSquareNeoHeavy";
`;
