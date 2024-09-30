// Verificação de Resultados de Um Concurso

const prompt = require('prompt-sync')();

const resultado = parseFloat(prompt(`Digite o resultado: `));

if (resultado >= 60){
    console.log(`Aprovado no concurso`)
} else{
    console.log(`Reprovado no concurso`);
}