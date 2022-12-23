import { createGlobalStyle } from "styled-components";
import GmarketSansMedium from "../../asset/fonts/GmarketSansTTFMedium.ttf";

const GmarketBold = createGlobalStyle`
      @font-face {
          font-family: 'GmarketSansMedium';
          src: url(${GmarketSansMedium}) format('woff');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default GmarketBold;