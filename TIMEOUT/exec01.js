function executarAposTempo(funcao, tempo) {
    setTimeout(funcao, tempo);
  }
  
  function minhaFuncao() {
    console.log('A função foi executada após o tempo especificado.');
  }
  
  console.log('Esperando 2 segundos para executar a função...');
  executarAposTempo(minhaFuncao, 2000);
  