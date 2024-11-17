function Pessoa(nome) {
    this.nome = nome
}

function Funcao(nome, cargo) {
    this.cargo = cargo
    Pessoa.call(this, nome)
}

function Musico(nome, cargo, instrumento) {
    this.instrumento = instrumento
    Funcao.call(this, nome, cargo)
}

const pessoa1 = new Musico('mario', 'musico', 'guitarra')
const pessoa2 = new Musico('Joao', 'musico', 'bateria')
const pessoa3 = new Musico('Maria', 'musico', 'Baixo')


console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)