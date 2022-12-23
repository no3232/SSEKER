import { createGlobalStyle } from "styled-components";
import NanumSquareNeoHeavy from "../../asset/fonts/NanumSquareNeoTTF-eHv.woff2";

const NanumSquareNeoHeavy = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoHeavy';
          src: url(${NanumSquareNeoHeavy}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareNeoHeavy;