import styled from "styled-components";

import GmarketLight from '../modules/fonts/GmarketSansLight'

const SubText = (props: any) => {
  return (
    <>
      <GmarketLight />
      <SubTextStyle>{props.children}</SubTextStyle>
    </>
  );
};

export default SubText;

const SubTextStyle = styled.div`
  font-size: 13px;
  font-family: 'GmarketSansLight';
`;