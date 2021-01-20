function duplicateCount(text){
    //...
    const lower_text = text.toLowerCase()
    const count = {}
    let endCount = 0
    for (let i =0 ;i < lower_text.length ; i++ ){
      count[lower_text[i]] = count[lower_text[i]] +1  || 1
    }
    for (let property in count){
      if(count[property] > 1){
        endCount +=1
      }
    }
    
    return endCount
  }

  function duplicateCount(text){
    return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
  }