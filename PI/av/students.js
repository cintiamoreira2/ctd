const Aluno = require('./aluno1');
const studentes = require('./studentes')

function Curso(nomeCurso, notaAprovacao, faltasMaximas, listaStudentes){
    this.nomeCurso = nomeCurso,
    this.notaAprovacao = notaAprovacao,
    this.faltasMaximas = faltasMaximas,
    this.listStudentes = listaStudentes,
    this.adicionarAluno = adicionaAluno,
    this.verificarAprovado = verificaAprovado,
    this.situacaoTurma = situacaoTurma
}

let arraystudents= [];
for (x of studentes){
    arraystudentes.push(new Aluno(x.name, x.totalFaltas, x.notas));
}

let curso = new Curso('Programação Imperativa', 7, 2, arrayEstudantes)

function adicionarAluno(aluno){
    this.listStudentes.push(aluno)
}

function verificarAprovado(nome){
    for (let value of this.listStudentes) {
        if (value.name === name){
            //
            if (value.totalFaltas > this.faltasMaximas) {
                return 'Reprovado por falta'
            } 
             //
             else if ( value.calcularMedia() < this.notaAprovacao) { return 'Reprovado por nota' }  
             //
             else if ( value.calcularMedia() >= this.notaAprovacao
                       &&
                       value.numberFaltas < this.faltasMaximas) { return 'Aprovado' } 
             //
             else if ( value.totalFaltas == this.faltasMaximas ) {
                       if (value.calcularMedia() > (this.notaAprovacao * 1.1)) { 
                            return 'Aprovado + 10% da média' 
                        } else 
                            return 'Reprovado - 10% da média' 
                        }      
             }                        
    }
    return 'Aluno não foi localizado'
  }

  function situacaoTurma(){
    let situacao = [];
    for (let x of curso.listaEstudantes){
        situacao.push(curso.verificarAprovado(x.nome).startsWith('Aprovado!!!'));
    }
    return situacao;
  }