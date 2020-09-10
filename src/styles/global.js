import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 20px;
  }

  h1 {
    font-family: ${ ({ theme }) => theme.fonts.headline };
  }

  p {
    font-family: ${ ({ theme }) => theme.fonts.body };
  }
`;