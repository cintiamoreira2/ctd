// repetir com papagaio
// estrutura básica for(InputDeviceInfo, condicao, incremento ou decremento)
// for (let index = 0; index < Array.length; index++){
//     console.log(index +"QUERO BISCOITO");
// }
//criando a tabuada
//numeros impares 1 a 100
// var contador =1;
// estrutura básica do while
// while(condicaoDeParada){
//     incremento/decremento no contador
// }

// do primeiro executar
// while(condicao)

// media da turma
//dados da turma -alunos e notas
//resultado é minha média
//média geral que é a da turma
//media do aluno

var dados=[];
var media=0;
var mediaGeralResultado=0;
//cria o nosso array de dados de alunos
dados[0] = ["aluno1",7,8,7,8];
dados[1] = ["aluno2",7,8,7,8];
dados[2] = ["aluno3",7,8,7,8];
dados[3] = ["aluno4",7,8,7,8];



for(let inicio = 0; inicio<dados.length; inicio++){
    var mediaAluno =(dados[inicio][1]+dados[inicio][2]+dados[inicio][3].lenght -1);
    media+=mediaAluno;//acumula
    console.log(dados[inicio][0]+mediaAluno);
}
mediaGeralResultado =media/dados.lenght;