class Forca { // O ARQUIVO README POSSUI INSTRUÇÕES DE USO DO CÓDIGO :)

  constructor(palavra){ 
    this.palavra = palavra.split(""); // coloca a palavra em um vetor
    this.vidas = 6; // inicia com 6 vidas
    this.acompanhamento = [];
    this.chutes = [];
  }

  montarAcompanhamento(){
    for (let i = 0; i < this.palavra.length; i++) { // confere quantas letras a palavra tem
      this.acompanhamento.push("_") // cria acompanhamento com a mesma quantidade de letras
    }
  }

  chutar(letra) {
    if (letra.split("").length == 1){ // confere se o valor de entrada tem apenas uma letra para contar o chute
      if (this.chutes.includes(letra) == false){ // confere se a letra já foi chutada
        this.chutes.push(letra); // adiciona a letra ao array de chutes 
        if (this.palavra.includes(letra) == true){ // procura a letra chutada na palavra
          return "Você acertou :)" // avisa que acertou
        } else {
          this.vidas += -1; // subtrai a vida
          return "Você perdeu 1 vida :(" // avisa que errou
        }
      } else {
        return "Essa letra já foi :|" // avisa que a letra já foi chutada
      }    
    } else {
      return "Digite apenas uma letra :|" // avisa que a entrada deve ser uma letra
    } 
  }

  atualizarAcompanhamento(){
    for (let i = 0; i < this.palavra.length; i++) { // percorre o vetor da palavra
      for (let y = 0; y < this.chutes.length; y++) { //percorre o vetor do chute
        if (this.palavra[i] == this.chutes[y]){  // identifica letra igual
          this.acompanhamento[i]=this.chutes[y] // adiciona a letra igual no vetor do acompanhamento
        }
      }
    }
  }

  buscarDadosDoJogo() { // retorna os dados do jogo já definidos
      return {
          letrasChutadas: this.chutes,
          vidas: this.vidas,
          palavra: this.acompanhamento
      }
  }

  buscarEstado() { 
    if (JSON.stringify(this.acompanhamento) == JSON.stringify(this.palavra)) { // compara o vetor acompanhamento com o valor palavra
      return "ganhou"; // ganha o jogo se é igual 
    } else if (this.vidas == 0){
      return "perdeu"; // perde se é diferente e as vidas acabaram
    } else {
      return ""; // continua se for nenhum dos casos
    }
  }
}

module.exports = Forca; 

// INSTRUÇÕES DE USO DO CÓDIGO PRESENTES NO README.md
// Para rodar o código corretamente, faça o download do arquivo zip, extraia os arquivos,
//abra o cmd na pasta do arquivo e execute os comandos "npm install" e "npm start" respectivamente
