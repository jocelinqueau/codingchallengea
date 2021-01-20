function solution(number) {
  if (number < 3) {
    return 0;
  } else {
    let multiples = [];
    for (i = 0; i < number; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        multiples.push(i);
      }
    }
    return multiples.reduce((tally, num) => tally + num, 0);
  }
}






function solution2(number) {
  var sum = 0;

  for (var i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
