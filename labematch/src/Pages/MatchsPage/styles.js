import styled from 'styled-components'

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
    left: 10px;
    bottom: 10px;
    margin-right: 8px;

    :hover {
      -webkit-transform: scale(0.8);
      -ms-transform: scale(0.8);
      transform: scale(0.8);
    }
  }
`

export const Match = styled.div`
  width: 300px;
  height: 80px;
  border: solid 1px grey;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 8px;
  border-radius: 8px;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 16px;
  }

  span {
    font-size: 1.2rem;
    font-family: 'Fredoka One', cursive;
    margin-left: 16px;
  }
`