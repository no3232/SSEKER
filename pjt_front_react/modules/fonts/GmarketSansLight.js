import { createGlobalStyle } from "styled-components";
import GmarketSansLight from "../../asset/fonts/GmarketSansTTFLight.ttf";

const GmarketBold = createGlobalStyle`
      @font-face {
          font-family: 'GmarketSansBold';
          src: url(${GmarketSansLight}) format('woff');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default GmarketBold;