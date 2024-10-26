//1 e 2
const aluno = {
    nome: 'joao',
    idade: 25,
    endereco: {
      logradouro: 'RUA X',
      numero: 99,
      complemento: '',
      bairro: 'Vila Santan Cecilia',
      cidade: 'VR',
      uf: 'RJ'
    }
  };
  
  console.log(aluno);
  console.log(aluno.endereco);
  //3
  const a = 10;
const b = 2;
const c = 6;
const d = 9;

console.log('Adição:', a + b + c + d);
console.log('Subtração:', a - b);
console.log('Multiplicação:', a * b * c);
console.log('Divisão:', c / d);
//4
const a2 = true;
const b2 = false;
const c2 = true;
const d2 = false;

console.log('a igual b:', a2 == b2);
console.log('b and c:', b2 && c2);
console.log('c diferente de d:', c2 !== d2);
//5
const saldo = 100;

const mensagem = saldo > 0 ? 'Saldo Positivo' : 'Insuficiência de Saldo';
console.log(mensagem);

