// Criando um array vazio
const frutas = [];

// Adicionando elementos ao array usando push()
frutas.push("maçã");
frutas.push("banana");
frutas.push("laranja");

// Agora, o array frutas contém três elementos
console.log(frutas); // Output: ["maçã", "banana", "laranja"]

// Adicionando elementos ao início do array usando unshift()
frutas.unshift("uva", "morango");

// O array frutas agora contém cinco elementos, com "uva" e "morango" no início
console.log(frutas); // Output: ["uva", "morango", "maçã", "banana", "laranja"]
