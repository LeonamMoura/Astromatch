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
  
  button {
    cursor:pointer;
  }

  header {
    border-bottom: solid 1px #c2c1be;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;

    img {
      width: 148px;
      height: 50px;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    display: inline;
  }

  .c-loader {
    animation: is-rotating 1s infinite;
    border: 6px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: #51d4db;
    height: 50px;
    width: 50px;
    position: absolute;
    top: 50%;
  }
  @keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`