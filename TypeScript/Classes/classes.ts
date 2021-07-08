// Criando classes

class Data {
  // o acesso por default é public
  dia: number
  mes: number
  ano: number
  // botando ano default
  constructor(dia: number, mes: number, ano: number = 1970) {
    this.dia = dia
    this.mes = mes
    this.ano = ano
  }
}

const data = new Data(1, 2, 2030)
console.log(data.dia)

const data2 = new Data(1, 2)
console.log(data.dia)

// Outro modo de construtor
class Data2 {
  constructor(public dia: number, public mes: number, public ano: number) {}
}
