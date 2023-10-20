function mesclarObjetos(...objetos) {
    return objetos.reduce((resultado, objeto) => ({ ...resultado, ...objeto }), {});
  }
  
  
  const objeto1 = { a: 5, b: 7 };
  const objeto2 = { b: 9, c: 11 };
  const objeto3 = { c: 13, d: 15 };
  
  const objetoMesclado = mesclarObjetos(objeto1, objeto2, objeto3);
  console.log('Objeto mesclado:', objetoMesclado);  
