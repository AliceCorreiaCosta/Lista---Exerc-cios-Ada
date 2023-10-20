function contarPropriedades(objeto) {
    let contador = 0;

    for (const propriedade in objeto) {
        if (objeto.hasOwnProperty(propriedade)) {
          contador++;
        }
    }
    return contador;
}

const pessoa = {
    nome: 'Alice',
    idade: 18,
    cidade: 'Itu'
  };
  
  const numeroDePropriedades = contarPropriedades(pessoa);
  console.log('Número de propriedades:', numeroDePropriedades); 