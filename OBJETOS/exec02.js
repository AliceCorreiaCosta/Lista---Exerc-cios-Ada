function juntarObjetos(objeto1, objeto2) {
    const objetoCombinado = {};

    for (const propriedade1 in objeto1) {
        if (objeto1.hasOwnProperty(propriedade1)) {
          objetoCombinado[propriedade1] = objeto1[propriedade1];
        }
    }
    for (const propriedade2 in objeto2) {
        if (objeto2.hasOwnProperty(propriedade2)) {
          objetoCombinado[propriedade2] = objeto2[propriedade2];
        }
      }
    
      return objetoCombinado;
}

const objeto1 = { a: 1, b: 2 };
const objeto2 = { c: 3, d: 4 };

const objetoCombinado = juntarObjetos(objeto1, objeto2);
console.log('Objeto combinado:', objetoCombinado);  