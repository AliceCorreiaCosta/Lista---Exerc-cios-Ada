function infoPessoa(pessoa) {
    const { nome, idade, cidade } = pessoa;
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
  }
  
  const pessoa = {
    nome: 'Alice',
    idade: 18,
    cidade: 'Itu'
  };
  
  const informacoes = infoPessoa(pessoa);
  console.log(informacoes); 
  