import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    background: #e5e6f0;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: "Roboto", sans-serif;
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style: none;
  }
`;
