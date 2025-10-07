
const form = document.getElementById("formFeedback");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const comentario = document.getElementById("comentario");
const mensagem = document.getElementById("mensagem");


form.addEventListener("submit", function (event) {
  event.preventDefault(); // impede o envio padrão do formulário


  if (nome.value.trim() === "") {
    mensagem.textContent = " O campo Nome não pode estar vazio.";
    mensagem.style.color = "red";
    return;
  }

  if (!email.value.includes("@")) {
    mensagem.textContent = " O email deve conter '@'.";
    mensagem.style.color = "red";
    return;
  }

  if (comentario.value.trim().length < 10) {
    mensagem.textContent = " O comentário deve ter pelo menos 10 caracteres.";
    mensagem.style.color = "red";
    return;
  }


  mensagem.textContent = `Obrigado pelo feedback, ${nome.value}!`;
  mensagem.style.color = "green";


  form.reset();
});
