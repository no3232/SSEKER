import { createGlobalStyle } from "styled-components";
// import NanumSquareNeoRegular from "../../asset/fonts/NanumSquareNeoTTF-bRg.woff2";

const NanumSquareRegular = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoRegular';
          src: url('/fonts/NanumSquareNeoTTF-bRg.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareRegular;