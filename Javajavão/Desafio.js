const valor = parseInt(prompt("Digite um valor inteiro:"));

if (valor > 50) {
  const quadrado = valor * valor;
  console.log(`O quadrado do valor é: ${quadrado}`);
} else {
  console.log("O valor não é maior do que 50.");
}
