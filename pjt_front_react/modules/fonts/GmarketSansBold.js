import { createGlobalStyle } from "styled-components";
// import GmarketSansBold from '../../asset/fonts/GmarketSansTTFBold.ttf'

const GmarketBold = createGlobalStyle`
    @font-face {
        font-family: 'GmarketSansBold';
        src: url('/fonts/GmarketSansTTFBold.ttf');
        font-weight: normal;
        font-style: normal;
    }
`;

export default GmarketBold;
