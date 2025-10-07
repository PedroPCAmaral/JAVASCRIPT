// Selecionando os elementos da página
const botao = document.getElementById("clicar");
const contadorSpan = document.getElementById("contador");
const mensagem = document.getElementById("mensagem");

// Variável para contar os cliques
let contagem = 0;

// Flag para controlar o tempo (se o jogo está rodando ou não)
let jogoAtivo = true;

// Evento de clique no botão
botao.addEventListener("click", () => {
  if (jogoAtivo) {
    contagem++;
    contadorSpan.textContent = contagem;
  }
});

// Temporizador de 5 segundos
setTimeout(() => {
  jogoAtivo = false; // desativa o jogo
  botao.disabled = true; // desativa o botão
  mensagem.textContent = `Tempo esgotado! Você conseguiu ${contagem} cliques em 5 segundos. 👏`;
}, 5000);
