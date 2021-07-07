// é usada como funções anonimas e/ou para callbacks

// function classic
function soma(a, b) {
  return a + b
}
console.log(`Soma com função declarada: ${soma(3, 5)}`)

// arrow function

// quando não há mais de uma instrução
// não é necessário {}
const soma2 = (i, z) => i + z
console.log(`Soma com arrow function: ${soma2(3, 5)}`)

// quando é passado apenas 1 parâmetro
// não é necessário parentes
const sayHello = name => `Hello ${name}`

console.log(sayHello('Izabela'))
