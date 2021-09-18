//  Exercicio feito em grupo
// Crie uma função que converta polegadas em centímetros. 
// Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
// Crie uma função que receba uma string e a converta em um URL.
// ex: "funcaojs" é retornado como "http://www.funcaojs.com.br"
// Crie uma função que recebe uma string e retorna a mesma frase, mas com o caracter de exclamação ( ! ).
// Crie uma função que calcule a idade dos cachorros, considerando que 1 ano humano, equivale a 7 anos para eles.
// Crie uma função que calcule o valor da sua hora de trabalho, tendo como parâmetro o seu salário mensal.
// PS: considere que você trabalhe 160 horas no mês.
// Crie a função calculadora de IMC* de uma pessoa, que recebe a altura em centímetros e o peso em quilogramas. Em seguida, execute a função, testando diferentes valores. 
// *IMC, significa Índice de Massa Corporal e é um parâmetro utilizado para saber se o peso está de acordo com a altura.
// Crie uma função que receba uma string em minúsculas, converta-a em maiúsculas e as retorne. 
// Investigue o que o método de .toUpperCase() faz.
// Crie uma função que receba um parâmetro e retorne o tipo de dado deste parâmetro.
// Dica: Isso te ajudará a entender o que o operador typeof faz.
// Crie uma função pela qual passamos o raio de um círculo e ela retorna a circunferência.
// Dica: Investigue se o objeto Math tem entre suas propriedades o número Pi.


// exercicio 1

function converterPolegadasCentimentros(x){
    return x/2.54
}

console.log(converterPolegadasCentimentros(2));

//exercicio 2
Recebe pelo parâmetro polegadas e retorna seu equivalente em centímetros.
  let cm
  let pol

  function converterPolParaCm(pol) {
    console.log((cm = pol * 2.54))
  }

  converterPolParaCm(10)
   //exercicio 3

  let string
  let url

function converterStringEmUrl(string) {
  console.log((url = 'HTTP://www.' + string + '.com.br'))
}

converterStringEmUrl('nomedomeusite')

//exercicio 4
// função para conseguir comparar a sua idade ao do cachorro
// passar uma função com o parametro e após o calculo chamar a função no escopo global passar o valor do parametro
function calculadoraIdadeDogs(idadeHumano){
    let idadeCachorro = idadeHumano * 7
    console.log('A idade do seu cachorro comparada a sua é ' + idadeCachorro + ' anos')
}
calculadoraIdadeDogs(15)

//exercicio 5
function HoraTrabalho(salario,jornada) {


    let SalarioHora= salario/jornada;
    
    console.log ('Seu salario por hora é de '+ SalarioHora.toFixed(2))
    }
    
    HoraTrabalho(1500,160)
//exercicio 6
function gritariaAlheia(fraseQualquer){
    console.log(`${fraseQualquer}!`)
}
gritariaAlheia('Up the irons')

//exercicio 7
//exercicio 8
//método toUpperCase retorna o valor da string inicial convertido em letras maiusculas
console.log('pronto'.toUpperCase);

//exercicio 9
function typeOf(obj) {
    if ( typeof(obj) == "object" )
      if (obj.length)
        return "array";
      else
        return "object";
      } else
    return typeof(obj);
  }

