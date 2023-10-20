function fetchData(url) {
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Erro ao obter os dados da API');
        }
        return response.json();
      });
  }
  
  // Exemplo de uso
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  fetchData(url)
    .then(data => {
      console.log('Dados obtidos:', data);
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error);
    });
  