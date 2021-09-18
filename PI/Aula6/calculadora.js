// Crie um arquivo calculadora.js que terá as diferentes operações  para realizar.
// Crie uma função adicionar, que deverá receber dois parâmetros e retornar a soma deles.
// Crie uma função de subtração, que deverá receber dois parâmetros e retornar a subtração do primeiro menos o segundo.
// Crie uma função de multiplicação, que deverá receber dois parâmetros e retornar o resultado de sua multiplicação.
// Crie uma função de divisão, que receberá dois parâmetros e retornará o resultado da divisão do primeiro sobre o segundo.

// calculadora nivel I
function adicionar(a,b){
    return a+b
}
console.log(adicionar(10,5))

function subtrair(a,b){
    return a-b
}
console.log(subtrair(10,5))
function multiplicacao(a,b){
    return a*b
}
console.log(multiplicacao(10,5))
function divisao(a,b){
    return a/b
}
console.log(divisao(10,2))
//Calculadora nivel II
// No seu arquivo calculadora.js,  a partir das 4 funções feitas anteriormente, crie um console.log no qual você irá colocar uma string para indicar que abaixo dela você começará a testar as funções, por exemplo:
// console.log ("-------------- Teste de Operações / Calculadora --------------")
// Execute a função que soma e a função que subtrai, passando quaisquer dois números como argumentos. Mostrar resultados no console.
// Execute a função que multiplica, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// Execute a função que faz divisão, passando quaisquer dois números como argumentos. Mostre o resultado no console.
// Execute a função que faz divisão, passando agora o número zero como um dos dois argumentos. Mostre o resultado no console.



console.log("---------------------Teste de Operações/Calculadora----------------------")

console.log(adicionar(2,5), "soma")
console.log(subtrair(2,5), "subtração")
console.log(multiplicacao(2,5), "multiplicação")
console.log(divisao(2,5), "divisão")

//Calculadora nivel III
// Crie uma função chamada quadradoDoNumero, que recebe um número como parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja, ao quadrado.
// Importante: quadradoDoNumero() deve usar a função multiplicação() para calcular o quadrado do parâmetro inserido em power().
// Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números, que serão inseridos por parâmetro.
// Importante: Em mediaDeTresNumeros() você precisará usar algumas funções criadas anteriormente em nossa calculadora.


// Crie a função calculaPorcentagem, que receberá dois parâmetros: o número total e a porcentagem que deseja calcular, e que deverá retornar x% de totalPorcentagem.
// Exemplo: calculaPorcentagem(300, 15)  (deve retornar 45, pois é 15% de 300). 

function quadradoDoNumero(x){
    return x*x
}
console.log(quadradoDoNumero(10))

function mediadeTresNumeros(x,y,z){
    return (x+y+z)/3
}
console.log(mediadeTresNumeros(5,2,7))

function calculaPorcentagem(Total,Valor){
    return (Total*Valor)/100
}
console.log(calculaPorcentagem(300,15))


