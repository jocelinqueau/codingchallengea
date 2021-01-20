decodeMorse = function(morseCode){
  //your code here
 
  const chunckOfWord = morseCode.trim().split("   ");
  const Wordsletters = chunckOfWord.map(word =>  word.split(" "))
  const ArrayOfLetters = Wordsletters.map(word =>{
    return word.map(letter => {
      return MORSE_CODE[letter]
    })
})
  
const realWord = ArrayOfLetters.map(word => { return word.reduce((tally,letter) =>{ return tally + letter},"")})
  let mot = "";
  
  for(let i = 0 ; i < realWord.length; i++){
    if(i === realWord.length -1 ){
      mot += realWord[i]
    }
    else{
    mot += realWord[i] + " "
    }
  }
  return mot 
}



decodeMorse = function(morseCode){
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(' ').map(decodeMorseLetter).join('');
  }
  return morseCode.trim().split('   ').map(decodeMorseWord).join(' ');
}



decodeMorse = function(morseCode){
  return morseCode
    .trim()
    .split(/  | /)
    .map( (code) => MORSE_CODE[code] || ' ')
    .join('');
}

decodeMorse = function(morseCode){
  return morseCode.trim().split(' ').map(a => MORSE_CODE[a] || ' ').join('').replace(/\s+/g, ' ');
}

decodeMorse = function(morseCode){
  return morseCode.trim().split('   ').map(function(word) {
    return word.split(' ').map(function(letter) {
      return MORSE_CODE[letter];
    }).join('');
  }).join(' ');
}