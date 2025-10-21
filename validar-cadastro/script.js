const form = document.getElementById("formCadastro");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");

  let valido = true;

  // validar o nome
  if (!nome.value.trim()) {
    document.getElementById("erroNome").textContent = "O nome é obrigatório";
    nome.style.border = "1px solid red";
    valido = false;
  } else {
    document.getElementById("erroNome").textContent = "";
    nome.style.border = "";
  }

  // validar o e-mail
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email.value.trim() || !regexEmail.test(email.value)) {
    document.getElementById("erroEmail").textContent = "E-mail inválido";
    email.style.border = "1px solid red";
    valido = false;
  } else {
    document.getElementById("erroEmail").textContent = "";
    email.style.border = "";
  }

  // verificar se o formulário é válido
  if (valido) {
    alert("Formulário válido! Enviando dados...Enviado!");
  } else {
    alert("Por favor, corrija os erros antes de enviar.");
  }

  // reset no final (sempre limpa o formulário)
  form.reset();
});
