// Verificação de Aprovado ou Reprovado

const prompt = require('prompt-sync')();

const media = parseFloat(prompt(`Digite a média: `));

if (media >= 7){
    console.log(`Aprovado`)
} else{
    console.log(`Reprovado`);
}