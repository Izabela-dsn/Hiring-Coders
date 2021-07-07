const person = {
  nome: 'Izabela',
  idade: '20',
  cidade: 'Uberlândia'
}

// Notação de ponto
console.log(person.nome)

// notação de colchetes
console.log(person['idade'])

// notação destructor -> como desestruturar um objeto

const { nome, idade, cidade } = person
console.log(cidade)
console.log(nome)

// estrutura de dados - array de objetos
const movies = [
  {
    id: 0,
    titulo: 'Dilema das Redes',
    classificacao: '12 anos',
    duracao: 120
  },
  {
    id: 1,
    titulo: 'Circulo de Fogo',
    classificacao: 'Livre',
    duracao: 100
  },
  {
    id: 2,
    titulo: 'Homem de Ferro',
    classificacao: '12 anos',
    duracao: 135
  },
  {
    id: 3,
    titulo: 'Liga da Justiça Snydercut',
    classificacao: '14 anos',
    duracao: 240
  },
  {
    id: 4,
    titulo: 'Parasita',
    classificacao: '16 anos',
    duracao: 90
  }
]

const [{ id, titulo, classificacao, duracao }] = movies

movies.map(movie => console.log(movie.classificacao))

movies.map(movie => {
  console.log(
    `Filme: ${movie.titulo} - Classificação Indicativa: ${movie.classificacao}`
  )
})
