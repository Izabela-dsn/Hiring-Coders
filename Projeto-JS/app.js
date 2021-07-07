// iniciar o projeto node: npm init -y
// dependência para ler o que o
//  usuário mostra: npm i readline-sync

//importando nossos livros
const books = require('./database')
//console.log(books)

//pegar o input
const readline = require('readline-sync')
const initialEntry = readline.question('Deseja buscar um livro? S/N ')

// consequência da escolha

//sim -> mostra categorias e pergunta qual categoria que ela escolhe
if (initialEntry.toLocaleUpperCase() === 'S') {
  console.log('Categorias Disponíveis:')
  console.log('Fantasia', '| Romance', '| Transformação Pessoal', '| Terror')

  const categoryEntry = readline.question('Qual categoria voce escolhe? ')
  const retorno = books.filter(book => book.categoria === categoryEntry)
  console.table(retorno)
} else {
  // não -> mostra todos os livros em ordem crescente pelo num de paginas de cada livro
  const ordBooks = books.sort((a, b) => a.paginas - b.paginas)

  console.log('Esses são todos os livros disponíveis:')
  console.table(ordBooks)
}
