function getMiddle(s) {
  //Code goes here!
  if (s.length % 2) {
    return s.slice(s.length / 2, s.length / 2 + 1);
  } else {
    return s.slice((s.length / 2) - 1,(s.length / 2) + 1);
  }
}

function getMiddle2(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

function getMiddle3(s) {
  var middle = s.length / 2;
  return s.length % 2
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

function getMiddle4(s) {
  return s.slice((s.length - 1) / 2, s.length / 2 + 1);
}
