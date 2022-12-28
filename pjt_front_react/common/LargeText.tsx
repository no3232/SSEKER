import styled from "styled-components";

import DNFBit from "../modules/fonts/DNFBitBit";

const LargeText = (props: any) => {
  return (
    <>
      <DNFBit />
      <LargeTextStyle>{props.children}</LargeTextStyle>
    </>
  );
};

export default LargeText;

const LargeTextStyle = styled.div`
  font-size: 30px;
  font-family: "bitbit";
`;
