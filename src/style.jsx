import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    /* Fonts */
    --font-base: 'Poppins', sans-serif;

    /* Fonts: Weight */
    --font-light: 300;
    --font-regular: 400;
    --font-medium: 500;
    --font-semibold: 600;
    --font-bold: 700;

    /* colors */
    --color-primary: #E6484B;
    --color-accent: #DD1E22;
    --color-secondary: #FFFFFF;
    --color-black: #000000;
    --color-contrast: #209986;
    --color-gray2: #FCFCFC;
    --color-gray3: #F9F9F9;
    --color-gray4: #F6F6F6;
    --color-gray5: #E6E6E6;
    --color-gray6: #DCDCDC;
    --color-gray7: #C8C8C8;
    --color-gray8: #6E6E6E;
    --color-gray9: #A0A0A0;
  };
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html, body {
    font-family: var(--font-base);
    font-size: 16px;
    font-weight: 400;
    color: var(--color-black);
    margin: 0;
    padding: 0;
  }
  .container {
    padding: 0 1rem;
    max-width: 768px;
    margin: auto;
  }
`
