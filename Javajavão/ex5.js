//1
function multiplicarVetorPorNumero(vetor, numero) {
    const resultado = vetor.map(valor => valor * numero);
    return resultado;
  }
  const vetorOriginal = [1, 2, 3, 4, 5];
  const numeroMultiplicador = 2;
  const vetorMultiplicado = multiplicarVetorPorNumero(vetorOriginal, numeroMultiplicador);
  console.log(vetorMultiplicado);
  //2
  function calcularProgressaoAritmetica(numTermos, a1, razao) {
    const progressao = [];
    for (let i = 0; i < numTermos; i++) {
      const termo = a1 + i * razao;
      progressao.push(termo);
    }
    return progressao;
  }
  const numTermosPA = 5;
  const a1PA = 3;
  const razaoPA = 2;
  const pa = calcularProgressaoAritmetica(numTermosPA, a1PA, razaoPA);
  console.log(pa);
  //3
  function calcularProgressaoGeometrica(numTermos, a1, razao) {
    const progressao = [];
    for (let i = 0; i < numTermos; i++) {
      const termo = a1 * Math.pow(razao, i);
      progressao.push(termo);
    }
    return progressao;
  }
  const numTermosPG = 5;
  const a1PG = 2;
  const razaoPG = 2;
  const pg = calcularProgressaoGeometrica(numTermosPG, a1PG, razaoPG);
  console.log(pg);
  //4
  function imprimirNumerosImpares(inicio = 0, fim = 100) {
    if (inicio > fim) {
      const temp = inicio;
      inicio = fim;
      fim = temp;
    }
  
    for (let i = inicio; i <= fim; i++) {
      if (i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  imprimirNumerosImpares(10, 30);
  //5
  function trocarElementosEntreVetores(vetorA, vetorB) {
    for (let i = 0; i < vetorA.length; i++) {
      const temp = vetorA[i];
      vetorA[i] = vetorB[i];
      vetorB[i] = temp;
    }
  }
  const vetorA = [1, 2, 3];
  const vetorB = [4, 5, 6];
  trocarElementosEntreVetores(vetorA, vetorB);
  console.log(vetorA); // Deve imprimir [4, 5, 6]
  console.log(vetorB); // Deve imprimir [1, 2, 3]
  //6
  function atribuirConceitos(notas) {
    const conceitos = [];
    for (const nota of notas) {
      if (nota >= 0 && nota <= 4.9) {
        conceitos.push("D");
      } else if (nota >= 5.0 && nota <= 6.9) {
        conceitos.push("C");
      } else if (nota >= 7.0 && nota <= 8.9) {
        conceitos.push("B");
      } else if (nota >= 9.0 && nota <= 10.0) {
        conceitos.push("A");
      } else {
        conceitos.push("Nota inválida");
      }
    }
    return conceitos;
  }
  const notasAlunos = [8.5, 6.2, 3.9, 9.7];
  const conceitosAlunos = atribuirConceitos(notasAlunos);
  console.log(conceitosAlunos);
  
  