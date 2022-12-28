import styled from "styled-components";

import GmarketLight from '../modules/fonts/GmarketSansLight'

const SubtitleText = (props: any) => {
  return (
    <>
      <GmarketLight />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </>
  );
};

export default SubtitleText;

const TitleTextStyle = styled.div`
  font-size: 16px;
  font-family: 'GmarketSansLight';
`;
