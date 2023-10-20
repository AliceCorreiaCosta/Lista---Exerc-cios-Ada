function extrairInfo(arrayDeObjetos) {
    const idades = arrayDeObjetos.map(objeto => objeto.idade);
    return idades;
  }
  
  const pessoas = [
    { nome: 'Alice', idade: 18 },
    { nome: 'Bruna', idade: 16 },
    { nome: 'Carlos', idade: 20 }
  ];
  
  const idades = extrairInfo(pessoas);
  console.log('Idades:', idades); 