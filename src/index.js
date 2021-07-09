import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import App from './App';
import ContextProvider from './components/context/Context';

const GlobalStyles = createGlobalStyle `
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    scroll-behavior: smooth;
  }

  body{
    background-color: #f1e6f3;
    min-height: 100vh;
    font-family: sans-serif;
  }
`
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
