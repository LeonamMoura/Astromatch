import React, { useState, useEffect } from 'react';
import {Container, Match} from './styles'
import Logo from '../../Assets/Images/logo.png'
import Home from '../../Assets/Icons/home-run.svg'
import {Link} from 'react-router-dom'
import axios from 'axios';


function MatchsPage() {
  const [listMatches, setListMatches] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getMatches()
  }, [])

  const getMatches = () => {
    axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/matches`)
      .then((response) => {
        setListMatches(response.data.matches)
        setIsLoading(false)
      })
  }

  const clearMatches = () => {
    axios
      .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonam-moura/clear`)
      .then((response) => {
        console.log(response)
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
      
      {isLoading ? <div className="c-loader"/> : listMatches.map((match) => <Match>
        <img src={match.photo} />
        <span>{match.name}</span>
      </Match>)}
      
      <button onClick={() => clearMatches()}>
        Limpar Swipes e Matches
      </button>
    </Container>
  )
}

export default MatchsPage;