function primeiroEUltimo(array) {
    if (array.length < 2) {
      throw new Error('O array deve conter pelo menos dois elementos.');
    }
  
    const primeiro = array[0];
    const ultimo = array[array.length - 1];
  
    return [primeiro, ultimo];
  }
  
  const meuArray = [10, 20, 30, 40, 50];
  try {
    const resultado = primeiroEUltimo(meuArray);
    console.log('Primeiro e último elementos:', resultado); 
  } catch (erro) {
    console.error(erro.message);
  }
  