function firstNotRepeatingCharacter(s) {
    let dict = {};
    let dict2 = {};
    let orderArray = []
        for(let i = 0; i < s.length ; i++){
            if(dict[s[i]] == null ){
                dict[s[i]] = {
                    number:1,
                    order:i
                }
            }
            else{
                dict[s[i]] = {
                    number: dict[s[i]].number + 1,
                    order:i
                }
            }
        }
        for (const [key, value] of Object.entries(dict)) {
      console.log(`${key}: ${value}`);
      if(value.number == 1){
          dict2[key] = value.order;
          orderArray.push(value.order);
      }
    }
    for (const [key, value] of Object.entries(dict2)){
        if(value == Math.min( ...orderArray)){
            return key
        }
    }
        return '_'
    }
    

    function firstNotRepeatingCharacter(a) {
        for (var i = 0; i < a.length; i++) {
    
            if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) {
                return a[i];
            }
        }
        return '_';
    }

//plus intelligent utiliser les fonctions built-in de l'array indefOf() et lastIndexOf

function firstNotRepeatingCharacter(s) {
    
    var arr = s.split("");
    
    for(var i = 0; i < arr.length; i++){
        var chr = arr[i];
        if( arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])){
            return arr[i]
        }
        
    }
    
    return "_"
}
