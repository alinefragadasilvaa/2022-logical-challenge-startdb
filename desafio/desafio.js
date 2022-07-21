// O ARQUIVO README POSSUI INSTRUÇÕES DE USO DO CÓDIGO :)

const readline = require('readline-sync'); 
const Forca = require('./forca');

console.log("VOCÊ ENTROU NO JOGO DA FORCA DA ALINE :)") // titulo do console

const jogo = new Forca('abacaxi'); // inicia o jogo
jogo.montarAcompanhamento(); // monta array de acompanhamento do jogo ['_', '_', '_', '_']

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) { // roda enquanto não ganhar ou perder
    const chute = readline.question("Aguardando chute: \n"); // pede o chute
    console.log(jogo.chutar(chute)); // introduz chute no método chutar
    jogo.atualizarAcompanhamento(); // atualiza o acompanhamento do jogo
    console.log(jogo.buscarDadosDoJogo()) // verifica se o jogo acaba ou continua
}

console.log("Você " + jogo.buscarEstado()); // informa se perdeu ou ganhou

// O ARQUIVO README POSSUI INSTRUÇÕES DE USO DO CÓDIGO :)
