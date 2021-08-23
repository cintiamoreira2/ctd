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

console.log("---------------------Teste de Operações/Calculadora----------------------")

console.log(adicionar(2,5), "soma")
console.log(subtrair(2,5), "subtração")
console.log(multiplicacao(2,5), "multiplicação")
console.log(divisao(2,5), "divisão")

//Calculadora nivel III
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
