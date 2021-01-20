const capitalize = (s) => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

function accum(s) {
  // your code
  let arrayString = s.split("");
  const Almost = arrayString.reduce((tally, item, index) => {
    return tally + (capitalize(item.repeat(index + 1)) + "-");
  }, "");
  return Almost.slice(0, Almost.length - 1);
}

function accum2(s) {
  return s
    .split("")
    .map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i))
    .join("-");
}

function accum3(s) {
  return s
    .split("")
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join("-");
}

function accum4(str) {
  var letters = str.split("");
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(
      letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase())
    );
  }
  return result.join("-");
}

function accum5(s) {
  return [...s]
    .map((element, index) => {
      return element.toUpperCase() + element.toLowerCase().repeat(index);
    })
    .join("-");
}

function accum6(str) {
  var res = [];
  for (var i = 0; i < str.length; i++) {
    var row = "";
    for (var j = 0; j < i + 1; j++) {
      row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    res.push(row);
  }
  return res.join("-");
}
