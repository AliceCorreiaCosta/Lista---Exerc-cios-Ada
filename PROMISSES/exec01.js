function delayedPromise() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolvida após 1 segundo.');
      }, 1000);
    });
  }
  
  delayedPromise()
    .then((mensagem) => {
      console.log(mensagem);  
    });
  