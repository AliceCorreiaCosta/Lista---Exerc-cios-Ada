function desestruturarUsuario(usuario) {
    const { id, email } = usuario;
    return { id, email };
  }
  
  const usuario = {
    id: 1033,
    nome: 'Alice Correia',
    email: 'alice@outlook.com'
  };
  
  const usuarioDesestruturado = desestruturarUsuario(usuario);
  console.log('Usuário desestruturado:', usuarioDesestruturado);  
   
  