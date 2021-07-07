const alunasGama = ['Izabela', 'Paula', 'Mariana', 'Fernanda']

//acessar informação
console.log(alunasGama[0])

// operador spread (...)
// pega todos os itens anteriores
const alunasXP = [...alunasGama, 'Simara']
console.log(alunasXP)

//métodos de iteração
for (let i = 0; i < alunasXP.length; i++) {
  console.log(alunasXP[i])
}

// usamos quando precisamos de um retorno que
// não modifique o array anterior
alunasXP.map(aluna => console.log(aluna))

//filter
const numbers = [1, 2, 8, 6, 63, 134655, 5]

const numbersFiltered = numbers.filter(number => number % 2 != 0)
console.log(numbersFiltered)

//find
const products = ['geladeira', 'fogão', 'cama', 'mesa']

const findCama = products.find(product => product === 'cama')
console.log(findCama)

const findMesa = products.find(product => product === 'mesa')
console.log(findMesa)

//sort - altera o conteúdo do array original
const numbersCrescentOrder = numbers.sort()
console.log(numbersCrescentOrder)

const numbersDecrescentOrder = numbers.sort((a, b) => b - a)
console.log(numbersDecrescentOrder)

//reduce - reduz o array a um resultado de uma operação matemática
const moreNumbers = [3, 2, 5]

const sumOfMoreNumbers = moreNumbers.reduce((valorAnterior, valorAtual) => {
  return valorAnterior + valorAtual
}, 0)

console.log(sumOfMoreNumbers)

const sumOfMoreNumbersAndTen = moreNumbers.reduce(
  (valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
  },
  10
)

console.log(sumOfMoreNumbersAndTen)
