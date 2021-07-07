var num = 1
num = 5

if (num === 1) {
  console.log('É 1')
} else if (num === 2) {
  console.log('É 2')
} else {
  console.log('É 5')
}

var month = 'janeiro'
switch (month) {
  case 'fevereiro':
    console.log('mês 2')
    break

  case 'março':
    console.log('mês 3')
    break

  case 'janeiro':
    console.log('mês 1')
    break

  default:
    console.log('Nenhum mês encontrado')
}
