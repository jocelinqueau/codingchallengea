function digital_root(n) {
    const numbers = n.toString().split('');
     const sum = numbers.reduce((tally,number)=> tally+ parseInt(number),0)
      
     if (sum.toString().length > 1){
       return digital_root(sum)
     }
     return sum
   }
   