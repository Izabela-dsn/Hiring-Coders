// FizzBuzz
// Divisível por 3 => 'Fizz'
// Divisível por 5 => 'Buzz'
// Divisível por 3 e 5 => 'FizzBuzz'
// Se não for número => 'Não é um número'
// Se não for Divisível por 5 ou 3 => entrada

function fizzBuzz(entrada) {
  if (typeof entrada !== 'number') {
    return 'Não é um número'
  }

  if (entrada % 5 === 0 && entrada % 3 === 0) {
    return 'FizzBuzz'
  }

  if (entrada % 5 === 0) {
    return 'Buzz'
  }

  if (entrada % 3 === 0) {
    return 'Fizz'
  }

  return entrada
}

let results = fizzBuzz(10)
console.log(results)

//Reverse a string

let newStr = ''

function reverseAString(str) {
  for (let contador = str.length - 1; contador >= 0; contador--) {
    newStr += str[contador]
    console.log(newStr)
  }
  console.log(newStr)
}

let resultado = reverseAString('Roseli')

//Conversor de temperatura Celsius -> Fahrenheit
function convertToFahrenheit(value) {
  return value * 1.8 + 32
}

let result = convertToFahrenheit(40)
console.log(`O valor em Fahrenheit é ${result}`)
/*




*/
//To-do List
const listContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = []

newListForm.addEventListener('submit', function (e) {
  e.preventDefault()

  const listName = newListInput.value
  if (listName === null || listName === '') {
    return
  }
  const list = createList(listName)
  newListInput.value = null

  lists.push(list)
  render()
})

function createList(name) {
  return {
    id: Date.now().toString(),
    name: name
  }
}

function render() {
  clearElements(listContainer)
  lists.forEach(function (list) {
    const item = document.createElement('li')
    item.classList.add('item')
    item.innerText = list.name

    listContainer.appendChild(item)
  })
}

function clearElements(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()
