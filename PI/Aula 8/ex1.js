/*Crie uma função podeSubir() que receba dois parâmetros:
- altura da pessoa;
- se está acompanhada.

Deve retornar um valor booleano (TRUE, FALSE) que indique se a pessoa pode
subir ou não, baseado nas seguintes condições:

a) A pessoa deve medir mais de 1.40m e menos de 2 metros.
b) Se a pessoa medir menos de 1.40m, deverá ir acompanhada.
c) Se a pessoa medir menos de 1.20m, não poderá subir, nem
acompanhada.

2) Modifique a função podeSubir(), de modo que ela exiba uma mensagem
de autorização ou de impedimento no acesso ao brinquedo dependendo

se a pessoa se enquadra ou não nas condições do exercício anterior. Por
exemplo:

a) Em caso de autorização, exiba a mensagem: “Acesso
autorizado” ou “Acesso autorizado somente com
acompanhante”;
b) Em caso de impedimento,exiba a mensagem "Acesso negado"*/

// Participantes do grupo Gabriel Josias, Rafael Camargo, Wesley Lubke, Eduardo Russo e Sidcley Nascimento

function podeSubir(altura, acompanhado){
    if (altura>=1.40 && altura <=2){
        return console.log("Acesso autorizado");
    }
    else if(altura < 1.40 && acompanhado == true){
        return console.log("Acesso somente acompanhado");
    }
    else(altura < 1.20) {
        return console.log("Acesso negado");
    }
    
}
podeSubir(1.50, true); 


/*SOLUÇÃO DA PROFESSORA*/
