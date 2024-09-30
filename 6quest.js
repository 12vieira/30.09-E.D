// Avalaiação de Desempenho em um jogo

const prompt = require('prompt-sync')();

const jogo = parseInt(prompt(`Infome a pontuação: `));

if (jogo > 1200){
    console.log(`Pontuação alta`);
} else if(jogo > 650){
    console.log(`Pontuação média`);
} else{
    console.log(`Pontuação baixa`);
}