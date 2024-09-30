// Classificação de Temperatura

const prompt = require('prompt-sync')();

const temp = parseFloat(prompt(`Digite a Temperatura em ºC: `));

if(temp < 18){
    console.log(`Frio`);
} else if(temp < 22){
    console.log(`Agradável`)
} else {
    console.log(`Quente`);
}