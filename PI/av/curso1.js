const Aluno = require('./aluno1');
const studentes = require('./students')

function Curso(nameCurso, notaAprovacao, faltasMaximas, listStudentes) {
    this.nameCurso = nameCurso,
        this.notaAprovacao = notaAprovacao,
        this.faltasMaximas = faltasMaximas,
        this.adicionarAluno = adicionarAluno,
        this.listStudantes = listStudentes,
        this.verificarAprovado = verificarAprovado,
        this.situacaoTurma = situacaoTurma
}

let arrayStudentes = [];
for (x of Studentes) {
    arrayStudentes.push(new Aluno(x.name, x.totalFaltas, x.notas));
}

let curso = new Curso('Programação Imperativa', 7, 2, arrayStudentes)

function adicionarAluno(aluno) {
    this.listaStudentes.push(aluno)
}

function verificarAprovado(name) {
    for (let value of this.listStudentes) {
        if (value.name === name) {
            if (value.totalFaltas > this.faltasMaximas) {
                return 'Está reprovado por falta'
            } else if (value.calcularMedia() < this.notaAprovacao) {
                return 'Está reprovado por nota'
            } else if (value.calcularMedia() >= this.notaAprovacao && value.totalFaltas < this.faltasMaximas) {
                return 'Aprovado'
            } else if (value.totalFaltas == this.faltasMaximas) {
                if (value.calcularMedia() > (this.notaAprovacao * 1.1)) {
                    return 'Aprovado + 10% acima da média'
                } else
                    return 'Reprovado - 10% abaixo da média'
            }
        }
    }
    return 'Aluno não localizado'
}

function situacaoTurma() {
    let situacao = [];
    for (let x of curso.listStudentes) {
        situacao.push(curso.verificarAprovado(x.name).startsWith('Aprovadasso!!!'));
    }
    return situacao;
}

module.exports = Curso;