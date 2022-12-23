import { createGlobalStyle } from "styled-components";
import NanumSquareNeoLight from "../../asset/fonts/NanumSquareNeoTTF-aLt.woff2";

const NanumSquareNeoLight = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoLight';
          src: url(${NanumSquareNeoLight}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareNeoLight;