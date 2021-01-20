function removeChar(str) {
  //You got this!
  return str.substring(1, str.length - 1);
}

function removeChar2(str) {
  return str.slice(1, -1);
}

const removeChar3 = (str) => str.replace(/^.|.$/g, "");

// learn last one
