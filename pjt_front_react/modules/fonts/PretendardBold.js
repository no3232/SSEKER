import { createGlobalStyle } from "styled-components";
import PretendardBold from "../../asset/fonts/Pretendard-Bold.woff2";

const PretendardBold = createGlobalStyle`
      @font-face {
          font-family: 'PretendardBold';
          src: url(${PretendardBold}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardBold;