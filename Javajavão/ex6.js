//1
function calcularNovoSalario(salarioAtual, plano) {
    let aumento = 0;
  
    switch (plano) {
      case 'A':
        aumento = salarioAtual * 0.10;
        break;
      case 'B':
        aumento = salarioAtual * 0.15;
        break;
      case 'C':
        aumento = salarioAtual * 0.20;
        break;
      default:
        console.log("Plano inválido");
        return salarioAtual;
    }
  
    const novoSalario = salarioAtual + aumento;
    return novoSalario;
  }
  const salarioAtual = 3000;
  const novoSalario = calcularNovoSalario(salarioAtual, 'B');
  console.log(`Novo salário: R$ ${novoSalario}`);
  //2
  function verificarDiaSemana(dia) {
    switch (dia) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        console.log("Dia útil");
        break;
      case 6:
      case 7:
        console.log("Fim de semana");
        break;
      default:
        console.log("Dia inválido");
    }
  }
  const diaDaSemana = 3; // Exemplo para quarta-feira
  verificarDiaSemana(diaDaSemana);
  //3
  function separarNumerosParesEImpares(numeros) {
    const pares = numeros.filter(numero => numero % 2 === 0);
    const impares = numeros.filter(numero => numero % 2 !== 0);
  
    console.log("Números pares:", pares);
    console.log("Números ímpares:", impares);
  }
  const numerosPreDeterminados = [2, 5, 8, 11, 14];
  separarNumerosParesEImpares(numerosPreDeterminados);
  //4
  function separarNumerosParesEImpares(vetor) {
    const pares = vetor.filter(numero => numero % 2 === 0);
    const impares = vetor.filter(numero => numero % 2 !== 0);
  
    console.log("Números pares:", pares);
    console.log("Números ímpares:", impares);
  }
  const vetorNumeros = [2, 5, 8, 11, 14];
  separarNumerosParesEImpares(vetorNumeros);
  //5
  function contarNumerosNegativosEPositivos(vetor) {
    let negativos = 0;
    let positivos = 0;
  
    for (const numero of vetor) {
      if (numero < 0) {
        negativos++;
      } else if (numero > 0) {
        positivos++;
      }
    }
  
    console.log(`Quantidade de números negativos: ${negativos}`);
    console.log(`Quantidade de números positivos: ${positivos}`);
  }
  const vetorNumero = [-2, 5, 0, -7, 8, 10, -1, 3, -4, 6];
  contarNumerosNegativosEPositivos(vetorNumero);
  //6
  function calcularMediaAritmetica(vetor) {
    const soma = vetor.reduce((acumulador, numero) => acumulador + numero, 0);
    const media = soma / vetor.length;
    return media;
  }
  const vetorNum = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  const media = calcularMediaAritmetica(vetorNum);
  console.log(`Média aritmética: ${media}`);
  //7
  function encontrarMaiorEMenor(vetor) {
    const maior = Math.max(...vetor);
    const menor = Math.min(...vetor);
  
    console.log(`Maior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
  }
  const vetorNumber = [10, 5, 30, 8, 42, 15, 7, 56, 23, 18];
  encontrarMaiorEMenor(vetorNumber);
  
  
  
  