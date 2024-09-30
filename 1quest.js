// Verificação de Número Par ou Ímpar
const prompt = require('prompt-sync')();
const number = parseInt(prompt(`Insira um número: `));

if(number % 2 != 0){
    console.log(`O número é ímpar!`)
} else{
    console.log(`O número é par!`);
}