function highAndLow(numbers) {
  // ...
  const numbersArray = numbers.split(" ");
  const min = Math.min(...numbersArray);
  const max = Math.max(...numbersArray);
  return `${max} ${min}`;
}

function highAndLow2(numbers) {
  numbers = numbers.split(" ").map(Number);
  return Math.max.apply(0, numbers) + " " + Math.min.apply(0, numbers);
}

function highAndLow3(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

function highAndLow4(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + " " + Math.min.apply(null, arr);
}

function highAndLow5(numbers) {
  let arr = numbers.split(" ").map(Number);
  // return Math.max(...arr) + " " + Math.min(...arr);
  return arr
}
console.log(highAndLow5("1 5 3 5"))