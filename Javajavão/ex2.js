// 1. Criar e imprimir a variável palavra1
var palavra1 = "Aprendendo";
console.log(palavra1);

// 2. Criar a variável palavra2
var palavra2 = "strings em JavaScript";

// 3. Concatenar as variáveis palavra1 e palavra2 com espaços
var resultado = palavra1 + " " + palavra2;
console.log(resultado);

// 4. Criar 3 variáveis
let palavra4 = "String 4";
let palavra5 = "String 5";
let palavra6 = "String 6";

// Exibir a string de múltiplas linhas usando console.log()
console.log(`Esta é a frase com a ${palavra4}\nEsta é a frase com a ${palavra5}\nEsta é a frase com a ${palavra6}`);
    
// 5. Criar variável e encontrar posição da palavra "Javascript"
let frase = "Primeiro contato com Javascript";
let posicao = frase.indexOf("Javascript");
console.log(`A posição da palavra "Javascript" é: ${posicao}`);

// 6. Transformar string em vetor e imprimir
let cor = "Amarelo,Azul,Verde,Marron";
let vetorCores = cor.split(",");
console.log(vetorCores);

// 7. Efetuar a troca da palavra "string" para "S T R I N G"
let texto = 'O tipo String do JavaScript é usado para representar informações de texto. É um conjunto de "elementos" composto por valores inteiros de 16-bits sem sinal.  Cada  elemento  dentro  da  String  ocupa  uma  posição  dentro  dessa  String.  O primeiro elemento está no índice 0, o próximono índice 1, e assim sucessivamente. O tamanho de uma String é a quantidade de elementos que ela possui. Você pode criar strings usando strings literais ou objetos string.';
let textoModificado = texto.replace(/string/g, 'S T R I N G');
console.log(textoModificado);

// 8. Criar um objeto aluno com as propriedades
let aluno = {
    Nome: "João",
    Endereço: {
      Logradouro: "Rua A",
      Numero: "123",
      Complemento: "Apto 4",
      Bairro: "Centro",
      Cidade: "São Paulo",
      Uf: "SP"
    },
    email: "joao@example.com",
    Telefone: {
      Fixo: "111-222-3333",
      Celular: "99999-8888"
    }
  };
  
  // 9. Imprimir o nome do aluno e seus respectivos telefones
  console.log("Nome:", aluno.Nome);
  console.log("Telefone Fixo:", aluno.Telefone.Fixo);
  console.log("Telefone Celular:", aluno.Telefone.Celular);
  
  // 10. Apagar o endereço do aluno e imprimir o objeto aluno completo
  delete aluno.Endereço;
  console.log(aluno);
  