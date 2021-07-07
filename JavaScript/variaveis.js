console.log('Hello World')

/* 
Criando/declarando variáveis:
-> nome de variável no estilo camelCase;
-> não comece com número, não dê espaço entre as palavras;
-> nome da variável de acordo com o seu objetivo.
*/

/* 
Usada em escopo global, escopo de função, pode ser 
atualizadas, pode ser redeclarado, pode ser hospedado
*/
var myName = 'Izabela'
console.log(myName)

/*
Usada em escopo de função, escopo bloqueado,
pode ser atualizadas.
*/
let language = 'Javascript'

/* 
pode ser usado em escopo de função e escopo bloqueado
tem que ser inicializada no momento que a gente declara
não são atualizados ou reatribuídos.
*/
const pattern = 'ECMAScript'

//Escopo global X escopo local
{
  /* var age = 20 [escopo global] -> não usamos pois 
  pode ser acessado de qualquer parte 
  do algoritmo e faz com que o sistema 
  seja mais vulnerável a erros, sofre hoisting */

  let age = 20 /* fora desse escopo a 
  variável não está declarada*/
}

//console.log(age)
