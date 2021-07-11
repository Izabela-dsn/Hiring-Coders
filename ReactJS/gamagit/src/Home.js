import React, { useState } from 'react'
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
      <h1>Gama Academy</h1>
      <input
        placeholder="Usuário"
        className="userInput"
        onChange={e => setUser(e.target.value)}
        value={user}
      />
      <button type="button" onClick={handleSearch}>
        Pesquisar
      </button>
    </>
  )
}

export default Home
