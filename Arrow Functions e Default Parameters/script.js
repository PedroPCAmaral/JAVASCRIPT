
const btn = document.getElementById("btn");
const output = document.getElementById("output");


const somar = (a, b) => a + b;



function cumprimentar(nome = "Visitante") {
  return `Olá, ${nome}! Seja bem-vindo(a)!`;
}


btn.addEventListener("click", () => {
  const resultadoSoma = somar(5, 3);
  const mensagem = cumprimentar("Lais");

  output.textContent = `Resultado da soma: ${resultadoSoma}\n${mensagem}`;
});
