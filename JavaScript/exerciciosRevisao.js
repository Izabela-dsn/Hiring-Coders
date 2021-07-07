// rodar no terminal: node <nome do arquivo>

//exe 14 - Imprima na tela os números pares existentes
//entre 0 e 100..

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

/*exe 34 - Crie um algoritmo que receba três notas 
de um aluno, calcule sua média e mostre as seguintes 
mensagens de acordo com cada situação:
    - Se a media for igual ou maior que 7 - Aprovado
    - Se a media for maior e igual a cinco e menor que 7 - Recuperação
    - Se a media for menor que 5 - Reprovado
*/

function calculateNote(note1, note2, note3) {
  let media = (note1 + note2 + note3) / 3
  if (media >= 7) {
    return 'Aprovado'
  }
  if (media >= 5 && media < 7) {
    return 'Recuperação'
  }
  if (media < 5) {
    return 'Reprovado'
  }
}

console.log(calculateNote(10, 1, 9))
