import { createGlobalStyle } from "styled-components";
// import NanumSquareNeoHeavy from "../../asset/fonts/NanumSquareNeoTTF-eHv.woff2";

const NanumSquareHeavy = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoHeavy';
          src: url('/fonts/NanumSquareNeoTTF-eHv.woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareHeavy;
