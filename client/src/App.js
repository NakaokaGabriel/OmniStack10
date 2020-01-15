import React from 'react';

import { Container } from './components/Container/styles';

import GlobalStyle from './styles/global';

import Register from './components/Register';
import Devs from './components/Devs';

function App() {
  return (
    <>
      <Container>
        <Register />
        <Devs />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
