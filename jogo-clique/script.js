// Selecionando os elementos da página
const btnRapido = document.getElementById("rapido");
const btnDevagar = document.getElementById("devagar");
const resultado = document.getElementById("resultado");
const contRapido = document.getElementById("contRapido");
const contDevagar = document.getElementById("contDevagar");

// Variáveis para armazenar a contagem de cliques
let cliquesRapido = 0;
let cliquesDevagar = 0;
let totalCliques = 0;

// Função para verificar e exibir o resultado
function verificarResultado() {
  contRapido.textContent = cliquesRapido;
  contDevagar.textContent = cliquesDevagar;

  if (totalCliques >= 10) {
    if (cliquesRapido > cliquesDevagar) {
      resultado.textContent = `O botão "Clique Rápido" foi clicado mais vezes (${cliquesRapido} vezes)!`;
    } else if (cliquesDevagar > cliquesRapido) {
      resultado.textContent = `O botão "Clique Devagar" foi clicado mais vezes (${cliquesDevagar} vezes)!`;
    } else {
      resultado.textContent = `Empate! Ambos foram clicados ${cliquesRapido} vezes.`;
    }

    // Desativar os botões após 10 cliques
    btnRapido.disabled = true;
    btnDevagar.disabled = true;
  }
}

// Eventos de clique
btnRapido.addEventListener("click", () => {
  cliquesRapido++;
  totalCliques++;
  verificarResultado();
});

btnDevagar.addEventListener("click", () => {
  cliquesDevagar++;
  totalCliques++;
  verificarResultado();
});
