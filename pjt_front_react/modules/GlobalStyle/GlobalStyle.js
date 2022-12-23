import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
  
      :root {
          /* ===== Colors ===== */
          --body-color : #ffffff;
          --primary-color : #3373f6;
          --primary-color-light : #dae8fd;
          --text-color : #434e60;
  
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
  
      body.dark {
        /* ===== Colors ===== */
        --body-color : #232830;
        --primary-color : #3a3e45;
        --primary-color-light : #3a3e45;
        --text-color : #ffffff;
      }
  `;

export default GlobalStyle;
