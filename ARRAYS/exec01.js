function somaArray(array) {
    let soma = 0;
        for (let i = 0; i < array.length; i++) {
          soma += array[i];
        }
        return soma;
      }

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultado = somaArray(array)
console.log('A soma dos números é:', resultado);