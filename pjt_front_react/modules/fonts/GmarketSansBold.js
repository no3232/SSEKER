import { createGlobalStyle } from "styled-components";
import GmarketSansBold from "../../asset/fonts/GmarketSansTTFBold.ttf";

const GmarketBold = createGlobalStyle`
      @font-face {
          font-family: 'GmarketSansBold';
          src: url(${GmarketSansBold}) format('woff');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default GmarketBold;