/*function main()
{
 var participantes =  parseInt(prompt("Numero de participantes: "));
 var vetor = new Array(participantes);

 // Preenchendo o veotr
 for(let count=0; count<participantes; count++)
  vetor[count] = parseInt( prompt("Participante " + (count+1) + ":") )
 

 // Somando todos os elementos
 var soma=0;
 for(let count in vetor)
  soma += vetor[count];

 var media = soma/participantes;
 document.write("Média dos participantes: " + media);
}*/
let notasParticipantes = [
    { participante: "1", nome: "Augusto", concurso: "x1", nota: 78 },
    { participante: "1", nome: "Augusto", concurso: "x1", nota: 80 },
    { participante: "1", nome: "Augusto", concurso: "x1", nota: 48 },
    { participante: "1", nome: "Augusto", concurso: "x1", nota: 69 },
    { participante: "1", nome: "Augusto", concurso: "x1", nota: 90 },
    { participante: "2", nome: "Joana", concurso: "x1", nota: 77 },
    { participante: "2", nome: "Joana", concurso: "x1", nota: 76 },
    { participante: "2", nome: "Joana", concurso: "x1", nota: 76 },
    { participante: "2", nome: "Joana", concurso: "x1", nota: 76 },
    { participante: "2", nome: "Joana", concurso: "x1", nota: 76 }, 
    { participante: "3", nome: "Paulo", concurso: "x1", nota: 76 },
    { participante: "3", nome: "Paulo", concurso: "x1", nota: 76 }, 
    { participante: "3", nome: "Paulo", concurso: "x1", nota: 76 }, 
    { participante: "3", nome: "Paulo", concurso: "x1", nota: 76 }, 
    { participante: "3", nome: "Paulo", concurso: "x1", nota: 76 } 
   ];
   
   // calcula a soma das notas de cada aluno (e também a quantidade de notas para cada um)
   let MediaNotasParticipantes = {};
   for (let notaParticipante of notasParticipantes) {
       // se ainda não tem registro para esta matrícula, cria um novo 
       if (! MediaNotasParticipantes[notaParticipante.participante]) {
           MediaNotasParticipantes[notaParticipante.participante] = {
               'participante': notaParticipante.participante, 'total': 0, 'qtd': 0
           };
       }
       // atualiza o total e a quantidade de notas
       MediaNotasParticipantes[notaParticipante.participante].total += notaParticipante.nota;
       MediaNotasParticipantes[notaParticipante.participante].qtd++;
   }
   
   // tendo o total e a quantidade, calcula a média para cada um
   // cria um array com os valores
   MediaNotasParticipantes = Object.values(MediaNotasParticipantes);
   for (let m of MediaNotasParticipantes) {
       m.media = m.total / m.qtd;
       // apaga a quantidade e o total, pois não preciso mais
       delete m['qtd'];
       delete m['total'];
   }
   console.log(MediaNotasParticipantes);