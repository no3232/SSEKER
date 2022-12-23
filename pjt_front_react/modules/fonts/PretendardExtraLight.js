import { createGlobalStyle } from "styled-components";
// import PretendardExtraLight from "../../asset/fonts/Pretendard-ExtraLight.woff2";

const PretendardExtraLight = createGlobalStyle`
      @font-face {
          font-family: 'PretendardExtraLight';
          src: url('/fonts/Pretendard-ExtraLight.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardExtraLight;