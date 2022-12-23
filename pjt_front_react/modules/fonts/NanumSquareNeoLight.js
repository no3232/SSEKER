import { createGlobalStyle } from "styled-components";
// import NanumSquareNeoLight from "../../asset/fonts/NanumSquareNeoTTF-aLt.woff2";

const NanumSquareLight = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoLight';
          src: url('/fonts/NanumSquareNeoTTF-aLt.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareLight;
