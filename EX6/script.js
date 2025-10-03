// getElementById()
let titulo = document.getElementById("titulo");
console.log("getElementById:", titulo.innerText);

// getElementsByClassName()
let paragrafos = document.getElementsByClassName("texto");
console.log("getElementsByClassName:", paragrafos);
console.log(paragrafos[0].innerText);
console.log(paragrafos[1].innerText);

// getElementsByTagName()
let divs = document.getElementsByTagName("div");
console.log("getElementsByTagName:", divs);
console.log(divs[0].innerText);
console.log(divs[1].innerText);


// querySelector()

let primeiroItem = document.querySelector(".item");

console.log("querySelector (primeiroItem):", primeiroItem);
// querySelectorAll()

let todosItens = document.querySelectorAll(".item");

console.log("querySelectorAll:");
todosItens.forEach(li => console.log(li.innerText));
