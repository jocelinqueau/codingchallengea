function persistence(num) {
    let index = 0;
     //code me
   if(num < 10){
      return 0
    }
  else{
    return count(num,index)
  }
  }
  
  function count(num, index){
     const numbers = num.toString().split('');
     const multiply = numbers.reduce((tally,number)=>{
       return tally * parseInt(number)
    },1)
      index++
   if(multiply >= 10 ){
      return  count(multiply, index)
      }
      else{
        return index
      }
  
  }

  function persistence(num) {
    var times = 0;
    
    num = num.toString();
    
    while (num.length > 1) {
      times++;
      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
    }
    
    return times;
 }

 const persistence = num => {
    return `${num}`.length > 1 
      ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
      : 0;
  }

  function persistence(num) {
    for (var i = 0; num > 9; i++) {
      num = num.toString().split('').reduce((t, c) => c * t);
    }
    return i;
 }