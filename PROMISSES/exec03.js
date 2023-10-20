function gerarNumeroAleatorio() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const numeroAleatorio = Math.random();
        resolve(numeroAleatorio);
      }, 2000);
    });
  }
  
  gerarNumeroAleatorio()
    .then(numero => {
      console.log('Número aleatório gerado:', numero);  
    })
   
  