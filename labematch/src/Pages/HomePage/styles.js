import styled from "styled-components"

export const Container = styled.div`
  width: 360px;
  height: 640px;
  text-align: center;
  border: solid 1px black;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;

`

export const CardPeople = styled.div`
  margin-top: 32px;

  img {
    width: 350px;
    height: 400px;
  }

  h2 {
    color: white;
    position: relative;
    bottom: 20%;
    right: 30%;
  }
`

export const ActionButtons = styled.footer`
  width: 100%;
  max-width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 12px;

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
        transition: 0.8s;
        outline: none;
    }
    #like:hover {
        transition: 0.8s;
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
        transition: 0.8s;
        outline: none;
    }
    #deslike:hover {
        transition: 0.8s;
        background: red;
        color: white;
        border: none;
    }

`