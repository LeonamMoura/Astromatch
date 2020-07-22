import React from 'react';
import styled from 'styled-components'


const Card = styled.div`
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20%;

  img {
    width: 300px;
    height: 350px;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.5);
  }

  div {
    position: relative;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    width: 100%;
    bottom: 60px;
    height: 89px;
    max-width: 300px;
    padding-left: 16px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`


function CardPeople({key, photo, name, age, bio}) {
  return <Card key={key}>
    <img src={photo}/>
    <div>
      <h2>{name}</h2>, <span>{age}</span>
      <p>{bio}</p>
    </div>
  </Card>
}

export default CardPeople;