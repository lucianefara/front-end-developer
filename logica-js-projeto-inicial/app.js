//Adivinhando o número secreto

//alert('Boas vindas ao jogo do número secreto');

//math.random é um número PSEUDO aleatório entre 0 e 1 mas não incluso o 1.
//parseInt é aceito apenas os números inteiros

/*let numeroSecreto = parseInt(Math.random() *10+1 );

let chute;
let contador = 1;

while(numeroSecreto != chute){

  chute = prompt('Digite o número secreto de 1 a 10');

    if(numeroSecreto == chute){
          
          break;

        } else{

          if(numeroSecreto > chute){
                alert('O número secreto é maior que ' + chute);
              }  else {
                alert('O número secreto é menor que ' + chute);
              }                 
              
              contador++ ;   

        }       
} */


//outra forma para diminuir o número de linhas de código

//OPERADOR TERNÁRIO

//let palavraTentativa = contador > 1 ? 'Tentativas' : 'Tentativa';
//alert(`Você acertou o número secreto ${numeroSecreto} com ${contador} ${palavraTentativa}!!`);


/*if(contador>1){
  alert(`Você acertou o número secreto ${numeroSecreto} com ${contador} vezes!!`);
} else {
  alert(`Você acertou o número secreto ${numeroSecreto} com ${contador} vez!`)
}*/





//Exercício 1

/*alert('Boas vindas ao nosso site');

let nome = prompt('insira seu nome')

let idade = prompt('insira sua idade')

let numeroDeVendas = 50;

let saldoDisponivel = 1000;*/

//----------------------------------------------


/*if(idade>=18){
    alert('Você já pode tirar sua habilitação!!');
    } 

let mensagemDeErro = alert('Preencha todos os campos');*/

//-----------------------------------------------


//Exercício 1

/*let diaDaSemana = prompt('Qual é o dia da semana?');

if(diaDaSemana == 'sabado' | diaDaSemana == 'domingo'){
  alert('Bom fim de semana!!')
} else {
    alert('Boa semana!!')
}*/

//Exercício 2

/*let numeroDigitado = prompt('digite um numero');

if(numeroDigitado<0){
    alert('Você digitou um número negativo')
} else {
    alert('Você digitou um número positivo');
}*/

//Exercicio 3

/*let pontuacao = prompt('Digite um valor');

if(pontuacao>=100){
  alert('Parabens, voce venceu!!');
} else {
   alert('Tente novamente para ganhar!!');
}*/


//Exercicio 4

/*let saldoConta = 500; // Exemplo de saldo
alert(`Seu saldo é de R$${saldoConta}.`);*/


//Exercicio 5

/*let nomeDoUsuario = prompt('Digite o seu nome');

alert('Seja bem-vindo ' + nomeDoUsuario);*/


//Desafio: hora da prática

//Exercício 1

//console.log('Boas-vindas');

/*Exercício 2 até 13

let nome = 'Luciane';

console.log(`olá, ${nome}`);
alert(`Olá, ${nome}`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');

console.log(`A linguagem de preferencia é o ${linguagem}`);


let valor1=1;
let valor2=2;

let result= valor1+valor2;
let resulSub = valor1-valor2;

console.log(`A soma de  ${valor1} +  ${valor2} é igual a ${result}`);

console.log(`A subtração de  ${valor1} -  ${valor2} é igual a ${resulSub}`);


let idade = prompt('Digite a sua idade');

//let palavraTentativa = contador > 1 ? 'Tentativas' : 'Tentativa';

let verifica = idade > 18 ? 'Você é maior de idade' : 'Você é menor de idade';

console.log(verifica);


let numero = prompt('Insira um valor');

let verificando = numero > 0 ? 'O número é positivo' : numero == 0 ? 'o número é zero' : 'número é negativo';

console.log(verificando);

let numeros = 0;

while(numeros<10){

  console.log(numeros);

  numeros++;

}

let nota = 0;

if(nota>7){
  console.log('Você foi aprovado');
} else {
  console.log('Você não foi aprovado');
}

let numeroAleat = Math.random();

console.log(numeroAleat);
*/

let numeroInteiroAleatorio = parseInt(Math.random()*10)+1;

console.log(numeroInteiroAleatorio);


let numeroInteiroAleatorio2 = parseInt(Math.random()*1000)+1;

console.log(numeroInteiroAleatorio2);

















