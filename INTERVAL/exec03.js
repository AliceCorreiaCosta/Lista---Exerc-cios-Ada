function gerarNumerosAleatorios() {
    const intervalo = setInterval(() => {
      const numeroAleatorio = Math.random();
      console.log('Número aleatório:', numeroAleatorio);
    }, 500);
  

    setTimeout(() => {
      clearInterval(intervalo);
      console.log('Geração de números aleatórios interrompida.');
    }, 5000);
  }
  
  console.log('Iniciando a geração de números aleatórios...');
  gerarNumerosAleatorios();
  
  