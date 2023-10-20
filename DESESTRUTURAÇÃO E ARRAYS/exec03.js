function separarArrays(array) {
    const numerosPares = [];
    const numerosImpares = [];
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        numerosPares.push(array[i]);
      } else {
        numerosImpares.push(array[i]);
      }
    }
  
    return { numerosPares, numerosImpares };
  }
  
  const numeros = [1, 2, 3, 4, 5, 6];
  const { numerosPares, numerosImpares } = separarArrays(numeros);
  
  console.log('Números pares:', numerosPares); 
  console.log('Números ímpares:', numerosImpares);  
  