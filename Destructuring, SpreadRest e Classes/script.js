
const btn = document.getElementById("btn");
const output = document.getElementById("output");

// Evento de clique do botão
btn.addEventListener("click", () => {

    // Destructuring 
  const pessoa = {
    nome: "Lais",
    idade: 25,
    cidade: "Brasília"
  };

  // Extraindo nome e idade com destructuring
  const { nome, idade } = pessoa;

  // Spread 
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];

  // Combina os dois arrays em um só usando spread 
  const arrCombinado = [...arr1, ...arr2];

  // Rest 
  // Função que soma qualquer quantidade de números
  function somarTudo(...numeros) {
    return numeros.reduce((total, n) => total + n, 0);
  }

  const soma = somarTudo(10, 20, 30, 40);


  // Classes 
  class Carro {
    constructor(modelo) {
      this.modelo = modelo;
    }

    dirigir() {
      return `O ${this.modelo} está dirigindo!`;
    }
  }

  const carro1 = new Carro("Fusca");
  const carro2 = new Carro("Civic");

  // Saída
  output.textContent =
    ` Destructuring:\nNome: ${nome}, Idade: ${idade}\n\n` +
    ` Spread:\nArray combinado: [${arrCombinado.join(", ")}]\n\n` +
    ` Rest:\nSoma total: ${soma}\n\n` +
    ` Classes:\n${carro1.dirigir()}\n${carro2.dirigir()}`;
});
