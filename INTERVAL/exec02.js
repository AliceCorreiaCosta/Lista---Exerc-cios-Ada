let intervalo; 

function contadorInterval() {
  let contador = 1;
  intervalo = setInterval(() => {
    console.log(contador);
    contador++;
    if (contador > 10) {
      pararContador();
    }
  }, 1000);
}

function pararContador() {
  clearInterval(intervalo);
  console.log('Contador interrompido.');
}

console.log('Iniciando o contador...');
contadorInterval();

setTimeout(pararContador, 5000);
