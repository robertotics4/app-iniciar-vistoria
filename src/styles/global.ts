import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #ffffff;
    --background: #f0f2f5;
    --placeholders: #cdcfd7;
    --errors: #e52e4d;
    --success: #27ae60;
    --text: #363F5F;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    color: var(--text);
  }

  button {
    cursor: pointer;
    font-weight: 700;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
