
let precoProduto = 20;
let quantidade = 3;

let total = precoProduto * quantidade;

let dobro = total*2;

let resto = total % 2;

let cupomValido = true;
let freteGratis = false;

let algum_benefício = cupomValido || freteGratis;

let todos_os_benefícios = cupomValido && freteGratis;

document.getElementById("preco").innerText = "R$" + precoProduto;

document.getElementById("total").innerText = "R$" + total;

document.getElementById("quantidade").innerText = quantidade;

document.getElementById("resto").innerText = resto;

document.getElementById("dobro").innerText = "R$" + dobro;

document.getElementById("cupom").innerText = cupomValido ? "Sim": "Não";

document.getElementById("frete").innerText = freteGratis ? "Sim": "Não";

document.getElementById("algum").innerText = algum_benefício ? "Sim": "Não";

document.getElementById("todos").innerText = todos_os_benefícios ? "Sim": "Não";