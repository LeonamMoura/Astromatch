import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
  }

  body, input, button {
    font:15px Arial, sans-serif;
  }
  
  button {
    cursor:pointer;
  }

  header {
    border-bottom: solid 1px #c2c1be;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    position: relative;
    padding: 0px 16px 0px 16px;
    border-radius: 16px;

    img {
      width: 148px;
      height: 50px;
    }
  }
`