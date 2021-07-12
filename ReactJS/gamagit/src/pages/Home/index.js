import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as Style from './styled'
import axios from 'axios'

function Home() {
  const history = useHistory()
  const [user, setUser] = useState('')
  const [erro, setErro] = useState(false)

  function handleSearch() {
    /*fazendo requisição com axios*/
    axios
      .get(`https://api.github.com/users/${user}/repos`)
      .then(response => {
        // salvando dados no storage
        const repositories = response.data
        const repositoriesName = []
        repositories.map(repository => repositoriesName.push(repository.name))

        localStorage.setItem(
          'repositoriesName',
          JSON.stringify(repositoriesName)
        )
        setErro(false)
        history.push('/repositories')
      })
      .catch(err => {
        setErro(true)
      })
  }

  return (
    <Style.HomeContainer>
      <Style.Title>Gama Academy | GamaGit</Style.Title>
      <Style.Content>
        <Style.Input
          placeholder="Usuário"
          className="userInput"
          onChange={e => setUser(e.target.value)}
          value={user}
        />
        <Style.Button type="button" onClick={handleSearch}>
          Pesquisar
        </Style.Button>
      </Style.Content>
      {erro ? (
        <Style.ErrorMessage>
          Ocorreu um erro. Tente Novamente :)
        </Style.ErrorMessage>
      ) : (
        ''
      )}
    </Style.HomeContainer>
  )
}

export default Home
