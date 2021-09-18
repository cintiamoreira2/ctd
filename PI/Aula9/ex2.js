// Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

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


let comida, 
adicionarTempo, 
reduzirTempo, 
tempoTotal = 0
let brigadeiro=5,
    carne = 15,
    feijao = 15,
    macarrao=15,
    pipoca=5

    function incluirTempo() {
        comida = pipoca
        adicionarTempo = 55 
        reduzirTempo = 0
    }
function calcularTempo(comida, adicionarTempo, reduzirTempo) {
    if (comida == pipoca) {
        tempoTotal = pipoca + adicionarTempo - reduzirTempo
        console.log(tempoTotal);
    } else if (comida == macarrao) {
        tempoTotal = macarrao + adicionarTempo - reduzirTempo
        console.log(tempoTotal);
    } else if (comida == carne) {
        tempoTotal = carne + adicionarTempo - reduzirTempo
        console.log(tempoTotal);
    } else if (comida == feijao) {
        tempoTotal = feijao + adicionarTempo - reduzirTempo
        console.log(tempoTotal);
    } else if (comida == brigadeiro) {
        tempoTotal = brigadeiro + adicionarTempo - reduzirTempo
        console.log(tempoTotal);
    } else {
        console.log('Escolha outra opção');
    }
}

function informarUsuario(tempoTotal, comida) {
    if (tempoTotal > 2 * comida && tempoTotal < 3 * comida) {
        console.log('A comida queimou!!!');
    } else if (tempoTotal < comida) {
        console.log('Tempo insuficiente!!!');
    } else if (tempoTotal > 3 * comida) {
        console.log('Explosão');
    } else {
        console.log('Aproveite a comida');
    }
}

incluirTempo()
calcularTempo(comida, adicionarTempo, reduzirTempo)
informarUsuario(tempoTotal, comida)