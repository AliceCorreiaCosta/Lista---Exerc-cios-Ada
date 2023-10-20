function contadorInterval() {
  let contador = 1;
  const intervalo = setInterval(() => {
    console.log(contador);
    contador++;
    if (contador > 10) {
      clearInterval(intervalo);
    }
  }, 1000);
}

console.log('Iniciando o contador...');
contadorInterval();

  