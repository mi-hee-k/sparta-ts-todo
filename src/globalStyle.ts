import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* reset CSS */

  * {
    box-sizing: border-box;
    margin: 0;
  }

  header {
    display:flex;
    justify-content: center;
    align-items: center;
    height: 100px;
  }

  main {
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button,
  input,
  textarea {
    border: none;
  }

  ul,
  ol,
  li {
    list-style: none;
    padding-left: 0;
  }

  button {
    padding: 6px 14px;
    border-radius: 10px;
    font-weight: bold;
    cursor: pointer;
  }
`;
