function somaNumeros(...numeros) {
    return numeros.reduce((soma, numero) => soma + numero, 0);
  }
  
  const resultado1 = somaNumeros(1, 2, 3, 4, 5);
  console.log('Soma dos números:', resultado1);  
  
  const resultado2 = somaNumeros(10, -5, 7.5, 20);
  console.log('Soma dos números:', resultado2);  
  