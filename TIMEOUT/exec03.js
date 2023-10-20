function intervaloPersonalizado(funcao, intervalo) {
    return setInterval(funcao, intervalo);
  }
  
  function minhaFuncao() {
    console.log('Esta função será executada a cada 2 segundos.');
  }
  
  const intervalo = 2000; 
  const identificadorIntervalo = intervaloPersonalizado(minhaFuncao, intervalo);
  
  setTimeout(() => {
    console.log('Cancelando o intervalo...');
    clearInterval(identificadorIntervalo);
  }, 10000);
  