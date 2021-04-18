import Body from './components/Body';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import React from 'react';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Body />
    </>
  );
}

export default App;