import { createGlobalStyle } from "styled-components";
import NanumSquareNeoExtraBold from "../../asset/fonts/NanumSquareNeoTTF-dEb.woff2";

const NanumSquareNeoExtraBold = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoExtraBold';
          src: url(${NanumSquareNeoExtraBold}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareNeoExtraBold;