// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".

var comida = 1;

switch(comida) {
case 1:
console.log('Pipoca');
break;
case 2:
console.log('Macarrão');
break;
  case 3:
    console.log('Carne');
    break;
  case 4:
        console.log('Feijão');
        break;
  case 5:
            console.log('Brigadeiro');
            break;

default:
    console.log('Prato pronto, bom apetite!!!');
 }
//     let tempo = 5;
// function Pipoca(tempo){
//     if (tempo==tempo) {
//         console.log("Prato pronto, bom apetite")
//     } else if(tempo>tempo){
//         console.log("A comida queimou")
//     }
//     else if (tempo<tempo) {
//         console.log("Tempo insuficiente")
    
//     } else if(tempo!=tempo){
//         console.log("Prato inexistente")
//     }
//     else{
//     console.log("kabum")
// }
// }