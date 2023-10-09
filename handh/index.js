function generateArrays(n) {
  let result = [];
  let sizes = []; // массив для хранения уже сгенерированных размеров
  
  for (let i = 0; i < n; i++) {
    let size;
    
    do {
      size = Math.floor(Math.random() * 10) + 1;
    } while (sizes.includes(size)); // генерируем новый размер, пока не будет найден уникальный
    
    sizes.push(size); // добавляем сгенерированный размер в массив
    
    let array = [];
    
    while (array.length < size) {
      let randomNumber = Math.floor(Math.random() * 100);
      if (!array.includes(randomNumber)) {
        array.push(randomNumber);
      }
    }
    
    if (i % 2 === 0) {
      array.sort((a, b) => a - b);
    } else {
      array.sort((a, b) => b - a);
    }
    
    result.push(array);
  }
  
  return result;
}

console.log(generateArrays(5));