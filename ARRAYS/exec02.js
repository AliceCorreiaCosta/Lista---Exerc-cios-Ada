function maiorNumero(array) {
    let maior = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > maior) {
        maior = array[i];
      }
    }
  
    return maior;
  }
  
  const numeros = [100, 51, 18, 20, 37];
  const maior = maiorNumero(numeros);
  console.log('O maior número é:', maior);  
  