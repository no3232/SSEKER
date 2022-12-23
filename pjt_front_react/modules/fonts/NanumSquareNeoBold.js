import { createGlobalStyle } from "styled-components";
// import NanumSquareNeoBold from "../../asset/fonts/NanumSquareNeoTTF-cBd.woff2";

const NanumSquareBold = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoBold';
          src: url('/fonts/NanumSquareNeoTTF-cBd.woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareBold;
