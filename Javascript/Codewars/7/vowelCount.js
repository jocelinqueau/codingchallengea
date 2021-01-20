function getCount(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function getCount2(str) {
  var vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  // enter your majic here
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }
  return vowelsCount;
}

function getCount(str) {
  return str.split("").filter((c) => "aeiouAEIOU".includes(c)).length;
}

//getCount2 maitrisé;
