import React, { useState } from 'react'
import * as Style from './styled'
import axios from 'axios'

function Home() {
  const [user, setUser] = useState('')

  function handleSearch() {
    /*fazendo requisição com axios*/
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => console.log(response.data))
  }

  return (
    <>
      <Style.Title>Gama Academy | GamaGit</Style.Title>
      <Style.Container>
        <Style.Input
          placeholder="Usuário"
          className="userInput"
          onChange={e => setUser(e.target.value)}
          value={user}
        />
        <Style.Button type="button" onClick={handleSearch}>
          Pesquisar
        </Style.Button>
      </Style.Container>
    </>
  )
}

export default Home
