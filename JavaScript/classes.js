class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  read() {
    return `Estou lendo ${this.title}`
  }
}

// Herança
class FantasyBook extends Book {
  constructor(title, author, pages, theme) {
    super(title, author, pages) //é aqui que herdamos os atributos da classe anterior
    this.theme = theme
  }
}

let book = new Book('Segunda Chance', 'Anyzandy', 100)
console.log(book)
console.log(book.read())

let otherBook = new Book('Tormenta de Fogo', 'Brandon Sanderson', 375)
console.log(otherBook)
console.log(otherBook.read())

let fantasyBook = new FantasyBook(
  'Tormenta de Fogo',
  'Brandon Sanderson',
  375,
  'pós-apocalíptico'
)
console.log(fantasyBook)

//Encapsulamento

class Person {
  constructor(name) {
    this._name = name //deixa essa informação de forma "privada"
  }

  //usamos o get para acessar o nome
  get name() {
    return this._name
  }

  //permite reatribuir valores
  set name(value) {
    this._name = value
  }
}

let person = new Person('Izabela')
console.log(person.name)
person.name = 'Anyz'
console.log(person.name)
