// Classificação de Risco de Saúde

const prompt = require('prompt-sync')();

const imc = parseInt(prompt(`Digite o IMC: `));

if (imc < 18.5){
    console.log(`Baixo peso`);
} else if(imc < 24.99){
    console.log(`Normal`);
} else if(imc < 29.99){
    console.log(`Sobrepeso`);
} else{
    console.log(`Obesidade`);
}