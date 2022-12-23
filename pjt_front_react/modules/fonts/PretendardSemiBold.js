import { createGlobalStyle } from "styled-components";
// import PretendardSemiBold from "../../asset/fonts/Pretendard-SemiBold.woff2";

const PretendardSemiBold = createGlobalStyle`
      @font-face {
          font-family: 'PretendardSemiBold';
          src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardSemiBold;