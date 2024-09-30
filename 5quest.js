// Verificação de Faixa Salarial

const prompt = require('prompt-sync')();

const faixaSalarial = parseFloat(prompt(`Informe o salário: `));

if (faixaSalarial > 6000){
    console.log(`Faixa salarial Alta`);
} else if(faixaSalarial > 1412){
    console.log(`Faixa salarial Média`);
} else{
    console.log(`Faixa salarial Baixa`);
}