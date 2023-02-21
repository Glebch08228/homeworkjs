
function ArraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  
  let n = parseInt(prompt("Введіть кількість елементів масиву: "));
  
  
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 100));
  }
  
  
  console.log("Масив:", arr);
  console.log("Сума елементів:", ArraySum(arr));