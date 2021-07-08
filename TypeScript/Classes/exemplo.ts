class Carro {
  private velocidadeAtual: number = 0

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMax: number = 220
  ) {}

  private alterarVelocidade(delta: number) {
    const novaVelocidade = this.velocidadeAtual + delta

    if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax) {
      this.velocidadeAtual = novaVelocidade
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMax : 0
      console.log('Velocidade atual', this.velocidadeAtual)
    }
  }

  acelerar() {
    this.alterarVelocidade(5)
  }

  frear() {
    this.alterarVelocidade(-5)
  }
}

const carro = new Carro('Mercedes', 'Audi', 250)
carro.acelerar()
carro.frear()

// Herança
class Camaro extends Carro {
  private turbo = false

  constructor() {
    super('Chevrolet', 'Camaro', 500)
  }

  ligarTurbo() {
    this.turbo = true
  }
}

const camaro = new Camaro()
camaro.acelerar()
camaro.frear()
camaro.ligarTurbo()
