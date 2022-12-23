import { createGlobalStyle } from "styled-components";
import PretendardBlack from "../../asset/fonts/Pretendard-Black.woff2";

const PretendardBlack = createGlobalStyle`
      @font-face {
          font-family: 'PretendardBlack';
          src: url(${PretendardBlack}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardBlack;