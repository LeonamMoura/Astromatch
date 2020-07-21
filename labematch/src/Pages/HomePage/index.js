import React, { useState, useEffect } from "react";
import axios from "axios"
import { Container, CardPeople, ActionButtons } from "./styles"
import Logo from "../../Assets/Images/logo.png"

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
        <span>Matchs</span>
      </header>

      <CardPeople>
        <img src={people.photo}/>
        <h2>{people.name}</h2>
      </CardPeople>

      <ActionButtons>
        <button id="like" >♥</button>
        <button id="deslike">X</button>
      </ActionButtons>
    </Container>
  )
}