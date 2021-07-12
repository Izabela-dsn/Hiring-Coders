import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import * as Style from './styled'

export default function Repositories() {
  const history = useHistory()
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    //pegando dados do local storage
    let repositoriesName = localStorage.getItem('repositoriesName')
    if (repositoriesName != null) {
      // colocando dados como JSON/objeto novamente
      repositoriesName = JSON.parse(repositoriesName)
      setRepositories(repositoriesName)
      localStorage.clear()
    } else {
      history.push('/')
    }
  }, [])

  return (
    <Style.Container>
      <Style.Title>Repositórios</Style.Title>
      <Style.List>
        {repositories.map(repository => {
          return <Style.ListItem>Repositório: {repository}</Style.ListItem>
        })}
      </Style.List>

      <Style.LinkHome to="/">Voltar</Style.LinkHome>
    </Style.Container>
  )
}
