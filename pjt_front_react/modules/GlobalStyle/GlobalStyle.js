import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
  
      :root {
          /* ===== Colors ===== */
          --body-color : #E4E9F7;
          --sidebar-color : #FFF;
          --primary-color : #695CFE;
          --primary-color-light : #F6F5FF;
          --toggle-color : #DDD;
          --text-color : #707070;
  
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
  
  `;

export default GlobalStyle;
