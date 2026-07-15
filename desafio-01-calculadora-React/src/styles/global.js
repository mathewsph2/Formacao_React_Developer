import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', 'Roboto', -apple-system, sans-serif;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    font-family: inherit;
  }
`;
