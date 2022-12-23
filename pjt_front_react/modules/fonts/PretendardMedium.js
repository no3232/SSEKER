import { createGlobalStyle } from "styled-components";
import PretendardMedium from "../../asset/fonts/Pretendard-Medium.woff2";

const PretendardMedium = createGlobalStyle`
      @font-face {
          font-family: 'PretendardMedium';
          src: url(${PretendardMedium}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardMedium;