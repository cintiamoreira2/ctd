
//escolher uma das 3 opções

const Jogador = parseInt(prompt("Pedra(1), papel(2) e tesoura(3). Digite a opcao desejada: "));
let random = parseInt(Math.random() * 3 + 1);//Math.random usada para gerar numeros aleatórios

let computador = random;

console.log(Jogador);
console.log (computador);

let resultado = "Sem calculo";

//estrutura de condicional 

if (Jogador == 1){

    if ( computador == 1) {
        resultado = 'empate';
    }
    if ( computador == 2) {
        resultado = 'derrota';
    }
    if ( computador == 3) {
        resultado = 'vitoria';
    }
}

if (Jogador == 2){

    if ( computador == 1) {
        resultado = 'vitoria';
    }
    if ( computador == 2) {
        resultado = 'empate';
    }
    if ( computador == 3) {
        resultado = 'derrota';
    }
}

if (Jogador == 3){

    if ( computador == 1) {
        resultado = 'derrota';
    }
    if ( computador == 2) {
        resultado = 'vitoria';
    }
    if ( computador == 3) {
        resultado = 'empate';
    }
}

alert(resultado) //mostrar o resultado para o usúario