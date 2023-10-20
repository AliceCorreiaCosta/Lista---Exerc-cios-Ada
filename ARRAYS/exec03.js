function mediaArray(array) {
   let soma = 0;
   for (let i = 0; i < array.length; i++) {
    soma += array[i];
}

const media = soma / array.length;
  return media;
}

const numeros = [7.9, 3.1, 8.7, 10, 5.2];
const media = mediaArray(numeros);
console.log('A média dos números é:', media);