function spinWords(string){
    //TODO Have fun :)
    const words = string.split(' ');
    const indexes = words.map((word,index) => {
      if(word.length >= 5){
        return index
      }
     
    })
    const cleanIndexes = indexes.filter( index => index != undefined)
     cleanIndexes.forEach( index => {
       words[index] = words[index].split("").reverse().join("");
     })
    return words.join(' ')
  }



  function spinWords2(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
  }

  function spinWords3(string){
    return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
  }