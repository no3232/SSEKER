import { createGlobalStyle } from "styled-components";
import NanumSquareNeoBold from "../../asset/fonts/NanumSquareNeoTTF-cBd.woff2";

const NanumSquareNeoBold = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoBold';
          src: url(${NanumSquareNeoBold}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareNeoBold;