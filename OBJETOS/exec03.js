function encontrarPropriedade(objeto, chave) {
    return objeto[chave];
}

const pessoa = {
    nome: 'Alice',
    idade: 18,
    cidade: 'Itu'
};

const nomeDaPessoa = encontrarPropriedade(pessoa, 'nome');
console.log('Nome da pessoa:', nomeDaPessoa);

const idadeDaPessoa = encontrarPropriedade(pessoa, 'idade');
console.log('Idade da pessoa:', idadeDaPessoa)