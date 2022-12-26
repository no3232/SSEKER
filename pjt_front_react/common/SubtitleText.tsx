import styled from "styled-components";

import GmarketMedium from '../modules/fonts/GmarketSansMedium'

const SubtitleText = (props: any) => {
  return (
    <>
      <GmarketMedium />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </>
  );
};

export default SubtitleText;

const TitleTextStyle = styled.div`
  font-size: 16px;
  font-family: 'GmarketSansMedium';
`;
