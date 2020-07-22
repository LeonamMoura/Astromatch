import React, { useState, useEffect } from "react";
import axios from "axios"
import { Container, ActionButtons } from "./styles"
import Logo from "../../Assets/Images/logo.png"
import CardPeople from "../../Components/CardPeople";
import {Link} from 'react-router-dom'

export default function HomePage() {
  const [people, setPeople] = useState({})

  useEffect(() => {
    getPeoples()
  }, [])

  const getPeoples = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura-mello/person`)
      .then((response) => {
        setPeople(response.data.profile)
      })
  }

  return (
    <Container>
      <header>
        <span>voltar</span>
        <img src={Logo}/>
        
        <Link to="/matchs">
          <span>Matchs</span>
        </Link>
      </header>

      <CardPeople
        key={people.id}
        photo={people.photo}
        name={people.name}
        age={people.age}
        bio={people.bio}
      />

      <ActionButtons>
        <button id="deslike"><h3>X</h3></button>
        <button id="like" ><h3>♥</h3></button>
      </ActionButtons>
    </Container>
  )
}