// Classificação de Notas

const prompt = require('prompt-sync')();

const nota = parseFloat(prompt(`Digite a nota: `));

if(nota >= 9 && nota <=10){
    console.log(`Conceito A`);
} else if(nota >= 7){
    console.log(`Conceito B`);
} else if(nota >=5){
    console.log(`Conceito C`);
} else{
    console.log(`Reprovado`);
}