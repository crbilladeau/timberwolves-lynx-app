import React, { useContext } from 'react';
import { createGlobalStyle } from 'styled-components';
import { GlobalContext } from './context/GlobalState';
import { Main } from './components/screens/Main/Main';

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
  

  .info-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    height: 100vh;
    margin: 0;
    @media screen and (max-width: 850px) {
      justify-content: flex-end;
    }
    
    img {
      position: absolute;
      right: 0;
      bottom: 50px;
      width: 45vw;
      margin: 0 50px;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      @media screen and (max-width: 850px) {
        position: relative;
        width: 75vw;
        margin: 0 10px;
      }
      @media screen and (max-width:  425px) {
        width: 90vw;
      }
    }
  }

  .text-container {
    position: absolute;
    top: 100px;
    left: 0;

    h1 {
      font-family: 'Edo SZ';
      font-size: 80px;
      font-weight: 400;
      margin: 20px;
      @media screen and (max-width: 425px) {
        font-size: 60px;
      }
    }

    h2 {
      margin-left: 100px;
      margin-top: 60px;
      max-width: 500px;
      text-align: right;
      font-family: 'Futura Light Bk', sans-serif;
      font-size: 34px;
    }
  }

  .results-container {
    h2 {
      font-family: 'Edo SZ', sans-serif;
      font-size: 60px;
      font-weight: 400;
      padding: 20px 0;
    }
    h3 {
      font-family: 'Futura Medium Bk', sans-serif;
      font-size: 30px;
      font-weight: 400;
      padding: 20px 0;
    }
    ul {
      font-family: 'Futura Light Bk', sans-serif;
      font-size: 20px;
      font-weight: 400;
      padding: 10px 0;
    }
    li {
      list-style: none;
      padding: 5px 0;
    }
    .correct {
      color: var(--timberGreen);
      font-family: 'Futura Medium Bk', sans-serif;
      font-weight: 600;
    }
    .incorrect {
      color: var(--wrongRed);
      font-family: 'Futura Medium Bk', sans-serif;
      font-weight: 600;
    }
  }

  .submit {
    background: #0c2340;
    font-family: 'Edo SZ', sans-serif;
    font-size: 50px;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    padding: 10px 20px;
    margin: 20px;
    cursor: pointer;
    transition: background 250ms ease-in-out;
    width: 100%auto;
    @media screen and (max-width: 850px) {
      margin: 10px;
    }
  }
  .submit:hover {
    background: #7ac142;
  }
  .submit:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }

  .answer.selected {
    color: #ffffff;
    background-color: var(--timberGreen);
  }

  .error {
    color: var(--wrongRed);
  }
`;

export default App;
