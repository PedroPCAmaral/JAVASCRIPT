// 3. Criar variáveis conforme solicitado

const nomeJogador = "Lucas";           
let idade = 25;                        
let estaOnline = true;                 

const jogoFavorito = {                 
  nome: "Zelda: Breath of the Wild",
  anoLancamento: 2017
};

const pontuacoes = [85, 90, 78];      // array com últimas 3 pontuações

// 4. Mostrar no console o valor e o tipo (typeof)

console.log("Nome do jogador:", nomeJogador, "| Tipo:", typeof nomeJogador);
console.log("Idade:", idade, "| Tipo:", typeof idade);
console.log("Está online?", estaOnline, "| Tipo:", typeof estaOnline);
console.log("Jogo favorito:", jogoFavorito, "| Tipo:", typeof jogoFavorito);
console.log("Pontuações:", pontuacoes, "| Tipo:", typeof pontuacoes);

// 5. Testar mudar idade e status online, mas não o nome (const)

idade = 26;
estaOnline = false;

console.log("\nDepois de alterar idade e status online:");
console.log("Idade:", idade);
console.log("Está online?", estaOnline);


// Desafio extra: calcular média das 3 pontuações

const soma = pontuacoes.reduce((acumulador, atual) => acumulador + atual, 0);
const media = soma / pontuacoes.length;

console.log(`\nA média de pontos do jogador ${nomeJogador} foi: ${media.toFixed(2)}`);
