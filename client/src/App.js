import React from 'react';

import GlobalStyle from './styles/global';

import { Container } from './components/Container/styles';

import Register from './components/Register';
import Devs from './components/Devs';

function App() {
  return (
    <>
      <Container>
        <Devs />
      </Container>
      <GlobalStyle />
    </>
  );
}

export default App;
