//Declaração de tipos

// Bool
const contaPag: boolean = false

// Number
const idade: number = 23
const nota: number = 5.4

// String
const nome: string = 'Izabela'

// Array
const idades: number[] = [23, 65, 10]
const idades2: Array<number> = [2, 53, 20]

const nomes: string[] = ['Iza', 'Mari', 'Ju']

// Tuple
let jogadores: [string, string, string]
jogadores = ['abacate', 'juarez', 'liliane']

// Enum
enum StatusApproved {
  Aprovado = '001',
  Pendente = '002',
  Rejeitado = '003'
}

const statusOfApproved: StatusApproved = StatusApproved.Aprovado

// Any - usa em situações especiais
const apiReturn: any[] = [123, 'Elsa', false]
const apiReturn2: any = {
  //...
}

// Void - usamos quando uma função não retorna nada
function printOnScreen(msg: string) {
  console.log(msg)
}

// Null e Undefined

// Object
function criar(obj: object) {
  //...
}
criar({})

// Never - um tipo que nunca ocorre
function loopInfinito(): never {
  while (true) {}
}

function erro(mensagem: string): never {
  throw new Error(mensagem)
}

// Union Types = quando pode se ter mais
//  de um tipo
const note: string | number = 5
function exibirNota(nota: number | string) {
  console.log(`A nota é ${nota}`)
}

// Type Alias - criar um tipo
type Employee = {
  nome: string
  sobrenome: string
  dataNascimento: Date
}
const employees: Employee[] = [
  {
    nome: 'Izabela',
    sobrenome: 'Neves',
    dataNascimento: new Date()
  }
]

function tratarEmployee(employees: Employee[]) {
  for (let employee of employees) {
    console.log(`Funcionário: ${employee}`)
  }
}

// Valores nulos ou opcionais

// nulos (| null)
let altura: number | null = 1.6
altura = null

// opcionais (?)
type Contato = {
  nome: string
  telefone1: string
  telefone2?: string
}
const contato: Contato = {
  nome: 'Izabela',
  telefone1: '916165151'
}

//Aula 08
