import { createGlobalStyle } from "styled-components";
import NanumSquareNeoRegular from "../../asset/fonts/NanumSquareNeoTTF-bRg.woff2";

const NanumSquareNeoRegular = createGlobalStyle`
      @font-face {
          font-family: 'NanumSquareNeoRegular';
          src: url(${NanumSquareNeoRegular}) format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default NanumSquareNeoRegular;