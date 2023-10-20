function cancelarExecucao(identificadorTimeout) {
    clearTimeout(identificadorTimeout);
  }
  
  function minhaFuncao() {
    console.log('A função foi executada após o tempo especificado.');
  }
  
  console.log('Esperando 2 segundos para executar a função...');
  const identificadorTimeout = setTimeout(minhaFuncao, 2000);
  
  setTimeout(() => {
    console.log('Cancelando a execução...');
    cancelarExecucao(identificadorTimeout);
  }, 1000);
  