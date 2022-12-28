import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: 15px;
      }
  
      :root {
          /* ===== Colors ===== */
          --body-color : #fff;
          --sidebar-color : #ccd0d8;
          --primary-color : #1643f3;
          --primary-color-light : #84a4fc;
          --text-color : #1d2023;
          --text-color-light : #c0c0c0;
  
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
  
  `;

export default GlobalStyle;
