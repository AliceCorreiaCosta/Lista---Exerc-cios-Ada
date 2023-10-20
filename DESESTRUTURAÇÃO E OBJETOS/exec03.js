function informacoesLivro(livro) {
    const { titulo, autor, ano } = livro;
    return `O livro ${titulo} foi escrito por ${autor} em ${ano}.`;
  }
  
  const livro = {
    titulo: '1984',
    autor: 'George Orwell',
    ano: 1949
  };
  
  const informacoes = informacoesLivro(livro);
  console.log(informacoes);

  