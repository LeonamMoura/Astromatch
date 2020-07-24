import React from 'react';
import styled from 'styled-components'


const Card = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: 8px;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
  }

  div {
    height: 30%;
    position: absolute;
    bottom: 0px;
    width: 100%;
    background-image: linear-gradient(to right top, rgba(0, 0, 0, 0.5), transparent);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 2;
    padding: 15px; 
    border-radius: 8px;
  }
  
  h1, h2, h3, h4, h5, h6 {
    display: inline;
  }
`


function CardPeople({key, photo, name, age, bio}) {
  return <Card key={key}>
    <img src={photo}/>
    <div>
      <h2>{name}, {age}</h2>
      <p>{bio}</p>
    </div>
  </Card>
}

export default CardPeople;