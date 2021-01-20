function likes(names) {
    // TODO
    if( ! names.length){
      return `no one likes this`
    }
    else if( names.length === 1){
      return `${names[0]} likes this`
    }
    else if(names.length === 2){
      return `${names[0]} and ${names[1]} like this`
    }
    else if (names.length ===3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else if( names.length > 3){
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

  function likes(names) {
    names = names || [];
    switch(names.length){
      case 0: return 'no one likes this';      case 1: return names[0] + ' likes this';      case 2: return names[0] + ' and ' + names[1] + ' like this';      case 3: return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this';      default: return names[0] + ', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
    }
  }

  function likes (names) {
    var templates = [
      'no one likes this',
      '{name} likes this',
      '{name} and {name} like this',
      '{name}, {name} and {name} like this',
      '{name}, {name} and {n} others like this'
    ];
    var idx = Math.min(names.length, 4);
    
    return templates[idx].replace(/{name}|{n}/g, function (val) {
      return val === '{name}' ? names.shift() : names.length;
    });
  }