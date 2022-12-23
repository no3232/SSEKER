import { createGlobalStyle } from "styled-components";
// import PretendardRegular from "../../asset/fonts/Pretendard-Regular.woff2";

const PretendardRegular = createGlobalStyle`
      @font-face {
          font-family: 'PretendardRegular';
          src: url('/fonts/Pretendard-Regular.woff2') format('woff2');
          font-weight: normal;
          font-style: normal;
      }
  `;

export default PretendardRegular;