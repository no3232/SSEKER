import styled from "styled-components";

import DNFBit from "../modules/fonts/DNFBitBit";

const TitleText = (props: any) => {
  return (
    <>
      <DNFBit />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </>
  );
};

export default TitleText;

const TitleTextStyle = styled.div`
  font-size: 20px;
  font-family: "bitbit";
`;