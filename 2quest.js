// Classificação de Idade

const prompt = require('prompt-sync')();

const age = parseInt(prompt(`Qual sua idade? `));

if(age < 13){
    console.log(`Criança`);
} else if(age < 18){
    console.log(`Adolescente`);
} else if(age < 60){
    console.log(`Adulto`);
} else{
    console.log(`Idoso`);
}