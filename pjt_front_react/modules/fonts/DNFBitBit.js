import { createGlobalStyle } from "styled-components";
import DNFBitBit from "../../asset/fonts/DNFBitBitTTF.ttf";

const DNFBitBit = createGlobalStyle`
      @font-face {
          font-family: 'DNFBitBit';
          src: url(${DNFBitBit}) format('woff');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default DNFBitBit;
