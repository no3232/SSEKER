import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 15px;
          font-family: 'NanumSquareNeoLight';
      }
  
      :root {
          /* ===== Colors ===== */
          --body-color : #fff;
          --sidebar-color : #ccd0d8;
          --primary-color : #1F4EF5;
          --primary-color-light : #4880EE;
          --light-color: #83B4F9;
          --text-color : #1A1E27;
          --text-color-light : #B1B8C0;
          --sub-color: #D6DADF;
  
          /* ===== Transition ===== */
          --trans-02 : all 0.2s ease;
          --trans-03 : all 0.3s ease;
          --trans-04 : all 0.4s ease;
          --trans-05 : all 0.5s ease;
      }
  
      body {
          height : 100vh;
          background : var(--body-color);
      }

      .notClick {
        background-color: #B1B8C0 !important;
        opacity: 0.5;
        transition: var(--trans-02);
      }

      .filter-open{
        display: block;
      }

      a {
        text-decoration: none;
        color: black;
      }
  
  `;

export default GlobalStyle;
