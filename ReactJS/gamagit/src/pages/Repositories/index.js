import React, { useEffect, useState } from 'react'
import * as Style from './styled'

export default function Repositories() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    //pegando dados do local storage
    let repositoriesName = localStorage.getItem('repositoriesName')
    // colocando dados como JSON/objeto novamente
    repositoriesName = JSON.parse(repositoriesName)
    setRepositories(repositoriesName)
    //localStorage.clear()
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
