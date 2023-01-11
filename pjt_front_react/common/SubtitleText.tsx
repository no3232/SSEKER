import styled from "styled-components";

// import GmarketLight from '../modules/fonts/GmarketSansLight'
// import GmarketMedium from "../modules/fonts/GmarketSansMedium";
import NanumSquareBold from "../modules/fonts/NanumSquareNeoBold";

const SubtitleText = (props: any) => {
  return (
    <div className="SubTitle">
      <NanumSquareBold />
      <TitleTextStyle>{props.children}</TitleTextStyle>
    </div>
  );
};

export default SubtitleText;

const TitleTextStyle = styled.div`
  font-size: 16px;
  font-family: 'NanumSquareNeoBold';
`;
