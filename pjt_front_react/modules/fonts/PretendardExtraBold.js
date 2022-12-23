import { createGlobalStyle } from "styled-components";
// import PretendardExtraBold from "../../asset/fonts/Pretendard-ExtraBold.woff2";

const PretendardExtraBold = createGlobalStyle`
      @font-face {
          font-family: 'PretendardExtraBold';
          src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardExtraBold;