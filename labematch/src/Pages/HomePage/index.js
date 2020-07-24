import React, { useState, useEffect, useRef } from "react";
import axios from "axios"
import { Container, ActionButtons } from "./styles"
import Logo from "../../Assets/Images/logo.png"
import CardPeople from "../../Components/CardPeople";
import {Link} from 'react-router-dom'
import IconMatchs from '../../Assets/Icons/icon-match.svg'


export default function HomePage() {
  const [people, setPeople] = useState({})


  useEffect(() => {
    getPeoples()
    
  }, [])



  const getPeoples = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/person`)
      .then((response) => {
        setPeople(response.data.profile)
      })
  }

  const choosePerson = (e) => {
    if (e) {
      const body = {
        id: people.id,
        choice: true
      }

      axios
        .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/choose-person`, body)
        .then((response) => {
          console.log(response.data)
        })
        getPeoples()
    } else {
        const body = {
          id: people.id,
          choice: false
        }
        axios
          .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/choose-person`, body)
          .then((response) => {
            console.log(response.data)
          })
        getPeoples()
      }
  }

  return (
    <Container>
      <header>
        <div></div>
        <img src={Logo}/>
        
        <Link to="/matchs">
          <img src={IconMatchs}/>
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
        <button onClick={() => choosePerson(false)} id="deslike"><h3>X</h3></button>
        <button onClick={() => choosePerson(true)} id="like" ><h3>♥</h3></button>
      </ActionButtons>
    </Container>
  )
}