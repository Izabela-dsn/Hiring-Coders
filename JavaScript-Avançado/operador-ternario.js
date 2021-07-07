// if..else tradicional

function verificaMaioridade(idade) {
  if (idade >= 18) {
    return 'Maior de idade'
  } else {
    return 'Menor de idade'
  }
}

console.log(verificaMaioridade(19))

// operador ternário
function verificaMaioridadeFormaModerna(idade) {
  return idade >= 18 ? 'Maior de Idade' : 'Menor de idade'
}
console.log(verificaMaioridadeFormaModerna(19))
