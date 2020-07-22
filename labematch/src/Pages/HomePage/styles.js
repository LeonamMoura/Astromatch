import styled from "styled-components"

export const Container = styled.div`
  width: 360px;
  height: 640px;
  border: solid 1px black;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const ActionButtons = styled.footer`
  width: 100%;
  max-width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10%;

  #like {
        position: absoute;
        bottom: 0px;
        width: 50px;
        height: 50px;
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
        width: 50px;
        height: 50px;
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