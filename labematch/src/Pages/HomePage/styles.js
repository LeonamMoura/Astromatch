import styled from "styled-components"


export const Container = styled.div`
  width: 360px;
  height: 640px;
  border: solid 1px #c2c1be;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header img:last-child {
    width: 30px;
    height: 30px;
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    margin-right: 8px;

    :hover {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
`

export const ActionButtons = styled.footer`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10%;

  #like {
        width: 70px;
        height: 70px;
        background: transparent;
        color: green;
        border: solid 1px green;
        border-radius: 50%;
        font-size: 32px;
        cursor: pointer;
        transition: 0.5s;
        outline: none;
    }
    #like:hover {
        transition: 0.5s;
        background: green;
        color: white;
        border: none;
        
    }
    #deslike {
        width: 70px;
        height: 70px;
        background: transparent;
        color: red;
        border: solid 1px red;
        border-radius: 50%;
        font-size: 22px;
        cursor: pointer;
        transition: 0.5s;
        outline: none;
    }
    #deslike:hover {
        transition: 0.5s;
        background: red;
        color: white;
        border: none;
        
    }

`