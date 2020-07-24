import React, { useState, useEffect } from 'react';
import {Container, ListMatches, Match} from './styles'
import Logo from '../../Assets/Images/logo.png'
import Home from '../../Assets/Icons/home-run.svg'
import {Link} from 'react-router-dom'
import axios from 'axios';


function MatchsPage() {
  const [listMatches, setListMatches] = useState([])

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/matches`)
      .then((response) => {
        setListMatches(response.data.matches)
      })
  }

  return (
    <Container>
      <header>
        <img src={Logo}/>
        <Link to="/">
          <img src={Home}/>
        </Link>
      </header>

      {listMatches.map((match) => {
        return <Match>
          <img src={match.photo}/>
          <span>{match.name}</span>
        </Match>
      })}

    </Container>
  )
}

export default MatchsPage;