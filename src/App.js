import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalContext } from './context/GlobalState';
import { Main, Trivia } from './components';

function App() {
  const { loading } = useContext(GlobalContext);

  return loading ? (<h2>Loading...</h2>) : (
    <div className="app">
      <GlobalStyle />
      <Main />
    </div>
  );
}

// global styles
const GlobalStyle = createGlobalStyle`
  :root {
    --timberGreen: #7AC142;
    --timberNavy: #0C2340;
    --timberBlue: #236192;
    --timberSilver: #9EA2A2;
    --offWhite: #FAFAFA;
    --lightGrey: #DFDFDF;
    --wrongRed: #CA0201;
  }

  * {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }  

  html,
  body {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.004);
  }

  body {
    background: var(--offWhite);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`;

export default App;
